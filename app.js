function generatePassword() {
    let length = 10;
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (var i = 0; i < length; i++) {
      var charIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(charIndex);
    }
    document.getElementById("password").value = password;
  }