import React from 'react'
import './Footer.scss'

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__menus">
          <div className="footer__menus__about">
            <h3 className="footer__menus__title">О компании</h3>
            <ul className="footer__menus__list">
              <li>Наши работы</li>
              <li>Контакты</li>
              <li>Доставка</li>
              <li>Форма заказа</li>
            </ul>
          </div>
          <div className="footer__menus__services">
            <h3 className="footer__menus__title">Услуги</h3>
            <ul className="footer__menus__list">
              <li>Производство оборудования</li>
              <li>Арт-объекты</li>
              <li>Металлическая мебель</li>
              <li>Металлообработка</li>
              <li>Лазерная резка</li>
              <li>Металлоконструкции</li>
              <li>Аренда спецтехники</li>
            </ul>
          </div>
        </div>
        <div className="footer__contacts">
          <h3 className="footer__contacts__title">
            Контактная информация</h3>
          <p>Заводская улица, 2 В, Буча, <br />
        Киевская область, 08292</p>
          <p>ПН - ПТ: 09:00 - 18:00</p>
          <p>+38(097)123-45-67</p>
          <div className="footer__contacts__social">
            <div className="footer__contacts__social_fb" />
            <div className="footer__contacts__social_insta" />
            <div className="footer__contacts__social_youtube" />
          </div>
        </div>
      </div>
      <div className="footer__developed">Developed by <br /> Stubbs</div>
    </>
  )
}