fetch('https://api.github.com/users/Saskyong2004')
    .then(response => response.json())
    .then(user => {
        console.log(`Name: ${user.login}, ID: ${user.id}, URL: ${user.html_url}`);
    })
    .catch(error => console.error('Error fetching data:', error));
