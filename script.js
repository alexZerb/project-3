// Element selection/Variables Declared
const nameField = document.querySelector('#name');
const jobRoleInput = document.querySelector('#title');
const otherJobInput = document.querySelector('#other-job-role');
const selectDesign = document.querySelector('#design');
const selectColor = document.querySelector('#color');
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
const checkboxEvent = document.querySelectorAll("input[type='checkbox']");
const colorOption = selectColor.children;
let totalCost = 0; 
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
// As checkboxes are selected total price is updated to show present cost
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
// Allows tabination through activites checkboxes
for(let i = 0; i < checkboxEvent.length; i++) {
    checkboxEvent[i].addEventListener('focus', (e) =>{
        e.target.parentElement.classList.add('focus');
    })
    checkboxEvent[i].addEventListener('blur', (e) => {
        e.target.parentElement.classList.remove('focus');
    })
}
// radio buttons are disabled for conflicting time slots *EXTRA CREDIT*
activityFieldset.addEventListener('click', (e) => {
    for(let i = 0; i < checkboxEvent.length; i++){
        if (checkboxEvent[1].checked === true){
            checkboxEvent[3].disabled = true;
            checkboxEvent[3].classList.add('disabled');
        } else {
            checkboxEvent[3].removeAttribute('disabled');
            checkboxEvent[3].classList.remove('disabled');
        }
        if (checkboxEvent[3].checked === true){
            checkboxEvent[1].disabled = true;
            checkboxEvent[1].classList.add('disabled');

        } else {
            checkboxEvent[1].removeAttribute('disabled');
            checkboxEvent[1].classList.remove('disabled');
        }
        if (checkboxEvent[2].checked === true){
            checkboxEvent[4].disabled = true;
            checkboxEvent[4].classList.add('disabled');

        } else {
            checkboxEvent[4].removeAttribute('disabled');
            checkboxEvent[4].classList.remove('disabled');
        }
        if (checkboxEvent[4].checked === true){
            checkboxEvent[2].disabled = true;
            checkboxEvent[2].classList.add('disabled')
        } else {
            checkboxEvent[2].removeAttribute('disabled');
            checkboxEvent[2].classList.remove('disabled');
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
        console.log('true');
        validForm(email);
    } else {
        console.log('false');
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
// If creditcard is chosen, checks to verify correct format, submits otherwise
    if(payment.value === 'credit-card') {
        if (ccIsValid === true) {
            validForm(cardNumber);
        }  else {
            e.preventDefault();
            invalidForm(cardNumber);
// If card digits are not correct a conditional error is displayed. *EXTRA CREDIT*
            if (ccNumber.length < 13) {
                alert('The card number you entered is less than 13 digits.');
            } else if (ccNumber.length > 14) {
                alert('The card number you entered is more than 16 digits.');
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
    element.parentElement.lastElementChild.style.display = 'block';
}
