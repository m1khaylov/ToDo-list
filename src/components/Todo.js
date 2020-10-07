import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function Todo(props) {
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState("");

    const handleChange = (e) => {
        setNewName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.editTask(props.id, newName);
        setNewName("");
        setEditing(false);
    };

    const editingTemplate = (
        <form onSubmit={handleSubmit}>
            <label htmlFor={props.id}>{props.name}</label>
            <div className='flex-column-center'>
                <input
                    id={props.id}
                    type='text'
                    maxLength='256'
                    autoComplete='off'
                    placeholder='Type new name'
                    autoFocus
                    value={newName}
                    onChange={handleChange}
                />

                <div className='btn-group'>
                    <Button
                        variant='success'
                        size='sm'
                        onClick={(e) => handleSubmit(e)}
                        disabled={newName === ""}
                    >
                        Save
                    </Button>
                    <Button
                        variant='secondary'
                        size='sm'
                        onClick={() => setEditing(false)}
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </form>
    );

    const viewTemplate = (
        <>
            <div className='checkbox-group'>
                <input
                    id={props.id}
                    type='checkbox'
                    autoComplete='off'
                    autoFocus
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTaskCompleted(props.id)}
                />
                <label
                    className={props.completed ? "faded" : ""}
                    htmlFor={props.id}
                >
                    {props.name}
                </label>
            </div>
            {!props.completed && (
                <div className='btn-group'>
                    <Button
                        variant='success'
                        size='sm'
                        onClick={() => setEditing(true)}
                    >
                        Edit
                    </Button>
                    <Button
                        variant='danger'
                        size='sm'
                        onClick={() => props.deleteTask(props.id)}
                    >
                        Delete
                    </Button>
                </div>
            )}
        </>
    );

    return (
        <li className='todo'>{isEditing ? editingTemplate : viewTemplate}</li>
    );
}

export default Todo;
