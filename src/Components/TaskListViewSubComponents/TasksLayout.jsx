import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import TaskItem from "./TaskItem";
import taskData from "../taskData";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import { useState } from "react";


const TasksLayout = ({ showDetails }) => {

    const [tasks, updateTasks] = useState(taskData);

    const handleOnDragEnd = (result) => {
        // for debugging purposes
        console.log(result)
        // to avoid missLocating
        if(!result.destination) return;
        // create a deep copy of tasks state
        const items = [...tasks];
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
    
        // check if task is being moved between columns
        if (result.source.droppableId !== result.destination.droppableId) {
            // update task status based on destination column
            reorderedItem.status = result.destination.droppableId;
        }
    
        console.log(tasks);
        updateTasks(items);
        console.log(tasks);
    };

    return (
            <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Row xs={1} md={3} className="gap-y-4 bg-gray-50 py-4 rounded-lg">
                    {/* to-do */}
                    <Col key="keyCol-1">
                        <h2>To Do</h2>
                        <Droppable droppableId={`to-do`}>
                            {(provided) => (
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                    {tasks.filter((task) => task.status === 'to-do').map((task, idx) => (
                                        <Draggable
                                            draggableId={`draggable-id-${task.id.toString()}`}
                                            index={idx}
                                            key={task.id}
                                        >
                                            {(provided) => (
                                                <div
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    ref={provided.innerRef}
                                                >
                                                    <TaskItem
                                                        task={task}
                                                        onClick={() => showDetails(task)}
                                                    />
                                                </div>
                                            )}
                                        </Draggable>         
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </Col>

                    {/* in-progress */}
                    <Col key="keyCol-2">
                        <h2>To Do</h2>
                        <Droppable droppableId={`in-progress`}>
                            {(provided) => (
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                    {tasks.filter((task) => task.status === 'in-progress').map((task, idx) => (
                                        <Draggable
                                            draggableId={`draggable-id-${task.id.toString()}`}
                                            index={idx}
                                            key={task.id}
                                        >
                                            {(provided) => (
                                                <div
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    ref={provided.innerRef}
                                                >
                                                    <TaskItem
                                                        task={task}
                                                        onClick={() => showDetails(task)}
                                                    />
                                                </div>
                                            )}
                                        </Draggable>         
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </Col>
                    {/* done */}
                    <Col key="keyCol-3">
                        <h2>To Do</h2>
                        <Droppable droppableId={`done`}>
                            {(provided) => (
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                    {tasks.filter((task) => task.status === 'done').map((task, idx) => (
                                        <Draggable
                                            draggableId={`draggable-id-${task.id.toString()}`}
                                            index={idx}
                                            key={task.id}
                                        >
                                            {(provided) => (
                                                <div
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    ref={provided.innerRef}
                                                >
                                                    <TaskItem
                                                        task={task}
                                                        onClick={() => showDetails(task)}
                                                    />
                                                </div>
                                            )}
                                        </Draggable>         
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </Col>
                    </Row>
            </DragDropContext>
          );
}

export default TasksLayout;


// import React from "react";
// import { Container, Row, Col } from 'react-bootstrap';
// import TaskItem from "./TaskItem";
// import taskData from "../taskData";
// import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
// import { useState } from "react";


// const TasksLayout = ({ showDetails }) => {

//     const [tasks, updateTasks] = useState(taskData);

// };