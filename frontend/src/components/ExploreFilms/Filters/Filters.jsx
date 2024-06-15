import React from 'react'
import './Filters.css'
import { genre_list } from '../../../assets/genre'

const Filters = ({category, setCategory}) => {
  return (
    <div className='filters'>
      <div className="genre-list">
        {genre_list.map((item, index) => {
          return (
            <div onClick={() => setCategory(prev => prev===item.Genre_name?"All":item.Genre_name)} key={index} className="genre-list-item">
              <li className={category===item.Genre_name?"active":""}>{item.Genre_name}</li>
            </div>
          ) 
        })}
      </div>
    </div>
  )
}

export default Filters
