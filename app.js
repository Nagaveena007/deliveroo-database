fetch('https://my-json-server.firebaseio.com/db.json')
  .then(response => response.json())
  .then(data => {
    const jsonContainer = document.getElementById('json-container');
    jsonContainer.innerHTML = JSON.stringify(data);
  });
