import React from "react";
import { Card } from "react-bootstrap";
import "../App.css";
const UserCard = ({ user }) => {
    return (
        <Card className="card">
            <Card.Body className="bd">
                <Card.Title>{user.name}</Card.Title>
                <Card.Subtitle>{user.company.name}</Card.Subtitle>
                <Card.Text>
                    <b>Address:</b> {user.address.street}, {user.address.suite},{" "}
                    {user.address.zipcode} {user.address.city}
                </Card.Text>
                <Card.Text>
                    <b>Email:</b> {user.email}
                </Card.Text>
                <Card.Text></Card.Text>
                <Card.Link href={user.website}>{user.website}</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default UserCard;
