let image = document.querySelector('#image')
let firstName = document.querySelector('#firstName')
let lastName = document.querySelector('#lastName')
let date0fBirth = document.querySelector('#date0fBirth')
let email = document.querySelector('#email')
let form = document.querySelector('form')
const errorinput = document.querySelector('#error')
let img = document.querySelector('#img')




//UPLOAD IMAGE 
    function readUrl (input) {
        if (input.files) {
            let reader = new FileReader();
            reader.readAsDataURL(input.files[0]);
            reader.onload = (e) => {
                 img.src = e.target.result;
            }
        }
    };

//CHECK FOR ERRORS
form.addEventListener( 'submit', (e) => { 

//    IMAGE ERROR 
    let imageMessages = [];

   if (image.value === undefined || image.value == null) {
    imageMessages.push('Image is required')
   }

   if (imageMessages.value.length> 0) {
    e.preventDefault();
 errorinput.innerText = imageMessages.join(', ')
}

//  FIRST NAME ERROR
    let firstNameMessages = [];

   if (firstName.value === '' || firstName.value == null) {
    firstNameMessages.push('First name is required')
   }

   if (firstNameMessages.value.length > 0) {
    e.preventDefault();
    errorinput.innerText = firstNameMessages.join(', ')}

//  LAST NAME ERROR
    let lastNameMessages = [];

   if (lastName.value === '' || lastName.value == null) {
    lastNameMessages.push('Last name is required')
   }

   if (lastNameMessages.value.length > 0) {
    e.preventDefault();
    errorinput.innerText = lastNameMessages.join(', ')}

//  DATE OF BIRTH ERROR
    let dateOfBirthMessage = [];

   if (dateOfBirthMessage.value === ''|| dateOfBirthMessage.value == null) {
    dateOfBirthMessage.push('Date of Birth is required')
   }

   if (dateOfBirthMessage.value.length > 0) {
    e.preventDefault();
    errorinput.innerText = dateOfBirthMessage.join(', ')}

//  EMAIL ERROR
    let emailMessage = [];

    if (emailMessage.value.length > 0) {
        e.preventDefault();
        errorinput.innerText = emailMessage.join(', ')
    }

// PASSWORD ERROR
    let passwordMessage = [];

    if(passwordMessage.value.length <= 5) {
        passwordMessage.push('Password must be longer than 5 characters')
        e.preventDefault();
        errorinput.innerText = passwordMessage.join(', ')
    }

});

if (form.value.length === form.value.length ) {
    alert('Form Completed')
}