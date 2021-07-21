const saveBt = document.getElementById('saveGoal') //저장버튼
const typeData = document.getElementById('typeGoal')
const arr = []
const saveData = localStorage.setItem('goal', typeData)

function showGoal(){
  const typeData = document.getElementById('typeGoal').value
  arr.push(typeData)
  document.getElementById('showData').innerText = arr
}

function delData(){
  arr.length = 0
  document.getElementById('showData').innerText = arr
}
