export default function TaskList() {
    let tasks = [
        {
            taskName: "Dynamic Greeting",
            completed: true
        },
        {
            taskName: "Conditional Content",
            completed: true
        },
        {
            taskName: "Render a Task List",
            completed: false
        },
        {
            taskName: "Combine Everything",
            completed: false
        }
    ];

    let completedTasks = 0;
    let inComleteTasks = 0;

    tasks.map(task => (
        task.completed ? completedTasks++ : inComleteTasks++
    ))

    return (
        <div>
            <h2>Tasks:</h2>
            <ul>
                {tasks.map(task => (
                    <li style={{color: task.completed && "green"}}>{task.completed ? `${task.taskName} - ✅` : `${task.taskName} - ❌`}</li>
                ))}
            </ul>
            <p>
                Completed tasks: {completedTasks} <br />
                Incomplete tasks: {inComleteTasks}
            </p>
         </div>
    );
}