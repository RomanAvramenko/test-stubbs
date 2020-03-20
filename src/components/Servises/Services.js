import React from 'react'
import { tileItems } from './tileItems'
import './Services.scss'

export const Services = () => {
  return (
    <div className="services">
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
