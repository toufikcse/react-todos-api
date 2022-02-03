import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const TodoDetail = () => {
    const navigate = useNavigate();
    const {todoNo} = useParams();
    const [todo, setTodo] = useState({});
    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/todos/${todoNo}`)
        .then(res => res.json())
        .then(data => setTodo(data))
    }, [])
    const {id, title, completed} = todo;

    const ChangePage = () => {
        navigate('/home');
    }
    return (
        <Card>
            <Card.Body>
            <Card.Title>{id}</Card.Title>
            <Card.Text>
                {title}
            </Card.Text>
            <Button onClick={ChangePage} variant="primary">Go to home</Button>
            </Card.Body>
            <Card.Footer>
            {
                completed ? <small className="text-muted">I know you Friend</small> :
                <small className="text-muted">Who The hell are you?</small>
            }
            </Card.Footer>
        </Card>
    );
};

export default TodoDetail;