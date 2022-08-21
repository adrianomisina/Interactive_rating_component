const submitBtn = document.querySelector('#submitBtn')
const tksCard = document.querySelector('.card')
const form = document.querySelector('.form')

submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const inputChecked = document.querySelector("input[name='radio']:checked + span").textContent
  tksCard.classList.add('tks-active')
  form.classList.add('form-none')
  const element = document.querySelector(".userValue");
  element.innerHTML=inputChecked
})

