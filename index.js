// Add your code here
function submit (name, email){
  let formData = {
       name: name,
       email: email
   };
}

let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
