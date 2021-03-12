// const btn = document.getElementsByClassName("btn")
// console.log(btn)

// // const par1 = document.getElementsByClassName("par1")
// // console.log(par1)

// const par1 = document.getElementsByClassName("par1")
// const sth = Array.from(par1)
// console.log(sth)
// console.log(typeof par1)
//     for (let i = 0; i < par1.length; i ++){
//     console.log(par1[1].classList)
//     par1[i].style.color = 'hotpink'    
//     par1[i].classList.add('jaroiseatingryszwithkaczkainbeczka')
//     par1[i].classList.remove('poki')

// }

// const par2 = document.getElementsByClassName("par2")
// const sth2 = Array.from(par2)
// console.log(sth2)
// console.log(typeof par2)
//     for (let i = 0; i < par2.length; i ++){
//     console.log(par2[1])
//     par2[i].style.color = 'maroon'    
// }

// const parID = document.getElementById('parid1')
// console.log(parID)
// parID.style.backgroundColor = 'blue'
// parID.innerHTML = "<button>tak</button>"
// parID.innerText = "<button>tak</button>"

// const type = document.querySelector('input[type = "button"]')
// console.log(type)

// const typeAll = document.querySelectorAll('input[type = "button"]')
// console.log(typeAll)

// const typeAllArr = Array.from(typeAll)
// console.log(typeAllArr)

// typeAllArr.forEach(item => {
//     item.value = 'jaro is eating rysz with kaczka in beczka'
// })

// const tagA = document.getElementById('tagA')

// tagA.setAttribute('href', 'https://github.com/')

const paragraf = document.createElement('p')
paragraf.setAttribute('class' , 'jaroiseatingryszwithkaczkainbeczka')
paragraf.innerText = "jaro is eating ryz with kaczka in beczka"
const app = document.getElementById('app')
app.appendChild(paragraf)
