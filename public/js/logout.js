async function logout() {
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
  async function revokeAllScopes() {
    gapi.auth2.getAuthInstance().disconnect();
  }
  document.querySelector('#logout').addEventListener('click', logout, revokeAllScopes);