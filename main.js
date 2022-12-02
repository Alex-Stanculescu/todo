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
        button.type = 'submit';
        button.innerText = 'Delete';
        let paragraph = document.createElement('p');
        //creating a checkbox
        let checkBox = document.createElement('input');
        checkBox.type='checkbox';
       // div.classList.add('row', 'gap-2', 'col-10', 'mx-auto')
        div.classList.add('task');
        paragraph.innerText = addTaskInput.value;
        taskPanel.appendChild(div);
        div.appendChild(checkBox);
        div.appendChild(paragraph);
        div.appendChild(button);
        addTaskInput.value = '';
        button.addEventListener('click',()=>{
            div.remove();
        })
      }
    
});


