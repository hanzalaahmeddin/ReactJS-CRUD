import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router';

function UserEdit() {
    const { id } = useParams()
    console.log(id);

    return (
        <div className="container py-5">
            <h1>Edit User</h1>
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

export default UserEdit