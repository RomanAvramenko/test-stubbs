import React from 'react'
import Slider from 'infinite-react-carousel'
import './Carousel.scss'

export const Carousel = () => {
  return (
    <Slider
      dots
      arrows={false}
      //autoplay={true}
      className="carousel"
      dotsClass="carousel__dots"
    >
      <div className="carousel__slide_1">
        <p>Высокоточное изготовление
          <br />
        изделий из металла по чертежам</p>
      </div>
      <div className="carousel__slide_2">

      </div>
      <div className="carousel__slide_3">

      </div>
      <div className="carousel__slide_4">

      </div>
    </Slider>
  )
}
