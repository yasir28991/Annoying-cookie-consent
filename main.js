let crossBtnDiv = document.querySelector('.cross-btn-div')
let crossBtn = document.getElementById('cross-btn')
let modalBox = document.getElementById('modal')
let btnBox = document.querySelector('.btn-divs')
let declineBtn = document.getElementById('declineBtn')
let formData = document.getElementById('form-data')
let modalInner = document.getElementById('modal-inner')
const name = document.getElementById('name-input')


declineBtn.addEventListener('mouseover', () => {
    btnBox.classList.toggle('reverse')
})

crossBtn.addEventListener('click', () => {
    modalBox.style.display = 'none'
})

setTimeout(() => {
    modalBox.style.display = 'flex'
}, 2000);

formData.addEventListener('submit', e => {
    e.preventDefault()
    crossBtn.disabled = false
    loading()
})

function loading() {
    modalInner.innerHTML = `
        <h1>uploading your data to the dark web</h1>
        <img class='gif' src='https://media.giphy.com/media/UrEfC5EKRp4eQZdLSS/giphy.gif'>
    `
    setTimeout(() => {
        modalInner.innerHTML = `
        <h1>Making a deal</h1>
        <img class='gif' src='https://media.giphy.com/media/UrEfC5EKRp4eQZdLSS/giphy.gif'>
    `
    }, 2500);

    setTimeout(() => {
        modalInner.innerHTML = `
        <h1>We have sold your info, <span class='name'>${name.value}</span>,  you sucker!</h1>
        <img class='gif' src='https://media.giphy.com/media/AhxCE3ZkSEvSg/giphy.gif'>
    `
    }, 4000);
}