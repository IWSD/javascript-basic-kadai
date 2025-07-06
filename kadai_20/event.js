const btnText = document.getElementById('text')
const btnClick = document.getElementById('btn')


btnClick.addEventListener('click', () => { 
  btnText.innerHTML = '<h2 id="text">ボタンをクリックしました</h2>'
}

)