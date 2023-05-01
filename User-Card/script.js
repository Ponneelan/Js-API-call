fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data=>{
    let content = ''
    data.forEach(element => {
        content+=` <div class="cards">
        <h3>${element.name}</h3>
        <div class="cred">
            <p>UserName : ${element.username}</p>
            <p>E-mail : ${element.email.toLowerCase()}</p>
        </div>
    </div>`;
    console.log(content);
    document.getElementById('users').innerHTML = content;
    });
});