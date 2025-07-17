import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';

function UserList() {
    const [usersData, setUsersData] = useState([])
    useEffect(() => {
        getUsersData()
    }, [])
    const getUsersData = async () => {
        const url = "http://localhost:3000/users";
        let response = await fetch(url);
        response = await response.json()
        // console.log(response);
        setUsersData(response)
    }
    // console.log(usersData);
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
