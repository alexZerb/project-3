// Focus on Name section at beginning
const nameField = document.querySelector('#name');
nameField.focus();
// Job Role Section
const jobRoleInput = document.querySelector('#title');
const otherJobInput = document.querySelector('#other-job-role');

otherJobInput.style.display = 'none';

jobRoleInput.addEventListener('change', (e) => {
    if(e.target.value === 'other') {
        otherJobInput.style.display = 'block';
    }  else {
        otherJobInput.style.display = 'none';
    }      
});
// T-Shirt Information Section
const selectDesign = document.querySelector('#design');
const selectColor = document.querySelector('#color');
const colorOption = selectColor.children;

selectColor.disabled = true;

selectDesign.addEventListener('change', (e) => {
    selectColor.disabled = false;
    for(let i = 0; i < colorOption.length; i++){
      const targetValue = e.target.value;
      const dataTheme = colorOption[i].getAttribute('data-theme');    
        if(targetValue === dataTheme) {
            colorOption[i].hidden = false;
            colorOption[i].setAttribute('selected', true);
            
        } else {
            colorOption[i].hidden = true;
            colorOption[i].removeAttribute('selected');
        }
        
    }

});
// Register for Activities Section
const activityFieldset = document.querySelector('#activities');
const finalPriceField = document.querySelector('#activities-cost');

let totalCost = 0; 

activityFieldset.addEventListener('change', (e) => {
    dataCost = e.target.getAttribute('data-cost');
    if(e.target.checked === true) {
        totalCost += (+dataCost);
        console.log('true');
        console.log(totalCost);
        finalPriceField.innerHTML = `Total: $${totalCost}.00`;
    } else {
        totalCost -= (+dataCost);
        console.log('false');
        finalPriceField.innerHTML = `Total: $${totalCost}.00`;
    }
});
// Payment info section
const payment = document.querySelector('#payment');
const divCreditCard = document.querySelector('#credit-card');
const divPaypal = document.querySelector('#paypal');
const divBitcoin = document.querySelector('#bitcoin');

divPaypal.style.display = 'none';
divBitcoin.style.display = 'none';

payment.children[1].setAttribute('selected', true);

payment.addEventListener('change', (e) => {
    if(e.target.value === 'credit-card') {
        divCreditCard.style.display = 'block';
        divPaypal.style.display = 'none';
        divBitcoin.style.display = 'none';
    } else if (e.target.value === 'paypal') {
        divCreditCard.style.display = 'none';
        divPaypal.style.display = 'block';
        divBitcoin.style.display = 'none';
    } else if (e.target.value === 'bitcoin'){
        divCreditCard.style.display = 'none';
        divPaypal.style.display = 'none';
        divBitcoin.style.display = 'block';
    }
}); 

const email = document.querySelector('#email');
const cardNumber = document.querySelector('#cc-num');
const zipcode = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    const username = nameField.value;
    const emailAddress = email.value;
    const ccNumber = cardNumber.value;
    const userZip = zipcode.value;
    const userCVV = cvv.value;
    const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(username);
    const ccIsValid = /^[0-9]{13}[0-9]?[0-9]?[0-9]?$/.test(+ccNumber);
    const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/.test(emailAddress);
    const zipIsValid = /^\d{5}$/.test(+userZip);
    const cvvIsValid = /^\d{3}$/.test(+cvv);

    if (nameIsValid === true) {
        nameField.style.borderColor = 'green';
    } else {
        e.preventDefault();
        alert('Please enter your Name in the name field (no numbers or special characters)');
        nameField.style.borderColor = 'firebrick';
    } 
    if (ccIsValid === true) {
        cardNumber.style.borderColor = 'green';
    } else {
        e.preventDefault();
        alert('Please enter 13-16 numbers in Credit Card field');
        cardNumber.style.borderColor = 'firebrick';
    } 
    if (emailIsValid === true) {
        email.style.borderColor = 'green';
    } else {
        e.preventDefault();
        alert('Please enter a valid Email Address');
        email.style.borderColor = 'firebrick';
    }
    if (zipIsValid === true) {
        zipcode.style.borderColor = 'green';
    } else{
        e.preventDefault();
        alert('Please enter a valid 5 digit zip code')
        zipcode.style.borderColor = 'firebrick';
    }
    if (cvvIsValid === true) {
        cvv.style.borderColor = 'green';
    } else {
        e.preventDefault();
        alert('Please enter a Valid 3 digit CVV number');
        cvv.style.borderColor = 'firebrick';
    }
});

const checkboxEvent = document.querySelector('#activities-box'); 
console.log(checkboxEvent);