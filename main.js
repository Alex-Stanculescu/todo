let addTaskButton = document.querySelector('#addTaskButton');
let addTaskInput = document.querySelector('#addTaskInput');
let taskPanel = document.querySelector('#taskPanel');

// button.classList.add('btn', 'btn-danger', 'ms-1');


let id = 0;


// alerting when no tasks added
addTaskButton.addEventListener('click', (e) => {
    if (addTaskInput.value.length === 0) {
        alert('Please enter a task name');
    } else {
        id++
        let div = document.createElement('div')
        div.id = `div-${id}`
        let button = document.createElement('button');
        button.type = 'submit'
        button.innerText = 'delete'
        let paragraph = document.createElement('p')
        div.classList.add('row', 'gap-2', 'col-10', 'mx-auto')
        div.classList.add('task')
        paragraph.innerText = addTaskInput.value;
        taskPanel.appendChild(div)
        div.appendChild(paragraph)
        div.appendChild(button)
      }
    addTaskInput.value = '';
});


