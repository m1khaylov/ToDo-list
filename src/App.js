import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Button from "react-bootstrap/Button";

function App() {
    const [lists, setLists] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const addList = (name) => {
        const newList = {
            id: "list-" + Date.now(),
            name: name,
        };
        setLists([...lists, newList]);
        setShowForm(false);
    };

    const deleteList = (id) => {
        const remainingLists = lists.filter((list) => {
            return id !== list.id;
        });
        setLists(remainingLists);
    };

    return (
        <div className='todoapp flex-column-center'>
            <h1>ToDo-list</h1>
            <div className='btn-center'>
                <Button
                    variant='primary'
                    size='lg'
                    onClick={() => setShowForm(true)}
                >
                    Create new list
                </Button>
            </div>
            {showForm && <Form addList={addList} closeForm={setShowForm} />}
            <ul>
                {lists.map((list) => (
                    <List
                        id={list.id}
                        name={list.name}
                        key={list.id}
                        deleteList={deleteList}
                    />
                ))}
            </ul>
        </div>
    );
}

export default App;
