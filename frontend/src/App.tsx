import './App.css'
import { Task } from "./types/taskType.ts";
import { TasksContainer } from "./components/TasksContainer/TasksContainer.tsx";
import TopBar from './components/TopBar/TopBar.tsx';
import AddButton from './components/AddButton/AddButton.tsx';

function App() {
    const tasks: Task[] = [
        {
            title: 'Task 1',
            description: 'Description 1',
            assignee: 'Assignee 1',
            endDate: 'End Date 1',
            priority: 'Priority 1',
            status: 'Status 1',
        },
        {
            title: 'Task 2',
            description: 'Description 2',
            assignee: 'Assignee 2',
            endDate: 'End Date 2',
            priority: 'Priority 2',
            status: 'Status 2',
        },
        {
            title: 'Task 3',
            description: 'Description 3',
            assignee: 'Assignee 3',
            endDate: 'End Date 3',
            priority: 'Priority 3',
            status: 'Status 3',
        },
    ]

    return (
        <>
            <TopBar />
            <AddButton />
            <TasksContainer tasks={tasks} />
        </>
    )
}

export default App
