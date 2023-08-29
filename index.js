const usersLoad = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayUsers(data))
}
usersLoad()
const displayUsers = (users) => {
    const ul = document.getElementById('users')
    for (const user of users) {
        let li = document.createElement('li')
        li.setAttribute('class', 'post');
        li.innerText = `
           Id: ${user.id},
           Title:${user.title},
           Body:${user.body}
   `
        ul.appendChild(li)
    }

}
const stuInfo = JSON.stringify({ name: "James", roll: 3 });
console.log(stuInfo.name);