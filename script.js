/*

Constant & Regular Expressions

*/
const nameField = document.querySelector('#name');
const jobRoleInput = document.querySelector('#title');
const otherJobInput = document.querySelector('#other-job-role');
const selectDesign = document.querySelector('#design');
const selectColor = document.querySelector('#color');
const colorOption = selectColor.children;
const activityFieldset = document.querySelector('#activities');
const finalPriceField = document.querySelector('#activities-cost');
const payment = document.querySelector('#payment');
const divCreditCard = document.querySelector('#credit-card');
const divPaypal = document.querySelector('#paypal');
const divBitcoin = document.querySelector('#bitcoin');
const email = document.querySelector('#email');
const cardNumber = document.querySelector('#cc-num');
const zipcode = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');
const form = document.querySelector('form');
const username = nameField.value;
const emailAddress = email.value;
const ccNumber = cardNumber.value;
const userZip = zipcode.value;
const userCVV = cvv.value;
const cbEvent = document.querySelectorAll("input[type='checkbox']");
let totalCost = 0;
//focus on name, hide otherJob, bitcoin, paypal, disable color field
nameField.focus();
selectColor.disabled = true;
divPaypal.style.display = 'none';
divBitcoin.style.display = 'none';
otherJobInput.style.display = 'none';

jobRoleInput.addEventListener('change', (e) => {
    if(e.target.value === 'other') {
        otherJobInput.style.display = 'block';
    }  else {
        otherJobInput.style.display = 'none';
    }      
});

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
activityFieldset.addEventListener('change', (e) => {
    dataCost = e.target.getAttribute('data-cost');
    if(e.target.checked === true) {
        totalCost += (+dataCost);
        finalPriceField.innerHTML = `Total: $${totalCost}.00`;
    } else {
        totalCost -= (+dataCost);
        finalPriceField.innerHTML = `Total: $${totalCost}.00`;
    }
});
// Payment info section
payment.children[1].setAttribute('selected', true);
// Paypal, Bitcoin display additional information when selected
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
// Required fields are checked for accuracy 
form.addEventListener('submit', (e) => {
    const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(username);
    const ccIsValid = /^[0-9]{13}[0-9]?[0-9]?[0-9]?$/.test(+ccNumber);
    const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/.test(emailAddress);
    const zipIsValid = /^\d{5}$/.test(+userZip);
    const cvvIsValid = /^\d{3}$/.test(+userCVV);
// adds classList information, styles, depending on Valid/Invalid
    if (nameIsValid === true) {
        validForm(nameField);
    } else {
        e.preventDefault();
        invalidForm(nameField);
    } 
    if (ccIsValid === true) {
        validForm(cardNumber);
    } else {
        e.preventDefault();
        invalidForm(cardNumber);
    } 
    if (emailIsValid === true) {
        validForm(email)
    } else {
        e.preventDefault();
        invalidForm(email);
    }
    if (zipIsValid === true) {
    } else{
        e.preventDefault();
        invalidForm(zipcode);
    }
    if (cvvIsValid === true){
        validForm(cvv);
    } else {
        e.preventDefault
        invalidForm(cvv);
    }
}); 
// allows tabination through activities check boxes
for(let i = 0; i < cbEvent.length; i++) {
    cbEvent[i].addEventListener('focus', (e) =>{
        e.target.parentElement.classList.add('focus');
    })
    cbEvent[i].addEventListener('blur', (e) => {
        e.target.parentElement.classList.remove('focus');
    })
}
//functions to clean up conditionals
function validForm (element) {
    element.parentElement.classList.add('valid');
    element.parentElement.classList.remove('not-valid');
    element.parentElement.lastElementChild.style.display = 'none';
    element.style.borderColor = 'green';
}
function invalidForm (element) {
    element.parentElement.classList.add('not-valid');
    element.parentElement.classList.remove('valid');
    element.parentElement.lastElementChild.style.display = 'block';
    element.style.borderColor = 'firebrick';
}