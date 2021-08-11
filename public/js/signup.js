async function signupFormHandler(event) {
    event.preventDefault();
  
    const password = document.querySelector('#password-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const first_name = document.querySelector('#firstname-signup').value.trim();
    const last_name = document.querySelector('#lastname-signup').value.trim();
  
    if (password && email && first_name && last_name) {
      const response = await fetch('/api/teachers', {
        method: 'POST',
        body: JSON.stringify({
          password,
          email,
          first_name,
          last_name,
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