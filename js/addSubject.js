export default function (item) {
  const dayItem = document.createElement("div")
  dayItem.classList.add('day__item')
  if (item.color) dayItem.style.color = 'red'

  const divTime = document.createElement('div')
  const timeWrapper = document.createElement('div')
  divTime.classList.add('day__time-period')
  timeWrapper.classList.add('day__wrapper')
  timeWrapper.append(divTime)
  dayItem.append(timeWrapper)

  const timeDivider = document.createElement('div')
  timeDivider.classList.add('divider')

  const time = document.createElement("p")
  time.classList.add("day__time")
  time.innerText = item.time
  divTime.append(time)

  if (item.to || item.once) {
    const period = document.createElement("p")
    period.classList.add('day__period')
    period.innerText = item.once ? `(${item.once})` : `(to ${item.to})`
    divTime.append(period)
  }
  timeWrapper.append(timeDivider)

  const divDetail = document.createElement("div")
  const detailWrapper = document.createElement("div")
  const detailDivider = document.createElement('div')
  detailDivider.classList.add('divider')
  divDetail.classList.add("day__details")
  detailWrapper.classList.add("day__wrapper")
  detailWrapper.append(divDetail)
  dayItem.append(detailWrapper)

  const subject = document.createElement("p")
  subject.classList.add('day__subject')
  subject.innerText = item.name
  divDetail.append(subject)

  const prof = document.createElement("p")
  prof.classList.add('day__prof')
  prof.innerText = item.prof
  divDetail.append(prof)
  detailWrapper.append(detailDivider)

  const divCabs = document.createElement("div")
  const cabsDivider = document.createElement('div')
  cabsDivider.classList.add('divider')
  divCabs.classList.add('day-cabs')
  dayItem.append(divCabs)

  const cab = document.createElement("p")
  cab.classList.add('day__cab')
  cab.innerText = item.cabinet
  divCabs.append(cab)

  if (item.optCabinet) {
    const optCabinet = document.createElement("p")
    optCabinet.classList.add('day__cab')
    optCabinet.innerText = `(${item.optCabinet})`
    divCabs.append(optCabinet)
  }
  divCabs.append(cabsDivider)


  const type = document.createElement("p")
  type.classList.add('day__prof')
  type.innerText = item.type
  dayItem.append(type)

  return dayItem
}