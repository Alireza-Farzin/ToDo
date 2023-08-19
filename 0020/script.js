let myForm = document.querySelector('#myForm');
let todoText = document.querySelector('.todo')
myForm.addEventListener('submit', function () {

    if(todoText.value ==''){
        alert('add text');

    }else{

        let listItem = document.createElement('li');

        listItem.innerHTML = todoText.value;
    
        let tasksList = document.querySelector('#task ul');
    
        tasksList.appendChild(listItem);
        todoText.value = '';
    }
});