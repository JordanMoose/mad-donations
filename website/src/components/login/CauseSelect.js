import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './CauseSelect.css';

export default () => {
    const [submitted, setSubmitted] = useState(false)
    const [userCauses, setUserCauses] = useState([])
    const causes = ["LGBTQ+ Rights", "Black Lives Matter", "Environmental Rights", "Healthcare"]
    
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
        console.log(userCauses)
        event.preventDefault()
    }

    if (submitted) {
        return <Redirect to="/subscribe" />
    }

    return (
        <div className="cause-sel-wrapper">
            <form onSubmit={handleSubmit}>
                {(causes.map((name, i) => 
                    <div key={i}>
                        <input type="checkbox" value={name} onChange={handleChange}/>
                        <label>{name}</label>
                        <br />
                    </div>
                ))}
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}