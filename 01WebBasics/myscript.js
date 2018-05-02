// const myElm = document.querySelectorAll('.classone')
// console.log(myElm[0]);

// const myPElm = document.querySelector('p')
// myPElm.textContent = 'I am being changed using JS'

// const myPElm = document.querySelectorAll('p')
// myPElm.forEach((p) => p.textContent = 'I am being changed usin loops in JS')


const myNewPara = document.createElement('p')
myNewPara.textContent = 'I was added via JS'

document.querySelector('body').appendChild(myNewPara)


