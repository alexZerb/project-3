// Focus on Name section at beginning
const fieldName = document.querySelector('#name');
fieldName.focus();
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

const emailElement 
const cardNumberField
const zipcodeField
const cvvField = 
const form = document.querySelector('form');
