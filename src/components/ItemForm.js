import React from "react";
import Button from "react-bootstrap/Button";

function ItemForm(props) {
    return (
        <div>
            <input
                type='text'
                maxLength='256'
                id='new-list-input'
                className='input input__lg'
                name='text'
                autoComplete='off'
                placeholder='Add new item'
                autoFocus
                value={props.taskName}
                onChange={(e) => props.setName(e.target.value)}
            />
            {props.taskName === "" ? (
                <Button
                    variant='success'
                    size='md'
                    onClick={(e) => props.createTask(e)}
                    disabled
                >
                    Create this item
                </Button>
            ) : (
                <Button
                    variant='success'
                    size='md'
                    onClick={(e) => props.createTask(e)}
                >
                    Create this item
                </Button>
            )}

            <Button
                variant='secondary'
                size='md'
                onClick={() => props.setClosed(true)}
            >
                Close
            </Button>
        </div>
    );
}

export default ItemForm;
