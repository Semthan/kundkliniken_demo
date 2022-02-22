document.addEventListener("DOMContentLoaded", function () {

  let togBtn = document.getElementById('toggle_btn')
  let hamBtn = document.getElementById('ham_btn')
  let closeBtn = document.getElementById('close_btn')
  let mainDropNav = document.getElementById('main_drop_nav')

  let closed = true

  togBtn.addEventListener('click', function () {
    if (closed) {
      hamBtn.classList.add('hidden')
      closeBtn.classList.remove('hidden')
      mainDropNav.classList.remove('hidden')
      closed = false
    } else {
      hamBtn.classList.remove('hidden')
      closeBtn.classList.add('hidden')
      mainDropNav.classList.add('hidden')
      closed = true
    }
  })
})