// Element selection/Variables Declared
const nameField = document.querySelector('#name');
const jobRoleInput = document.querySelector('#title');
const otherJobInput = document.querySelector('#other-job-role');
const selectDesign = document.querySelector('#design');
const selectColor = document.querySelector('#color');
const activities = document.querySelector('#activities-box');
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
const checkbox = activities.querySelectorAll("input[type='checkbox']");
const colorOption = selectColor.children;
const cardError = document.querySelector('#cc-hint');
let totalCost = 0; 
let total = 0;

// Focus on name field/disable color options until design is selected
nameField.focus();
selectColor.disabled = true;
// Hide other job input/hide additional payment information
divPaypal.style.display = 'none';
divBitcoin.style.display = 'none';
otherJobInput.style.display = 'none';
payment.children[1].setAttribute('selected', true);
// Event listener to display other job field when selected
jobRoleInput.addEventListener('change', (e) => {
    if(e.target.value === 'other') {
        otherJobInput.style.display = 'block';
    }  else {
        otherJobInput.style.display = 'none';
    }      
});
// When design is selected only available colors are shown
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
// As checkbox are selected total price is updated to show present cost
activities.addEventListener('change', (e) => {
    dataCost = e.target.getAttribute('data-cost');
    if(e.target.checked === true) {
        totalCost += (+dataCost);
        finalPriceField.innerHTML = `Total: $${totalCost}.00`;
    } else {
        totalCost -= (+dataCost);
        finalPriceField.innerHTML = `Total: $${totalCost}.00`;
    }
});
// Allows tabination through activites checkbox
for(let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('focus', (e) =>{
        e.target.parentElement.classList.add('focus');
    })
    checkbox[i].addEventListener('blur', (e) => {
        e.target.parentElement.classList.remove('focus');
    })
}
// radio buttons are disabled for conflicting time slots *EXTRA CREDIT*
activities.addEventListener('click', (e) => {
    for(let i = 0; i < checkbox.length; i++){
        if (checkbox[1].checked === true){
            checkbox[3].disabled = true;
            checkbox[3].classList.add('disabled');
        } else {
            checkbox[3].removeAttribute('disabled');
            checkbox[3].classList.remove('disabled');
        }
        if (checkbox[3].checked === true){
            checkbox[1].disabled = true;
            checkbox[1].classList.add('disabled');

        } else {
            checkbox[1].removeAttribute('disabled');
            checkbox[1].classList.remove('disabled');
        }
        if (checkbox[2].checked === true){
            checkbox[4].disabled = true;
            checkbox[4].classList.add('disabled');

        } else {
            checkbox[4].removeAttribute('disabled');
            checkbox[4].classList.remove('disabled');
        }
        if (checkbox[4].checked === true){
            checkbox[2].disabled = true;
            checkbox[2].classList.add('disabled')
        } else {
            checkbox[2].removeAttribute('disabled');
            checkbox[2].classList.remove('disabled');
        }
    }
});
// Payment info displays additional information for bitcoin/paypal
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
// Checks email with validator each time user types in field *EXTRA CREDIT*
email.addEventListener('keyup', (e) => {
    const liveEmailValidator = /^[^@]+@[^@.]+\.[a-zA-Z]{3}$/.test(e.target.value);
    if (liveEmailValidator === true) {
        validForm(email);
    } else {
        invalidForm(email);
    }
})
// Form validation event listener
form.addEventListener('submit', (e) => {
    const username = nameField.value;
    const emailAddress = email.value;
    const ccNumber = cardNumber.value;
    const userZip = zipcode.value;
    const userCVV = cvv.value;
    const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(username);
    const ccIsValid = /^\d{13}\d?\d?\d?$/.test(ccNumber);
    const emailIsValid = /^[^@]+@[^@.]+\.[a-zA-Z]+$/.test(emailAddress);
    const zipIsValid = /^\d{5}$/.test(userZip);
    const cvvIsValid = /^\d{3}$/.test(userCVV);
// Form will not submit unless all values are filled in correctly
   
if (nameIsValid === true) {
        validForm(nameField);
    } else {
        e.preventDefault();
        invalidForm(nameField);
    } 
    if (emailIsValid === true) {
        validForm(email);
    } else {
        e.preventDefault();
        invalidForm(email);
    } 
    if (!validActivity()){ e.preventDefault();}
// If creditcard is chosen, checks to verify correct format, submits otherwise
    if(payment.value === 'credit-card') {
        if (ccIsValid === true) {
            validForm(cardNumber);
        }  else {
            e.preventDefault();
            invalidForm(cardNumber);
// If card digits are not correct a conditional error is displayed. *EXTRA CREDIT*
            if (ccNumber.length < 13) {
                cardError.innerHTML += '. The card number you entered is less than 13 digits.';
            } else if (ccNumber.length > 14) {
                cardError.innerHTML += '. The card number you entered is more than 16 digits.';
            }
        } 
        if (zipIsValid === true) {
            validForm(zipcode);
        } else{
            e.preventDefault();
            invalidForm(zipcode);
        }
        if (cvvIsValid === true) {
            validForm(cvv);
        } else {
            e.preventDefault();
            invalidForm(cvv);
        }
    }
}); 
// Functions to add appropriate styles when complete/incomplete
function validForm (element) {
    element.parentElement.classList.add('valid');
    element.parentElement.classList.remove('not-valid');
    element.parentElement.lastElementChild.style.display = 'none';
}
function invalidForm (element) {
    element.parentElement.classList.add('not-valid');
    element.parentElement.classList.remove('valid');
    element.parentElement.lastElementChild.style.display = 'inline';
}
// Checks if an activity is selected using totalCost variable
function validActivity () {
    if(totalCost > 0){
        validForm(activities);
        return true;
    } else {
    invalidForm(activities);
        return false;
    }
}