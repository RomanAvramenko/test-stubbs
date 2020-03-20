import React from 'react'
import './Company.scss'

export const Company = () => {
  return (
    <div className="company">
      <h1 className="company__header">Наша компания</h1>
      <div className="company__about">
        <div className="company__about__description">
          <h1 className="company__about__description_title" >
            Почему мы?
        </h1>
          <p className="company__about__description_text">
            Люди – профессионалы с большим опытом
            работы. Полный спектр работ по
            металлообработке в одном месте –
            комплексный индивидуальный подход.
            Конструкторский отдел. Логистика.
            Многолетний опыт машиностроения –
            создание промышленного
        </p>
        </div>
      </div>
      <div className="company__prefer">
        <div className="company__prefer__description">
          <h1 className="company__prefer__description_title" >
            Наши преимущества
        </h1>
          <p className="company__prefer__description_text">
            Люди – профессионалы с большим опытом
            работы. Полный спектр работ по
            металлообработке в одном месте –
            комплексный индивидуальный подход.
            Конструкторский отдел. Логистика.
            Многолетний опыт машиностроения –
            создание промышленного
        </p>
        </div>
      </div>
    </div>
  )
}
