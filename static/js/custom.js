// Get Year - Home

const my_age = document.getElementsByClassName('my_age')
const date = new Date()
const age = date.getFullYear() - 1988
my_age[0].innerHTML = age