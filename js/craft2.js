const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    window.location.href = 'Back.html'
})

const btn1 = document.querySelector('.btn1')
const border1 = document.querySelector('.border1')
const border2 = document.querySelector('.border2')
btn1.addEventListener('click', () => {
    setTimeout(() => {
        window.location.href = '4.html'
        border1.style.opacity = '0'
    }, 1000)
    border1.style.transform += 'scale(1.5)' + 'rotate(90deg)'
    border1.style.left = '60vw'
    border1.style.border = '1px solid #000'
})

const btn2 = document.querySelector('.btn2')
btn2.addEventListener('click', () => {
    setTimeout(() => {
        window.location.href = '4-2.html'
        border2.style.opacity = '0'
    }, 1000)
    border2.style.transform += 'scale(1.5)' + 'rotate(90deg)'
    border2.style.left = '20vw'
    border2.style.border = '1px solid #000'
})
