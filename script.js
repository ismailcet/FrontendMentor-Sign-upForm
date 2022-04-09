const nameError=document.querySelector('#nameError')
const lastError=document.querySelector('#lastError');
const emailError=document.querySelector('#emailError');
const passError=document.querySelector('#passError');
const submitBtn=document.querySelector('#submit');
let name=document.querySelector('#fName');
let last=document.querySelector('#lName');
let email=document.querySelector('#email');
let pass=document.querySelector('#pass');



submitBtn.addEventListener('click',showValues);
//Hide Alert messages
function hideAlert(){
    if(nameError.classList.contains('active')){
        name.classList.remove('wrong');
        nameError.classList.remove('active')
    }
    if(lastError.classList.contains('active')){
        last.classList.remove('wrong');
        lastError.classList.remove('active')
    }
    if(emailError.classList.contains('active')){
        email.classList.remove('wrong');
        emailError.classList.remove('active')
    }
    if(passError.classList.contains('active')){
        pass.classList.remove('wrong');
        passError.classList.remove('active')
    }
}
// Validate Check Email
const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

// Show values
function showValues(e){
    nameValue=name.value;
    lastValue=last.value;
    emailValue=email.value;
    passValue=pass.value;
    console.log(nameValue)
    if(nameValue==''){
        name.classList.add('wrong');
        nameError.classList.add('active')
    }
    if(lastValue==''){
        last.classList.add('wrong');
        lastError.classList.add('active')
    }
    if(emailValue=='' || validateEmail(emailValue) == null){
        email.classList.add('wrong');
        emailError.classList.add('active')
    }
    if(passValue==''){
        pass.classList.add('wrong');
        passError.classList.add('active')
    }
    setTimeout(hideAlert, 1000);
    e.preventDefault();
}


