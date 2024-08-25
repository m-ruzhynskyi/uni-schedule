import schedule from 'https://66cb81324290b1c4f19a82c8.mockapi.io/schedule' with {type: 'json'};
import getWeek from './getWeek.js'
import addSubject from "./addSubject.js";

import './toCapitalize.js'

const firstWeek = document.querySelector('.main__week--first')
const secondWeek = document.querySelector('.main__week--second')
const changeWeekButton = document.querySelector('.main__button')
const weekNow = getWeek()

function setByWeek(week) {
  if (week) {
    changeWeekButton.innerHTML = `1 week <svg class="main__button__svg" xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24">
      <path d="m5 12 7 6v-5h6v-2h-6V6z"/>
    </svg>`
    changeWeekButton.classList.add('main__button--secondWeekNext')
    changeWeekButton.classList.remove('main__button--firstWeekNext')
  } else {
    changeWeekButton.innerHTML = `2 week <svg class="main__button__svg" xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24">
      <path d="m5 12 7 6v-5h6v-2h-6V6z"/>
    </svg>`
    changeWeekButton.classList.add('main__button--firstWeekNext')
    changeWeekButton.classList.remove('main__button--secondWeekNext')
  }

  if (week) {
    firstWeek.classList.remove('hide')
    secondWeek.classList.add('hide')
  } else {
    secondWeek.classList.remove('hide')
    firstWeek.classList.add('hide')
  }
}

function loadSchedule() {
  for (let week = 0; week < 2; week++) {
    const currentWeek = schedule[week]

    const weekSchedule = Object.keys(currentWeek).map(day => {
      const dayDiv = document.createElement("div")
      dayDiv.classList.add('day')

      const header = document.createElement("header")
      header.innerText = day.toCapitalize()
      header.classList.add('day__header')
      dayDiv.append(header)

      const main = document.createElement("main")
      main.classList.add('day__schedule')
      dayDiv.append(main)

      currentWeek[day].forEach(item => main.append(addSubject(item)))

      return dayDiv
    })

    week ? firstWeek.append(...weekSchedule) : secondWeek.append(...weekSchedule)
  }

  setByWeek(weekNow)
}


document.addEventListener("DOMContentLoaded", loadSchedule)

changeWeekButton.addEventListener('click', () => {
  if (changeWeekButton.classList.contains('main__button--firstWeekNext')) {
    setByWeek(true)
  } else setByWeek(false)
})