import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function UserAdd() {
    const [id, setUserId] = useState('')
    const [name, setUserName] = useState('');
    const [email, setUserEmail] = useState('');
    const [age, setUserAge] = useState('');

    const createUser = async () => {
        // console.log(userId, userName, userEmail, userAge);
        const url = "http://localhost:3000/users";
        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({ id, name, email, age })
        });
        response = await response.json()
        if (response) {
            alert("new user add")
        } else {
            alert("user not add")
        }
    }

    return (
        <div className="container py-5">
            <h1>Add User</h1>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridID">
                        <Form.Label>ID</Form.Label>
                        <Form.Control onChange={(event) => setUserId(event.target.value)} type="text" placeholder="Enter ID" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={(event) => setUserName(event.target.value)} type="text" placeholder="Enter name" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={(event) => setUserEmail(event.target.value)} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control onChange={(event) => setUserAge(event.target.value)} type="text" placeholder="Enter age" />
                    </Form.Group>
                </Row>

                <Button variant="primary" onClick={createUser}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default UserAdd