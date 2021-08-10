const users = [];
async function loginFormHandler(event) {
  event.preventDefault();
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    console.log(email, password);
    const response = await fetch('/api/teacher/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(await response.json());
    if (response.ok) {
      //debugger
      document.location.replace('/api/homepage');
    } else {
      alert((await response.json()).message);
    }
  }
}

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

async function onSignIn(googleUser) {
  console.log(googleUser);

  var profile = googleUser.getBasicProfile();
  const username = profile.getName();
  const password = profile.getImageUrl();
  const email = profile.getEmail();
  const firstname = profile.getGivenName();
  const lastname = profile.getFamilyName();

  if (username && password && email && firstname && lastname) {
    const response = await fetch('/api/login', {
      method: 'post',
      body: JSON.stringify({
        username,
        password,
        email,
        firstname,
        lastname,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      console.log(response);
      debugger;
      document.location.replace('/api/homepage');
    } else {
      console.log('hi');
      const response = await fetch('/api/signup', {
        method: 'post',
        body: JSON.stringify({
          username,
          password,
          email,
          firstname,
          lastname,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/api/homepage');
      }
    }
  }
}