// This function authenticates username and password

function authenticateUser(username,password){
    var message;
    if (username == "" || password == "") // checks for blank values
    {
       message =  "Username or password incorrect ";  // { is the message suitable here ?}
    }
    else if (username == "admin" && password == "tiger") // checks for correct values
    {
       message = "Username and password is correct";
    }
    else  // all other conditions
    {
       message = " Type your message here ";  //{ What is the message is suitable for this condition ?}
    }
    return message;
}
console.log(authenticateUser('admin','tiger1'));
