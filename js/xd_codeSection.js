/*TEST CODE FOR ADOBE XD EXAMPLE*/
$("#login-example-form").submit(function(e) {
    e.preventDefault();
});
  const username = document.querySelector('#form_username');
  const password = document.querySelector('#form_password');
  const submit = document.querySelector('#form_submit');
  const error_message = document.querySelector('#show_error');
  const userhighlight = document.querySelector('#username_highlight');
  const passhighlight = document.querySelector('#password_highlight');
  const subhighlight = document.querySelector('#submit_highlight');
  const errhighlight = document.querySelector('#error_highlight');
  var u;
  var p;

  username.addEventListener('focus', (event) => {
    document.querySelector('#username_state').innerHTML = "user_writing";
    userhighlight.style.background = 'rgb( var(--clr-lightpurple))';
  });
  username.addEventListener('blur', (event) => {
    if(username.value === ""){
    document.querySelector('#username_state').innerHTML = "user_default";
    userhighlight.style.background = 'rgb( var(--clr-darkwhite))';
    u = false;
    } else {
    document.querySelector('#username_state').innerHTML = "user_true";
    userhighlight.style.background = 'rgb( var(--clr-lightgreen))';
    u = true;
    }
  });
  password.addEventListener('focus', (event) => {
    document.querySelector('#password_state').innerHTML = "password_writing";
    passhighlight.style.background = 'rgb( var(--clr-lightpurple))';
  });
  password.addEventListener('blur', (event) => {
    if(password.value === ""){
    document.querySelector('#password_state').innerHTML = "password_default";
    passhighlight.style.background = 'rgb( var(--clr-darkwhite))';
    p = false;
    } else if (password.value === "password"){
    document.querySelector('#password_state').innerHTML = "password_true";
    passhighlight.style.background = 'rgb( var(--clr-lightgreen))';
    p = true;
    } else {
    document.querySelector('#password_state').innerHTML = "password_false";
    passhighlight.style.background = 'rgb( var(--clr-lightred))';
    p = false;
    }

    if(u == true && p == true){
    document.querySelector('#submit_state').innerHTML = "submit_true";
    subhighlight.style.background = 'rgb( var(--clr-lightgreen))';
    } else {
    document.querySelector('#submit_state').innerHTML = "submit_false";
    subhighlight.style.background = 'rgb( var(--clr-lightred))';
    }
  });

  submit.addEventListener('click', (event) =>{
    if(u == true && p == true){
      error_message.style.opacity = "1";
      error_message.innerHTML = "The username and password are correct.";
      document.querySelector('#error_state').innerHTML = "error_success";
      errhighlight.style.background = 'rgb( var(--clr-lightgreen))';
    } else if (u == false || p == false){
      error_message.style.opacity = "1";
      error_message.innerHTML = "Whoops! Try the password: password";
      document.querySelector('#error_state').innerHTML = "error_shown";
      errhighlight.style.background = 'rgb( var(--clr-lightred))';
    } else {
      error_message.style.opacity = "0";
    }
  });