import React, {useContext, useState, useEffect} from "react";
import "./Settings.scss";
import { UserContext } from 'providers/UserProvider';
import {Form, Button} from 'react-bootstrap';
import { auth } from 'firebase.js';


export default () => {
    const user = auth.currentUser;

    const [username, setusername] = useState("")
    const [email, setemail] = useState("")

    const [isLoading, setLoading] = useState(false)
    const handleClick = () => setLoading(true);
    useEffect(() => {
        if (isLoading) {
            console.log("here")
            console.log(username)
            user.updateProfile({
                displayName: username,
            }).then( (value) => console.log(value) )
            .catch( (value) => console.log(value['message']))

            //user.updateEmail(email).catch( (val) => console.log(val['message']))
            setLoading(false)
        }
    }, [isLoading]);
    

    if (user == null) {
        return (<div>loading...</div>)
    }
    return (
        <div>
            <Form>
                <Form.Group controlId="name">
                    <Form.Label >Name</Form.Label>
                    <Form.Control defaultValue={user.displayName} onChange={(event)=>setusername(event.target.value)} />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control defaultValue={user.email} onChange={(event)=>setemail(event.target.value)} />
                </Form.Group>
            </Form>
            <Button variant="primary" disabled={isLoading} onClick={!isLoading ? handleClick : null}>
                {isLoading ? 'Updating...' : 'Update Settings'}
            </Button>
            
        </div>
    )
}
