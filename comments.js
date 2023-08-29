const dataLoad = () => {
    const url = 'https://openapi.programming-hero.com/api/ai/tools](https://openapi.programming-hero.com/api/ai/tools';
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
        .catch(error => console.error(error))
}
function displayData(comments) {
    const dataContainer = document.getElementById('data-container');
    dataContainer.style.border = '1px solid darkgreen';
    for (const comment of comments) {
        const div = document.createElement('div');
        div.innerHTML = `
        <ul>
          <li>
           Name:${comment.name},
           Email:${comment.email},
           Body:${comment.body},
          </li>
        </ul>
        `
        div.setAttribute('class', "comment")
        dataContainer.appendChild(div)
    }
}