import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ModalDialog(props) {
    return (
        <Modal show={props.show} onHide={() => props.handleClose()}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure?</Modal.Body>
            <Modal.Footer>
                <Button variant='primary' onClick={() => props.handleDelete()}>
                    Ok
                </Button>
                <Button variant='secondary' onClick={() => props.handleClose()}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalDialog;
