function displayNav() {
  document.body.getElementsByClassName('header-not-visible')[0].style.display = 'none'
  document.body.getElementsByClassName('mobile-menu')[0].style.display = 'block'
}

function closeNav(){
  document.body.getElementsByClassName('header-not-visible')[0].style.display = 'flex'
  document.body.getElementsByClassName('mobile-menu')[0].style.display = 'none'
}