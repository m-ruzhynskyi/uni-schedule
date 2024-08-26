import schedule from 'https://66cb81324290b1c4f19a82c8.mockapi.io/schedule' with {type: 'json'};
import getWeek from './getWeek.js'
import addSubject from "./addSubject.js";

import './toCapitalize.js'

const firstWeek = document.querySelector('.main__week--first')
const secondWeek = document.querySelector('.main__week--second')
const changeWeekButton = document.querySelector('.button__container')
const button = document.querySelector('.button__container__button')
const buttonWrapper = document.querySelector('.button__wrapper')
const weekNow = getWeek()

function setByWeek(week) {
  if (week) {
    button.innerText = `1 week`
    buttonWrapper.style.justifyContent = ''
    changeWeekButton.dataset.nextWeek = '2'
  } else {
    button.innerText = `2 week`
    buttonWrapper.style.justifyContent = 'flex-end'
    changeWeekButton.dataset.nextWeek = '1'
  }

  if (week) {
    secondWeek.classList.remove('hide')
    firstWeek.classList.add('hide')
  } else {
    firstWeek.classList.remove('hide')
    secondWeek.classList.add('hide')
  }
}

function loadSchedule() {
  setByWeek(weekNow)

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

    week ? secondWeek.append(...weekSchedule) : firstWeek.append(...weekSchedule)
  }
}


document.addEventListener("DOMContentLoaded", loadSchedule)

changeWeekButton.addEventListener('click', () => {
  if (changeWeekButton.dataset.nextWeek === '2') {
    setByWeek(false)
  } else setByWeek(true)
})