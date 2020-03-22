import React, { useState } from 'react'
import Dropdown from 'react-dropdown';
import "./Header.scss"

export const Header = () => {
  const [menu, setMenu] = useState(false)
  const [input, setInput] = useState(false)

  const cls = !menu ? "header__menu__button" : "header__menu__button_active"
  const list = !menu ? "header__menu__list" : "header__menu__list_active"
  const inputCls = input ? "header__search__input_active" : "header__search__input"
  const inputBtn = input ? "header__search__button_active" : "header__search__button"


  const { matches } = window.matchMedia('(min-width: 1200px)')

  const toggleMenu = (e) => {
    e.stopPropagation()
    setMenu(!menu)
  }

  const toggleInput = (e) => {
    setInput(!input)
    e.stopPropagation()
  }



  const langRenderMob =
    <div className="header__lang">
      <div className="header__lang_ru selected"></div>
      <div className="header__lang_en"></div>
      <div className="header__lang_ua"></div>
    </div>

  const options = [
    { value: '1', className: 'header__lang_ru' },
    { value: '2', className: 'header__lang_ua' },
    { value: '3', className: 'header__lang_en' }
  ];



  const langRenderDesk =
    <Dropdown
      className="header__lang"
      options={options}
      arrowClosed={<span className="arrow-closed" />}
      arrowOpen={<span className="arrow-open" />}
      placeholder=""
      value={options[0]}
      menuClassName='dropdown_menu'
      controlClassName={options[1].className}
    />

  return (
    <div className="header">
      <div className="header__logo" />
      <div className={list}>
        <ul className="header__menu__list_items">
          <li>Главная{!matches && langRenderMob}</li>
          <li>Услуги</li>
          <li>Наши работы</li>
          <li>О нас</li>
          <li>Контакты</li>
        </ul>
      </div>
      <div className="header__nav">
        <div className="header__search" onClick={toggleInput} >
          <input className={inputCls} type="text" placeholder="Поиск" />
          <div className={inputBtn} />
        </div>
        <div className="header__menu" onClick={toggleMenu}>
          <div className={cls} />
        </div>
      </div>
      {matches && langRenderDesk}
    </div>
  )
}
