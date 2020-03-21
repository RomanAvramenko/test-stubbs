import React, { useEffect } from 'react'
import { tileItems } from './tileItems'
import './Services.scss'
import { useState } from 'react'

export const Services = () => {

  const [degree, setDegree] = useState(0)
  const trackScrolling = (e) => {
    const deg = Math.floor(e.path[1].scrollY / 5)
    return setDegree(deg)
  }

  useEffect(() => {
    document.addEventListener('scroll', trackScrolling);
    return (() => document.removeEventListener('scroll', trackScrolling))
  }, [])

  return (
    <div className="services">
      <div className="services__gears left">
        <div className="gear">
          <div className="gear_1" style={{ transform: `rotate(${degree}deg)` }} />
          <div className="gear_2" style={{ transform: `rotate(${degree}deg)` }} />
          <div className="gear_3" style={{ transform: `rotate(${degree}deg)` }} />
        </div>
      </div>
      <div className="services__gears right">
        <div className="gear">
          <div className="gear_1" style={{ transform: `rotate(${degree}deg)` }} />
          <div className="gear_2" style={{ transform: `rotate(${degree}deg)` }} />
          <div className="gear_3" style={{ transform: `rotate(${degree}deg)` }} />
        </div>
      </div>
      <h1 className="services__header">Услуги</h1>
      <ul className="services__tile">
        {tileItems.map((item, index) => {
          const { matches } = window.matchMedia('(min-width: 769px)')
          const image = matches ? item.imageDesk : item.image
          return (
            <li
              className="services__tile__item"
              key={index}
              style={{ backgroundImage: `url(${image})` }} >
              <p className="services__tile__item_title">{item.title}</p>
            </li>
          )
        })}
      </ul>
      <input className="services__button" type="button" value="Быстрый расчет цены по чертежу" />
    </div>
  )
}
