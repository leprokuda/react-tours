import React, { useState } from 'react';
import { Tag, Button } from 'antd';
import "antd/dist/antd.css";


import './cardV.css'
import {ReactComponent as Clock} from "../../assets/img/clock.svg";
import {ReactComponent as Mark} from "../../assets/img/mark.svg";
import {ReactComponent as Currency} from "../../assets/img/currency.svg";


const { CheckableTag } = Tag;
const tagsData = ['12:00', '13:00', '14:00', '15:00'];
const alt = 'Saint-Petersburg`s Tour'

const CardV = (props) => {
  const [selectedTags, setSelectedTags] = useState(['Time']);
  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  }
  return (
    <article className="card">
      <div style={props.style} className="card__img">
        <img style={props.style} src={props.img} alt={alt}/>
      </div>
      <div className="card__body">
        <div className="card__time">
          <Clock className="card__time-icon"/>
          <small className="card__hours">2 часа</small>
        </div>
        <h2 className="card__title">АКЦИЯ - Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019</h2>
        <ul className="card__list">
          <li>
            <Mark className="card__item-icon"/>
            <p>Билет на целый день</p>
          </li>
          <li>
            <Mark className="card__item-icon"/>
            <p>Неограниченное число катаний</p>
          </li>
          <li>
            <Mark className="card__item-icon"/>
            <p>6 остановок у главных достопримечательностей</p>
          </li>
          <li>
            <Mark className="card__item-icon"/>
            <p>Ближайший рейс сегодня</p>
          </li>
        </ul>
        <div className="card__tag">
          {tagsData.map((tag) => (
            <CheckableTag
              key={tag}
              checked={selectedTags.indexOf(tag) > -1}
              onChange={(checked) => handleChange(tag, checked)}
            >
              {tag}
            </CheckableTag>
          ))}
        </div>
        <div className="card__footer">
          <div className="card__price">
            <div className="card__price-1">
              <h5>900</h5>
              <Currency className="currency-icon"/>
            </div>
            <small className="card__price-2">1200 р на причале</small>
          </div>
          <Button type="primary">Подробнее</Button>
        </div>
      </div>
    </article>
  )
}

export default CardV