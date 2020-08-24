import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './CauseSelect.css';
import { UserContext } from 'providers/UserProvider';

export default () => {
    const [submitted, setSubmitted] = useState(false)
    const [userCauses, setUserCauses] = useState([])
    const [causes, setCauses] = useState([])

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    fetch("/causes/", requestOptions)
        .then(res => res.json())
        .then(causeData => {
            setCauses(causeData.Causes)
        });
    
    const user = useContext(UserContext)

    const handleChange = (event) => {
        const target = event.target
        if (target.checked) {
            setUserCauses(userCauses.concat(target.value))
        } else {
            const newUserCauses = userCauses.filter(causeName => {
                return causeName !== target.value
            })
            setUserCauses(newUserCauses)
        }
    }

    const handleSubmit = (event) => {
        // hit the route to send data to backend
        
        // on success
        setSubmitted(true)

        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ supportedCauses: userCauses })
        };
        fetch("/user/" + user.email + "/", requestOptions)
            .then(res => {
                console.log(res)
            })
        
        event.preventDefault()
    }

    if (submitted) {
        return <Redirect to="/subscribe" />
    }

    return (
        <div className="cause-sel-wrapper">
            <Form onSubmit={handleSubmit}>
                {(causes.map((name, i) => 
                    <div key={i}>
                        <Form.Check type="checkbox" value={name} label={name} onChange={handleChange}/>
                    </div>
                ))}
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}
