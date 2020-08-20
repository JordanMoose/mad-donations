import React, {useContext} from "react";
import "./Settings.scss";
import { UserContext } from 'providers/UserProvider';
import {Form} from 'react-bootstrap';


export default () => {
    const user = useContext(UserContext);
    const userName = user.userName
    


    return (
        <div>
            <Form>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder={userName} />
                </Form.Group>

            </Form>
            
        </div>
    )
}
