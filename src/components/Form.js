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
        <div>
            <h2 className='label-wrapper'>Name your new list</h2>
            <input
                type='text'
                id='new-list-input'
                className='input input__lg'
                name='text'
                autoComplete='off'
                maxLength='256'
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            {name === "" ? (
                <Button
                    variant='success'
                    size='md'
                    onClick={(e) => createList(e)}
                    disabled
                >
                    Create this list
                </Button>
            ) : (
                <Button
                    variant='success'
                    size='md'
                    onClick={(e) => createList(e)}
                >
                    Create this list
                </Button>
            )}

            <Button
                variant='secondary'
                size='md'
                onClick={() => props.closeForm(false)}
            >
                Cancel
            </Button>
        </div>
    );
}

export default Form;
