function sendOTP() {
  const email = document.getElementById('email').value;
  if (!email) {
    alert('Please enter your email address.');
    return;
  }

  // Simulate OTP sent
  alert(`OTP sent to ${email}`);
}
