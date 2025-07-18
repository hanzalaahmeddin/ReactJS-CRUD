import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router';

function UserEdit() {
    const { id } = useParams()
    const [name, setUserName] = useState('');
    const [email, setUserEmail] = useState('');
    const [age, setUserAge] = useState('');
    const url = "http://localhost:3000/users/" + id;
    useEffect(() => {
        updateUserData()
    }, [])

    const updateUserData = async () => {

        let response = await fetch(url)
        response = await response.json()
        setUserName(response.name)
        setUserEmail(response.email)
        setUserAge(response.age)
    }

    const updateUsersData = async () => {
        let response = await fetch(url, {
            method: 'Put',
            body: JSON.stringify({ name, email, age })
        })
        response = await response.json()
        if (response) {
            alert("user successfully updated ")
        }

    }

    return (
        <div className="container py-5">
            <h1>Edit User</h1>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} onChange={(event) => setUserName(event.target.value)} placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="text" value={age} onChange={(event) => setUserAge(event.target.value)} placeholder="Enter age" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={(event) => setUserEmail(event.target.value)} placeholder="Enter email" />
                    </Form.Group>

                </Row>

                <Button variant="primary" onClick={updateUsersData}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default UserEdit