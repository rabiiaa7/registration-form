function validateForm() { 
  let fullName = document.getElementById("fullname").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirm").value.trim(); // fixed ID

  if (fullName === "" || email === "" || password === "" || confirmPassword === "") {
    alert("Please fill out all required fields.");
    return false;
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  // If all checks pass
  alert("Registration Successful!");
  return true;
}

