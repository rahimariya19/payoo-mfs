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
    // console.log('login button clicked')
    //step-3 get the phone number and the pin number
    const phoneNumber=document.getElementById('phone number').value;
    const pinNumber=document.getElementById('pin-number').value;
    // console.log(phoneNumber,pinNumber)

    //step-4 validate phn or pin
    //this is temporary
    if(phoneNumber === '5' && pinNumber === '1234') {
        console.log('you are logged in');
        window.location.href='/home.html'
        //step-5 allow user to use the website
    }

    else{
        alert('Wrong phone number or pin');
    }

});