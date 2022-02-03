import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Todos = (props) => {
    const {id, title} = props.todo;
    return (
        <Col>
            <Card>
                <Card.Body>
                <Card.Title>{id}</Card.Title>
                <Card.Text>
                    {title}
                </Card.Text>
                <Link to={`/todos/${id}`}>
                    <Button variant="success">View Detail</Button>
                </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Todos;