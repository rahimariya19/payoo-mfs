//add money to the account
//step-1 add an event handler to the add money button inside the form
//step-2 get money and pin
//step-3 verify pin number
document.getElementById('button-add-money')
.addEventListener('click',function(event){
    //prevent page reload after form submit
    event.preventDefault();

    //step-2 get money to be added to the account balance
    const inputAddMoney=document.getElementById('input-add-money').value;
    //get the pin number
    const inputPinNumber=document.getElementById('input-pin-number').value;

    // console.log(inputAddMoney,inputPinNumber);
    //step-3 verify pin number
    if(inputPinNumber==='1234'){
        console.log('Adding money to your account')
        //step-4 get the current balance
        const balance=document.getElementById('account-balance').innerText;
        // console.log(balance);

        //step-5 add money input with balance
        // const newBalance= balance + inputAddMoney;
        const addMoneyNumber= parseFloat(inputAddMoney);
        const balanceNumber=parseFloat(balance);
        const newBalance=addMoneyNumber + balanceNumber ;
        console.log(newBalance);

        //step-6 updated the balance in the ui/dom
        document.getElementById('account-balance').innerText=newBalance;
    }
    else{
        alert('Failed to add Money! Please try again');
    }
});