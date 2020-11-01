function greetFunc(){
    console.log('function triggered')
    let name = document.getElementById('userName').value
    console.log(name)
    document.getElementById('greet').innerText="Hi "+name+", How are you today?"
}

function changeColor(){
    console.log('Change Color Triggered')
    document.getElementById('greet').style.backgroundColor="red"
}