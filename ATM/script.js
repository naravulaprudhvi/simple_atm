let users = [
    { name: "PRUDHVI", cdnum: "123456789", pin: "1234" ,amount:99999},
    { name: "NARENDRA", cdnum: "987654321", pin: "9872" , amount:100000},
    { name: "MOHAN", cdnum: "11223344", pin: "1122" , amount:150000}
];
function cdnumCheck() {
    let inputcdnum = document.getElementById('inputcdnum').value.trim();
    let user = users.find(user => user.cdnum === inputcdnum);
    if (user) {
        localStorage.setItem("currentCdnum", user.cdnum);
        window.location.href = 'atmpin.html';
        
    } else {
        document.getElementById('message').innerText = 'INVALID CARD NUMBER';
        document.getElementById('inputpin').value = ''; 

    }
}
function pinCheck() {
    let inputcdnum = localStorage.getItem("currentCdnum"); 
    let inputpin = document.getElementById('inputpin').value.trim();

    let user = users.find(user => user.cdnum === inputcdnum);

    if (user && user.pin === inputpin) {
        
        window.location.href = 'atminterface.html'; 
    } else {
        
        document.getElementById('message').innerText = 'INVALID PIN';
        document.getElementById('inputpin').value = ''; 
    }
}

function amountCheck(){
    let inputamount = document.getElementById('inputamount').value.trim() ;
    let inputcdnum = localStorage.getItem("currentCdnum");
    let user = users.find(user => user.cdnum === inputcdnum);

    if (user && user.amount >= inputamount) {
        user.amount-=inputamount;
        window.alert('AMOUNT DEBITED : '+inputamount+'\nAVALIABLE BALANCE : '+user.amount);
        document.getElementById('inputamount').value = '';                 
    }
    else{
        window.alert('INSUFFICENT BALANCE.... \n PLEACE CHECK MR/MS '+user.name);
    }
}



