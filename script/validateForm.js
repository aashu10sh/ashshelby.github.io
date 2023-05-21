document.getElementById("on-click").addEventListener("click", submitForm);

async function submitForm() {
    console.log(validateForm())
  if (!validateForm()) {
    swal(
      "Validation Failed!",
      "The Data You send could not be verified!",
      "error"
    );
  }
  sendRequest(getData())
  swal(
    "Done!","You're Data is sent!","success"
  );
}


function getData(){
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phoneNumber = document.getElementById("phone-number");
    const message = document.getElementById("message");
    return {"name":name, "email":email,"phone":phoneNumber,"message":message}
}

function validateForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phoneNumber = document.getElementById("phone-number");
  const message = document.getElementById("message");

  if (!name.value || name.value.length < 2 || name.value.length > 30) {
    alert("Invalid Name !");
    return false;
  }
  if (!email.value || !validateEmail(email.value)) {
    alert("Invalid Email");
    return false;
  }
  if (!phoneNumber.value || phoneNumber.value.length != 10) {
    alert("Invalid Phone Number");
    return false;
  }
  if (!message || message.value.length < 2 || message.value.length > 300) {
    alert("Invalid Message");
    return false;
  }
  return true;
}

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

async function sendRequest(data){
    const endpoint = 'https://log.documentarynepal.com'; 
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  
    fetch(endpoint, requestOptions)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Request failed.');
        }
      })
      .then(responseData => {
        console.log(responseData);
      })
      .catch(error => {
        console.error('Error:', error);
      });

}