import React, { useContext } from 'react';
import './CauseSelect.css';

export default () => {
    const causes = ["LGBTQ+ Rights", "Black Lives Matter", "Environmental Rights", "Healthcare"]
    
    const handleSubmit = () => {
    }

    return (
        <div className="cause-sel-wrapper">
            <form onSubmit={handleSubmit}>
                {causes.map((name, i) => {
                    return (
                    <>
                        <input type="checkbox" value={name} />
                        <label>{name}</label>
                        <br />
                    </>)
                })}
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}