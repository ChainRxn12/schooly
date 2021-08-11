async function signupFormHandler(event) {
    event.preventDefault();
  
    const password = document.querySelector('#password-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const firstname = document.querySelector('#firstname-signup').value.trim();
    const lastname = document.querySelector('#lastname-signup').value.trim();
  
    if (password && email && firstname && lastname) {
      const response = await fetch('/api/teachers', {
        method: 'post',
        body: JSON.stringify({
          password,
          email,
          firstname,
          lastname,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);