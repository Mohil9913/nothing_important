function validator() {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
    var email = document.getElementById("mail").value;
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;

    if (!emailRegex.test(email)) {
        alert("Invalid Email !");
        return false;
    }

    if (pass1 !== pass2) {
        alert("Password Doesn't Match ! Try Again");
        return false;
    }

    if (pass1.length < 6 || pass1.length > 12) {
        alert("Password must be 6 to 12 characters long !");
        return false;
    }

    document.getElementById("regform").submit();
    return true;
}