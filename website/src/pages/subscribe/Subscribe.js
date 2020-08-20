import React, { useState, useEffect, useContext } from "react";
import "./Subscribe.css";
import MenuBar from 'components/menubar/MenuBar.js'
import { UserContext } from 'providers/UserProvider';

export default () => {
	const [userCauses, setUserCauses] = useState([])
	const user = useContext(UserContext);

	useEffect(() => {
		if (user != null) {
			const requestOptions = {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' },
			};
			fetch("/user/" + user.email + "/causes/", requestOptions)
			.then(res => res.text())
			.then(text => {
				setUserCauses(JSON.parse(text))

			})
			.catch(err => console.log(err))
		}
	})

	if (user == null) {
		return <div>Loading...</div>
	}

  return (
    <>
      <MenuBar />
      <div>
				{userCauses.map((cause, i) => 
					<div key={i}>{cause}</div>
				)}
      </div>
    </>
  )
};
