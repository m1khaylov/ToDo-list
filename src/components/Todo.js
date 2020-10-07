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
            <div className='form-group'>
                <label htmlFor={props.id}>New name for {props.name}</label>
                <input
                    id={props.id}
                    className='todo-text'
                    type='text'
                    maxLength='256'
                    autoComplete='off'
                    autoFocus
                    value={newName}
                    onChange={handleChange}
                />
            </div>
            <div className='btn-group'>
                <Button
                    variant='success'
                    size='sm'
                    onClick={(e) => handleSubmit(e)}
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

                {/* <button
                    type='button'
                    className='btn todo-cancel'
                    onClick={() => setEditing(false)}
                >
                    Cancel
                    <span className='visually-hidden'>
                        renaming {props.name}
                    </span>
                </button> */}
                {/* <button type='submit' className='btn btn__primary todo-edit'>
                    Save
                    <span className='visually-hidden'>
                        new name for {props.name}
                    </span>
                </button> */}
            </div>
        </form>
    );
    const viewTemplate = (
        <div>
            <div className='c-cb'>
                <input
                    id={props.id}
                    type='checkbox'
                    autoComplete='off'
                    autoFocus
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTaskCompleted(props.id)}
                />
                <label htmlFor={props.id}>{props.name}</label>
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
        </div>
    );

    return (
        <li className='todo'>{isEditing ? editingTemplate : viewTemplate}</li>
    );
}

export default Todo;
