import React, { useState, useEffect, useContext } from "react";
import "./Subscribe.css";
import MenuBar from 'components/menubar/MenuBar.js'
import { UserContext } from 'providers/UserProvider';
import { Form, ButtonGroup, Button, InputGroup, ButtonToolbar } from 'react-bootstrap'

export default () => {
	const [userCauses, setUserCauses] = useState([]);
	const [donations, setDonations] = useState([]);
	
	const user = useContext(UserContext);

	const subAmounts = [5, 10, 25, 100, 500]

	useEffect(() => {
		if (user != null && userCauses.length == 0) {
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

	const handleClick = (e, cause) => {
		var amount = e.target.value
		const newDonations = donations.filter(donation => {
			return donation['cause'] !== cause
		})
		setDonations(newDonations.concat({cause: cause, amount: amount}))
	}

	const handleChange = (e, cause) => {
		var amount = e.target.value
		
	}

	if (user == null) {
		return <div>Loading...</div>
	}

	console.log(donations)

  return (
    <>
      <MenuBar />
      <div>
				<div>
					Hi {user.displayName}! <br/>
					Here you can subscribe to donate to the causes you support. <br/>
					Donate to the causes you want to now, or choose $0.00 if you plan to donate at a future date! <br/>
					You will only be charged 5 business days after the 1st of the month, and you can cancel at any time! <br/> <br/>
				</div>
				<Form>
					{userCauses.map((cause, i) => 
						<div key={i}>
							<div>{cause}</div>
							<ButtonToolbar>
								<ButtonGroup>
									{subAmounts.map((amount, i) => 
										<Button key={i} value={amount} onClick={(e) => handleClick(e, cause)}>${amount}</Button>
									)}
									<Button onClick={(e) => handleClick(e, cause)}>Donate Later</Button>
								</ButtonGroup>
								<InputGroup>
										<InputGroup.Prepend>
											<InputGroup.Text>$</InputGroup.Text>
										</InputGroup.Prepend>
										<Form.Control type="input" placeholder="0.00" onChange={(e) => handleChange(e, cause)}/>
								</InputGroup>
							</ButtonToolbar>
						</div>
					)}
				</Form>
      </div>
    </>
  )
};
