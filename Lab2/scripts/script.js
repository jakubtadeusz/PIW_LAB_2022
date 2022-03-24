"use strict";

let nextTaskId = 0;
let nextListId = 0;

const tasksLists = [
    {
        id: nextListId++,
        listName: "Pilne",
        hidden: false,
        tasks: [{
            id: nextTaskId++,
            taskName: "Strona na PIW",
            status: 0,
            endDate: new Date(0)
        }]
    },
    {
        id: nextListId++,
        listName: "Na wczoraj",
        hidden: false,
        tasks: [{
            id: nextTaskId++,
            taskName: "Zaliczenie Architektury Komputerów",
            status: 1,
            endDate: new Date('2021-05-05')
        }
        ]
    }];

let trashedTask = {
    listId: -1,
    task: {
        id: -1,
        taskName: "",
        status: 0,
        endDate: new Date(0)
    }
}

const addTask = () => {
    const taskName = document.getElementById("task-name").value;
    document.getElementById("task-name").value = '';
    if(taskName.trim().length === 0){
        return;
    }
    const selectedListName = document.getElementById("task-list").value;
    for (const list of tasksLists) {
        if (list.listName === selectedListName) {
            list.tasks.push({
                id: nextTaskId++,
                taskName: taskName,
                status: 0,
                endDate: new Date(0)
            });
            renderTasksLists();
            return;
        }
    }
}

const addList = () => {
    const listName = document.getElementById("list-name").value;
    document.getElementById("list-name").value = '';
    if(listName.trim().length === 0){
        return;
    }
    tasksLists.push({
        id: nextListId++,
        listName: listName,
        hidden: false,
        tasks: []
    });
    render();
}

const render = () => {
    renderSelectionList();
    renderTasksLists();
}

const renderSelectionList = () => {
    const listSelection = document.getElementById("task-list");
    listSelection.innerHTML = "";
    for (const list of tasksLists) {
        const listElement = document.createElement("option");
        listElement.value = list.listName;
        listElement.innerHTML = list.listName;
        listSelection.appendChild(listElement);
    }
}

const renderTasksLists = () => {
    const tasks = document.getElementById("tasks");
    tasks.innerHTML = "";
    for (const list of tasksLists) {
        const listElement = document.createElement("div");
        listElement.classList.add("list-item");
        const listHeader = createListHeader(list.listName);
        listElement.appendChild(listHeader);
        const tasksList = createTasksList(list, list.tasks);
        if(list.hidden){
            tasksList.classList.add("hidden-list");
        }
        listElement.appendChild(tasksList);
        tasks.appendChild(listElement);
        listHeader.addEventListener('click', () => {
            handleListHeaderClick(list);
        })
    }
    addClickHandlerToDeleteButtons();
}

const addClickHandlerToDeleteButtons = () => {
    $(".task-delete-button").click((elem) => {
        let buttonId = elem.target.id;
        let [listId, taskId] = buttonId.replace("delete-button-", "").split('-');
        let taskToDelete = tasksLists[listId].tasks[taskId];
        trashedTask.listId = listId;
        trashedTask.task = taskToDelete;
        $("#delete-accept-modal").show();
    });
}

const deleteTask = () => {
    const [listId, taskId] = [trashedTask.listId, trashedTask.task.id];
    if(listId === -1) return;
    tasksLists[listId].tasks = tasksLists[listId].tasks.filter((task)=>{
        return task.id != taskId;
    });
    $(`#task-line-${listId}-${taskId}`).hide();
    if(tasksLists[listId].tasks.length === 0) renderTasksLists();
    $("#undo-delete").show();
}

const handleListHeaderClick = (list) => {
    list.hidden = !list.hidden;
    renderTasksLists();
}

const createListHeader = (listName) => {
    const listHeaderElement = document.createElement("div");
    listHeaderElement.classList.add("list-header");
    listHeaderElement.innerText = listName;
    return listHeaderElement;
}

const createTasksList = (tasksList, list) => {
    const tasksListElement = document.createElement("div");
    tasksListElement.classList.add("tasks-list");
    const taskListElements = [];
    const taskDeleteButtons = [];
    for (const task of list){
        const taskElement = createTaskElement(task);  
        const taskDeleteButton = createTaskDeleteButton(tasksList.id, task.id);
        taskElement.addEventListener('click', () => {
            handleTaskClick(task, taskElement);
        });  
        taskDeleteButtons.push(taskDeleteButton);
        taskListElements.push(taskElement);        
    }
    if(list.length === 0){
        const emptyList = document.createElement("div");
        emptyList.innerText = "Lista jest pusta";
        emptyList.classList.add("empty-list-info");
        tasksListElement.appendChild(emptyList);
    }else{
        const searchInput = createSearchInput();
        tasksListElement.appendChild(searchInput);
        searchInput.addEventListener('input', () => {
            let value = searchInput.firstChild.value;
            const caseSensitive = searchInput.lastChild.checked;
            if(!caseSensitive) value = value.toUpperCase();
            for(const i in taskListElements){
                const taskElement = taskListElements[i];
                let taskElementValue = taskElement.innerText;
                if(!caseSensitive){
                    taskElementValue = taskElementValue.toUpperCase();
                }
                if(taskElementValue.includes(value)){
                    taskElement.classList.remove("hidden-item");
                    taskDeleteButtons[i].classList.remove("hidden-item");
                }else{
                    taskElement.classList.add("hidden-item");
                    taskDeleteButtons[i].classList.add("hidden-item");
                }
            }
        });
    }
    for(const i in taskListElements){
        const taskLine = document.createElement("div");
        taskLine.classList.add("task-line");
        taskLine.id = `task-line-${tasksList.id}-${list[i].id}`;
        taskLine.appendChild(taskListElements[i]);
        taskLine.appendChild(taskDeleteButtons[i]);
        tasksListElement.appendChild(taskLine);
    }
    return tasksListElement;
}

const createSearchInput = () => {
    const searchInput = document.createElement("div");
    const input = document.createElement("input");
    searchInput.classList.add("search-input");
    input.placeholder = "Wyszukaj: ";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "case-sensitive"
    checkbox.value = "case-sensitive";
    const checkboxLabel = document.createElement("div");
    checkboxLabel.innerText = "case-sensitive";
    searchInput.appendChild(input);
    searchInput.appendChild(checkboxLabel);
    searchInput.appendChild(checkbox);
    return searchInput;
}

const handleTaskClick = (task, taskElement) => {
    if(task.status === 0){
        task.status = 1;
        task.endDate = new Date();
        taskElement.classList.add("finished-task");
        const taskDateElement = taskElement.querySelector(".task-date");
        taskDateElement.innerText = task.endDate.toLocaleDateString();
    }else{
        task.status = 0;
        taskElement.classList.remove("finished-task");
    }
}


const createTaskElement = (task) => {
    const taskElement = document.createElement("div");
    const taskContent = createTaskContent(task);
    const taskPointer = createTaskPointer();
    const taskDate = createTaskDate(task);
    taskElement.appendChild(taskPointer);
    taskElement.appendChild(taskContent);
    taskElement.appendChild(taskDate);
    if(task.status === 1){
        taskElement.classList.add("finished-task");
    }
    taskElement.classList.add("task-item");
    return taskElement;
}

const createTaskDeleteButton = (listId, taskId) => {
    const taskDeleteButton = document.createElement("button");
    taskDeleteButton.innerText="Usuń";
    taskDeleteButton.classList.add("task-delete-button");
    taskDeleteButton.classList.add("btn");
    taskDeleteButton.classList.add("btn-danger");
    taskDeleteButton.id=`delete-button-${listId}-${taskId}`;
    return taskDeleteButton;
}

const createTaskContent = (task) => {
    const taskContent = document.createElement("div");
    taskContent.classList.add("task-content");
    taskContent.innerHTML = task.taskName
    return taskContent;
}

const createTaskPointer = () => {
    const taskPointer = document.createElement("div");
    taskPointer.classList.add("task-pointer");
    return taskPointer;
}

const createTaskDate = (task) => {
    const taskDateElement = document.createElement("div");
    taskDateElement.classList.add("task-date");
    taskDateElement.innerText = task.endDate.toLocaleDateString();
    return taskDateElement;
}

const prepare = () => {
    render();
    $("#undo-delete").click(()=>{
        if(trashedTask.listId !== -1){
            tasksLists[trashedTask.listId].tasks.push(trashedTask.task);
            tasksLists[trashedTask.listId].tasks = tasksLists[trashedTask.listId].tasks.sort((a, b) => a.id-b.id);
            trashedTask  = {listId: -1, task: {}};
            $("#undo-delete").hide();
            renderTasksLists();
        }
    });
    $('#delete-accept-modal').hide();
    $('#accept-delete').click(()=>{
        $('#delete-accept-modal').hide();
        deleteTask();
    })
    $('#discard-delete').click(()=>{
        $('#delete-accept-modal').hide();
    })

}

window.onload = prepare;