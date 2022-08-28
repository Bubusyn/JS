fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div');
            div.innerText = `${user.id} ${user.name}`;
            let a = document.createElement('a');
            a.href = `user-details.html?id=${user.id}`;
            a.innerText = ' user-details';
            div.appendChild(a);
            document.body.appendChild(div);
        }
    });
