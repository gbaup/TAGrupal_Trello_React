export function cleanInputsEdit() {
    const titleEdit = document.getElementById('titleEdit') as HTMLInputElement;
    const descriptionEdit = document.getElementById('descriptionEdit') as HTMLInputElement;
    const assignEdit = document.getElementById('assignEdit') as HTMLInputElement;
    const priorityEdit = document.getElementById('priorityEdit') as HTMLSelectElement;
    const stateEdit = document.getElementById('stateEdit') as HTMLSelectElement;
    const dateEdit = document.getElementById('dateEdit') as HTMLInputElement;

    titleEdit.value = '';
    descriptionEdit.value = '';
    assignEdit.value = '';
    priorityEdit.value = '1';
    stateEdit.value = 'backlog';
    dateEdit.value = '';
}

export function cleanInputsAdd() {
    const titleAdd = document.getElementById('titleAdd') as HTMLInputElement;
    const descriptionAdd = document.getElementById('descriptionAdd') as HTMLInputElement;
    const assignAdd = document.getElementById('assignAdd') as HTMLInputElement;
    const priorityAdd = document.getElementById('priorityAdd') as HTMLSelectElement;
    const stateAdd = document.getElementById('stateAdd') as HTMLSelectElement;
    const dateAdd = document.getElementById('dateAdd') as HTMLInputElement;

    titleAdd.value = '';
    descriptionAdd.value = '';
    assignAdd.value = '';
    priorityAdd.value = '1';
    stateAdd.value = 'backlog';
    dateAdd.value = '';
}