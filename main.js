let addTaskButton = document.querySelector('#addTaskButton');
let addTaskInput = document.querySelector('#addTaskInput');
let taskPanel = document.querySelector('#taskPanel');
let taskExample = document.querySelector('#taskExample');


// alerting when no tasks added
addTaskButton.addEventListener('click', (e) => {
    if (addTaskInput.value.length === 0) {
        alert('Please enter a task name');
    } else {
        taskPanel.innerHTML += (`<div class="row d-grid gap-2 col-11 mx-auto" id="taskExample">     
        <button class="btn btn-light text-start my-2 ms-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
          <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
          ${addTaskInput.value}
        </button>              
        <div class="collapse" id="collapseExample1">
          <div class="card card-body ms-4 mb-4 d-flex flex-row align-items-center">
            <input type="text" class="form-control ms-2 me-2" id="exampleFormControlInput1" placeholder="Type in the task description">
            <button type="submit" class="btn btn-success ms-1">💾</button>
            <button type="submit" class="btn btn-danger ms-1">🗑</button>          
          </div>
        </div>
      </div>`)
    }

    addTaskInput.value = '';

});

