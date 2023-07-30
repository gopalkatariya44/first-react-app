const Task = (props) => {
    return (
        <div className="task" style={{ background: props.done ? "green" : "white" }}>
            <h1>{props.taskName}</h1>
            <button onClick={() => props.deleteTask(props.id)}>Delete</button>
            <button onClick={() => props.doneTask(props.id)}>Done</button>
        </div>
    );
};

export default Task;