//Accessing elements from index.html

const inputEl = document.querySelector('#newTask');
const btnEl = document.querySelector('#addTask');
const formEl = document.querySelector('form');
const taskListEl = document.querySelector('#taskList');

//Creating eventlistener

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    if(inputEl.value.length === 0){
        return alert('R U 2 lazzzy 2 wright smth?');
    }

    const item = document.createElement('li');
    const inputCheckbox = document.createElement('input');
    const buttonDelete = document.createElement('button');
    const textTask = document.createElement('p');
    
    buttonDelete.type = 'button';
    buttonDelete.textContent = 'Delete'
    inputCheckbox.type = 'checkbox';
    textTask.textContent = inputEl.value;

    item.append(textTask, inputCheckbox, buttonDelete);
    taskListEl.append(item);

    inputEl.value = '';

    console.log(item);
    buttonDelete.addEventListener('click', () => {
        item.remove() 
    });

    // Struggling with endless iteration for class change
    
    taskListEl.addEventListener('change', (event) => {
        if(event.target.type === 'checkbox')
        {
            if(event.target.checked)
            {
              event.target.parentNode.children[0].classList.add('p-checked');
            } else {
                event.target.parentNode.classList.remove('p-checked');
            }
            console.dir(event.target.parentNode)
        } 
});

});
