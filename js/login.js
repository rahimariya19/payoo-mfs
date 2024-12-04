//document.getElementById('id').addEventListener('click',function)

// document.getElementById('button-login')
// .addEventListener('click', function(){ 
// })

//fom submit reloading the page

//step-1 set event handler
document.getElementById('button-login')

//step-2 prevent default behavior (reloading browser)
.addEventListener('click', function(event){
    event.preventDefault();
    console.log('login button clicked')
    //step-3 get the phone number
    const phoneNumber=document.getElementById('phone number').value;
    console.log(phoneNumber)

})