

const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
};

const displayComments = comments => {
    const displayComments =document.getElementById('display-comments')
    comments.forEach(comment => {
        const div =document.createElement('div');
        div.innerHTML =`
        <h4>Name:${comment.name}</h4>
        <h4>Eamil:${comment.email}</h4>
        <button onclick="loadDetails('${comment})">Details</button>
        `
        displayComments.appendChild(div)
    })
};

const loadDetails = info => {
    const url ='https://jsonplaceholder.typicode.com/comments'
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}