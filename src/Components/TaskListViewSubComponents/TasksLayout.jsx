import React from "react";
import { Row, Col } from 'react-bootstrap';
import TaskItem from "./TaskItem";
import taskData from "../taskData";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import { useState } from "react";


const TasksLayout = ({ showDetails }) => {

    const [tasks, updateTasks] = useState(taskData);

    const handleOnDragEnd = (result) => {
        // for debugging purposes
        console.log(result)
        // source index <-> destination index | to save the state
        const items = Array.from(tasks);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        updateTasks(items);
    }

    return (
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Row xs={1} md={3} className="gap-y-4 bg-gray-50 py-4 rounded-lg">
                {tasks.map((task, idx) => (
                  <Col key={task.id}>
                    <Droppable droppableId={`droppable-id-${task.id}`} key={task.id}>
                      {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
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
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </Col>
                ))}
              </Row>
            </DragDropContext>
          );
}

export default TasksLayout;


