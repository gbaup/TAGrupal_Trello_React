import "./AddButton.css";



const AddButton = () => {

    const showModal = () => {
        const modal = document.getElementById("taskModalAdd");
        modal?.classList.add("is-active");
    }

    return (
        <button id="addTask" className="button is-small is-link" onClick={showModal}>+</button>
    );
}
export default AddButton;