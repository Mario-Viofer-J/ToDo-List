const TodoAction = [
    {action: 'Make Dinner', datee: '09-10-2022'}, 
    {action: 'Eat Dinner', datee: '10-10-2022'}
];



rendoAction();

function rendoAction() {
    let rendohtml = '';

    for(let i = 0; i < TodoAction.length; i++) {
        const { action, datee } = TodoAction[i];

        rendohtml += `

            <table>
                <tr>
                    <td>${action}</td>
                    <td>${datee}</td>
                    <td> <button class="del-btn" onclick="
                        TodoAction.splice(${i},1);
                        rendoAction();
                    ">Delete</button></td>
                </tr>
            </table>
        `;
    }

    document.querySelector('.todo-list').innerHTML = rendohtml;
}

function addAction() {
    const actionInput = document.querySelector('.todo-action-inputs');
    const action = actionInput.value.trim();
    const dateInput = document.querySelector('.todo-date-inputs');
    const datee = dateInput.value.trim();
    if (action !== '' && datee !== '') {
        TodoAction.push({ action, datee });
        rendoAction();
        actionInput.value = '';
        dateInput.value = '';
    }
}

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addAction();
    }
});

document.querySelector('.todo-add-button').addEventListener('click', () => {
    addAction();
});