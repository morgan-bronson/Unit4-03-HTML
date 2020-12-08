'use strict'

document.getElementById('mybtn').addEventListener('click', displayDate)

function displayDate () {
  document.getElementById('demo').innerHTML = Date()
  alert('Event Date!')
}
