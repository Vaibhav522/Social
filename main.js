let a = document.getElementById('acc')
let b = ['chocolate','cream','pink','purple','violet','lightblue','grey']

a.style.backgroundColor="green"
a.addEventListener('click',change)

function change(){
  let f = parseInt(Math.random()*b.length)
  a.style.background = b[f]
}
