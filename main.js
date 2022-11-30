let addTaskButton = document.querySelector('#addTaskButton');
let addTaskInput = document.querySelector('#addTaskInput');
let taskPanel = document.querySelector('#taskPanel');
let id = 0;


// alerting when no tasks added
addTaskButton.addEventListener('click', (e) => {
    if (addTaskInput.value.length === 0) {
        alert('Please enter a task name');
    } else {
        id++
        taskPanel.innerHTML += (`
        <div class="row d-grid gap-2 col-11 mx-auto" id="div-${id}">     
        <button class="btn btn-light text-start my-2 ms-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
          <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
          ${addTaskInput.value}
        </button>              
      </div>
      `);
    }

    document.querySelector(`#div-${id}`).addEventListener('click', (e) => {};);   

    addTaskInput.value = '';

});


