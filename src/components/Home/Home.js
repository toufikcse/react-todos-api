import React from 'react';
import { Row } from 'react-bootstrap';
import useTodos from '../../hooks/useTodos';
import Todos from '../Todos/Todos';

const Home = () => {
    const todos = useTodos();
    return (
        <div>
            <h4>Number of Todos: {todos.length}</h4>
            <div>
                <Row xs={1} md={4} className="g-4">
                    {
                        todos.map(todo => <Todos 
                            key={todo.id}
                            todo={todo}
                            ></Todos>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Home;