import React, { useState } from 'react'
import "./Header.scss"

export const Header = () => {
  const [menu, setMenu] = useState(false)
  const [input, setInput] = useState(false)
  const cls = !menu ? "header__nav__menu__button" : "header__nav__menu__button_active"
  const list = !menu ? "header__nav__menu__list" : "header__nav__menu__list_active"
  const inputCls = !input ? "header__nav__input_active" : "header__nav__input"

  const toggleMenu = (e) => {
    e.stopPropagation()
    setMenu(!menu)
  }

  const toggleInput = (e) => {
    setInput(!input)
    e.stopPropagation()
  }

  return (
    <div className="header">
      <div className="header__logo" />
      <div className="header__nav">
        <div className="header__nav__wrapper">
          <input className={inputCls} type="text" placeholder="Поиск" />
          <div className="header__nav__search" onClick={toggleInput} />
        </div>
        <div className="header__nav__menu" onClick={toggleMenu}>
          <div className={cls} />
        </div>
        <div className={list}>
          <ul className="header__nav__menu__list_items">
            <li className="header__nav__menu__list_title">
              <div>Меню</div>
              <div className="header__nav__menu__list_lang">
                <div className="header__nav__menu__list_lang_ru toggled" />
                <div className="header__nav__menu__list_lang_ua" />
                <div className="header__nav__menu__list_lang_en" />
              </div>
            </li>
            <li>Услуги</li>
            <li>Наши работы</li>
            <li>О нас</li>
            <li>Контакты</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
