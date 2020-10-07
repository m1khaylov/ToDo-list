import React from "react";
import Button from "react-bootstrap/Button";

function ItemForm(props) {
    return (
        <div className='flex-column-center'>
            <input
                type='text'
                maxLength='256'
                autoComplete='off'
                placeholder='Add new item'
                autoFocus
                value={props.taskName}
                onChange={(e) => props.setName(e.target.value)}
            />
            <div className='btn-group'>
                <Button
                    variant='success'
                    size='md'
                    onClick={(e) => props.createTask(e)}
                    disabled={props.taskName === ""}
                >
                    Create this item
                </Button>
                <Button
                    variant='secondary'
                    size='md'
                    onClick={() => props.setClosed(true)}
                >
                    Close
                </Button>
            </div>
        </div>
    );
}

export default ItemForm;
