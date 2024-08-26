import schedule from 'https://66cb81324290b1c4f19a82c8.mockapi.io/schedule' with {type: 'json'};
import getWeek from './getWeek.js'
import addSubject from "./addSubject.js";

import './toCapitalize.js'

const firstWeek = document.querySelector('.main__week--first')
const secondWeek = document.querySelector('.main__week--second')
const changeWeekButton = document.querySelector('.button__container')
const button = document.querySelector('.button__container__button')
const buttonWrapper = document.querySelector('.button__wrapper')
const svgArrow = document.querySelector('.button__container__button__svg')
const loader = document.querySelector('.loader__wrapper')
const main = document.querySelector('.main')
const weekNow = getWeek()

function setByWeek(week) {
  if (week) {
    const p = document.createElement('p')
    p.innerText = `1 week`
    p.classList.add('button__container__button__text')
    button.prepend(p)
    buttonWrapper.style.justifyContent = ''
    svgArrow.classList.remove('secondWeekNext')
    changeWeekButton.dataset.nextWeek = '2'
  } else {
    const p = document.createElement('p')
    p.innerText = `2 week`
    p.classList.add('button__container__button__text')
    button.prepend(p)
    buttonWrapper.style.justifyContent = 'flex-end'
    svgArrow.classList.add('secondWeekNext')
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
  main.classList.add('hide')
  button.innerHTML = `<svg class="button__container__button__svg" xmlns="http://www.w3.org/2000/svg" fill="#000000"
             viewBox="0 0 38 26">
          <path d="m5 12 7 6v-5h6v-2h-6V6z"/>
        </svg>`
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

  if (loader) {
    loader.classList.add('hide')
    main.classList.remove('hide')
  }
}


document.addEventListener("DOMContentLoaded", loadSchedule)

changeWeekButton.addEventListener('click', () => {
  if (changeWeekButton.dataset.nextWeek === '2') {
    setByWeek(false)
  } else setByWeek(true)
})