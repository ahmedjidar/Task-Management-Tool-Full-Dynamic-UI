import React, { Suspense } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'react-bootstrap';

const Settings = () => {

    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <h3>
                Settings
            </h3>
        </Suspense>
    )
}

export default Settings;