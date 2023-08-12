import React from "react";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  } from 'react-bootstrap';
import "../Styles/hnd.css";

const SuccessAlertDismissible = () => {

    const [show, setShow] = useState(true)

    if(show) {
        return(
            <Alert variant="success" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>A Random User was Successfuly Fecthed!</Alert.Heading>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati nostrum consequuntur nisi omnis ea sequi repellat voluptatibus esse pariatur qui, asperiores praesentium dolor. Repudiandae cum distinctio sapiente ipsa unde ratione.</p>
                <hr />
                <div>
                    <Button variant="" onClick={() => setShow(false)}>
                        close
                    </Button>
                </div>
            </Alert>
        )
    }
    return <Button variant="success" onClick={() => setShow(true)}>Success!</Button>
}

const HaveaNiceDay = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        setData(data.results)
        console.log(data)
      })
      .catch(error => console.error(error));
    }, [])

    return(
        <div>
        {data ? (
            <>
                <ul>
                    {data.map(item => <li key={item.id}>{item.name.first} - {item.gender}</li>)}
                </ul>
                <SuccessAlertDismissible/>
            </>
        ) : (
          <Alert variant="danger" className="alert">
            Fetching a <Alert.Link href="https://randomuser.me/api/">Random User</Alert.Link> ...
          </Alert>
        )}
      </div>
    );
}

export default HaveaNiceDay;