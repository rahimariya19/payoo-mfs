document.getElementById('button-cash-out')
.addEventListener('click',function(event){
    event.preventDefault();

    const cashOut=document.getElementById('input-cash-out').value;
    const cashOutNumber=parseFloat(cashOut);
    const pinNumber=document.getElementById('input-cash-out-pin').value;
    // console.log(cashOut,pinNumber)

    if(pinNumber==='1234'){
        // console.log('Money is reducing')
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        //reduce the balance
        const newBalance = balanceNumber - cashOutNumber;
        // console.log(newBalance);
        // update the ui
        document.getElementById('account-balance').innerText=newBalance;
    }

    else{
        alert('Failed to cash out! Please try again.')
    }
});