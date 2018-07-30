// var validateBtn = document.querySelector('.formWithValidation .validateBtn');


var form = document.querySelector('.formWithValidation'); 
var validateBtn = form.querySelector('.validateBtn');
var from = form.querySelector('.from');
var password = form.querySelector('.password');
var passwordConfirmation = form.querySelector('.passwordConfirmation');
var passwordConfirmation = form.querySelector('.passwordConfirmation');
var where = form.querySelector('.where');
var message = form.querySelector('.message');

form.addEventListener('submit', function (event) {  // add listener of event to the form el with formWithValidation class
  event.preventDefault(); // ??
  console.log('clicked on validate');
  console.log('from: ', from.value);  // show in console value of from input
  console.log('password: ', password.value);// show in console value of password input 
  console.log('passwordConfirmation: ', passwordConfirmation.value);// show in console value of passwordConfirmation input
  console.log('where: ', where.value);// show in console value of where input
  console.log('message: ', message.value);// show in console value of message input

})

var fields = form.querySelectorAll('.field'); // take all el-s with field class

form.addEventListener('submit', function(){ // add listener of event to the form el with formWithValidation class

     event.preventDefault();// default action that belongs to the event will not occur
    
     removeValidation();// clear form console from errors
    //  var errors = form.querySelectorAll('.error');
     
    //   for(var i = 0; i < errors.length; i++){
    //     errors[i].remove();  
    //   };
     
    checkFieldsPresence();// check if input has value
      // for(var i = 0; i < fields.length; i++){
      //         if(!fields[i].value){
      //           console.log('field is blank', fields[i]);
      //           var error = generateError('Cant be blank');
      //           // var error = document.createElement('div');
      //           // error.className = 'error';
      //           // error.style.color = 'red';
      //           // error.innerHTML = 'Cannot be blank';
      //           form[i].parentElement.insertBefore(error, fields[i]);            
      //         }
      //   }
       
      
          checkPasswordMatch(); // check password from two inputs
        // if(password.value !== passwordConfirmation.value){
        //   console.log('not equals');
        //   var error = generateError('Password doesnt match');
        //   // var error = document.createElement('div');
        //   // error.className = 'error';
        //   // error.style.color = 'red';
        //   // error.innerHTML = 'Password doesnt match';
        //   password.parentElement.insertBefore(error, password);
        // }
})

var generateError = function (text){
  var error = document.createElement('div'); // create el 'div' 
        error.className = 'error'; // with class name 'error'
        error.style.color = 'red'; // color 'red'
        error.innerHTML = text; // argument(text) 
  return error;    // 
}

//function to remove errors logs
var removeValidation = function (){
    var errors = form.querySelectorAll('.error');// all el with error class

    for(var i = 0; i < errors.length; i++){ // 
        errors[i].remove();     
    }
}

//function to check inputs value existing
var checkFieldsPresence = function(){
    for (var i = 0; i < fields.length; i++){
        if(!fields[i].value){
            console.log('field is blank', fields[i]);
            var error = generateError('Cant be blank');
            fields[i].parentElement.insertBefore(error, fields[i]);   // ****** here I have some mat'uks !! Check plz !
        }
    }
}


//function to check passwords match from two inputs
var checkPasswordMatch = function () {
         if (password.value !== passwordConfirmation.value) {
            console.log('not equals')
            var error = generateError('Password doesnt match')
            console.log(error)
            password.parentElement.insertBefore(error, password)
  }
}



