const focus = document.querySelector('#name');
focus.focus();

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

