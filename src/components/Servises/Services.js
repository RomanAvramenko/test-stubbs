import React from 'react'
import { tileItems } from './tileItems'
import './Services.scss'

export const Services = () => {
  return (
    <div className="services">
      <h1 className="services__header">Услуги</h1>
      <ul className="services__tile">
        {tileItems.map(item => {
          return (
            <li className="services__tile__item">
              <div
                className="services__tile__item_img"
                style={{ backgroundImage: `url(${item.image})` }} />
              <p className="services__tile__item_title">{item.title}</p>
            </li>
          )
        })}
      </ul>
      <input className="services__button" type="button" value="Расчет стоимости" />
    </div>
  )
}
