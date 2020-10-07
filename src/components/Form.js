import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function Form(props) {
    const [name, setName] = useState("");

    const createList = (e) => {
        e.preventDefault();
        props.addList(name);
        setName("");
    };

    return (
        <div className='form flex-column-center'>
            <h2>Name your new list</h2>
            <input
                type='text'
                autoComplete='off'
                maxLength='256'
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <div className='btn-group'>
                <Button
                    variant='success'
                    size='md'
                    onClick={(e) => createList(e)}
                    disabled={name === ""}
                >
                    Create this list
                </Button>
                <Button
                    variant='secondary'
                    size='md'
                    onClick={() => props.closeForm(false)}
                >
                    Cancel
                </Button>
            </div>
        </div>
    );
}

export default Form;
