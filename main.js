let textInput = document.getElementById('message');
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');


textInput.addEventListener('keyup', function(){
    console.log(event)
    
    box1.textContent = event.target.value
    box2.textContent = event.target.value
})