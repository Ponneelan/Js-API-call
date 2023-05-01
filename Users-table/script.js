fetch('https://jsonplaceholder.typicode.com/users').then(res =>  res.json()).then(res1 =>{
    html = ''
    res1.forEach(e => {
        html+= `<tr>
                    <td>${e.name}</td> 
                    <td>${e.username}</td> 
                    <td>${e.email}</td>
                </tr>`;
    });
    console.log(html);
    document.getElementById('my-table').innerHTML = html;

})
