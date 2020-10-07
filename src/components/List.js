import React, { useState } from "react";
import Todo from "./Todo";
import ItemForm from "./ItemForm";
import ModalDialog from "./ModalDialog";
import Button from "react-bootstrap/Button";

function List(props) {
    const [taskName, setName] = useState("");
    const [tasks, setTasks] = useState([]);
    const [isListClosed, setIsListClosed] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteList = () => {
        props.deleteList(props.id);
        handleClose();
    };

    const addTask = (name) => {
        const newTask = {
            id: "todo-" + Date.now(),
            name: name,
            completed: false,
        };
        setTasks([...tasks, newTask]);
    };

    const createTask = (e) => {
        e.preventDefault();
        addTask(taskName);
        setName("");
    };

    const toggleTaskCompleted = (id) => {
        const updatedTasks = tasks.map((task) => {
            if (id === task.id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const deleteTask = (id) => {
        const remainingTasks = tasks.filter((task) => {
            return id !== task.id;
        });
        setTasks(remainingTasks);
    };

    const editTask = (id, newName) => {
        const editedTaskList = tasks.map((task) => {
            if (id === task.id) {
                return { ...task, name: newName };
            }
            return task;
        });
        setTasks(editedTaskList);
    };

    return (
        <>
            <ModalDialog
                show={show}
                handleClose={handleClose}
                handleDelete={deleteList}
            ></ModalDialog>
            <div>
                <div className='flex-column-center mt-15'>
                    <h2>{props.name}</h2>
                    <ul className='tasks mb-15'>
                        {tasks
                            .filter((task) => !task.completed)
                            .map((task) => (
                                <Todo
                                    id={task.id}
                                    name={task.name}
                                    completed={task.completed}
                                    key={task.id}
                                    toggleTaskCompleted={toggleTaskCompleted}
                                    deleteTask={deleteTask}
                                    editTask={editTask}
                                />
                            ))}
                    </ul>
                    {!isListClosed && (
                        <ItemForm
                            taskName={taskName}
                            listName={props.name}
                            setName={setName}
                            createTask={createTask}
                            setClosed={setIsListClosed}
                            addTask={addTask}
                        />
                    )}
                    <ul className='tasks mb-15'>
                        {tasks
                            .filter((task) => task.completed)
                            .map((task) => (
                                <Todo
                                    id={task.id}
                                    name={task.name}
                                    completed={task.completed}
                                    key={task.id}
                                    toggleTaskCompleted={toggleTaskCompleted}
                                    deleteTask={deleteTask}
                                    editTask={editTask}
                                />
                            ))}
                    </ul>
                </div>
                {isListClosed && (
                    <div className='btn-group btn-list'>
                        <Button
                            variant='info'
                            size='md'
                            onClick={() => setIsListClosed(false)}
                        >
                            Add another item
                        </Button>
                        <Button variant='danger' size='md' onClick={handleShow}>
                            Delete this list
                        </Button>
                    </div>
                )}
            </div>
        </>
    );
}

export default List;
