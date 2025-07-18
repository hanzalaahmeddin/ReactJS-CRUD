import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';

function UserList() {
    // ========== API Link
    const url = "http://localhost:3000/users";

    const [usersData, setUsersData] = useState([])

    const navigate = useNavigate()
    useEffect(() => {
        getUsersData()
    }, [])

    // ========== Get User API
    const getUsersData = async () => {
        let response = await fetch(url);
        response = await response.json()
        // console.log(response);
        setUsersData(response)
    }
    // console.log(usersData);

    // ========== Delete User API
    const deleteUserData = async (id) => {
        // console.log(id);
        let response = await fetch(url + "/" + id, {
            method: "DELETE"
        });
        response = await response.json()
        if (response) {
            alert("user deleted")
            getUsersData()
        }
    }
    const updateUserData = (id) => {
        navigate("/edit/" + id)
    }
    return (
        <div className="container py-5">
            <div className="row">
                {
                    usersData.map((user) => (
                        <div className='col-md-3'>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Name: {user.name}</Card.Title>
                                    <Card.Text>Age: {user.age}</Card.Text>
                                    <Card.Text>Id: {user.id}</Card.Text>
                                    <Card.Text>Email: {user.email}</Card.Text>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <Button variant="success" onClick={() => updateUserData(user.id)}>Update</Button>
                                        </div>
                                        <div className='col-md-6'>
                                            <Button variant="danger" onClick={() => deleteUserData(user.id)}>Delete</Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default UserList
