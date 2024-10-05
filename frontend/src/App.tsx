import './App.css'
import { TasksContainer } from "./components/TasksContainer/TasksContainer.tsx";
import TopBar from './components/TopBar/TopBar.tsx';
import AddButton from './components/AddButton/AddButton.tsx';
import { Provider } from "react-redux";
import { store } from "./components/Store/store.ts";
import { TaskType } from "./types/taskType.ts";
import Modal from './components/Modal/Modal.tsx';

function App() {

    return (
        <>
            <Provider store={store}>
                <TopBar />
                <AddButton />
                <TasksContainer />
                <Modal isEdit={false} />
                <Modal isEdit={true} />
            </Provider>

        </>
    )
}

export default App
