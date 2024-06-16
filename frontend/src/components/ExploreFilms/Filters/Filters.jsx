import React from 'react'
import './Filters.css'
import { genre_list } from '../../../assets/genre'

const Filters = ({category, setCategory}) => {
  return (
    <div className='filters'>
      <div className="genre-list">
        {genre_list.map((item, index) => {
          return (
            <div onClick={() => setCategory(prev => prev===item.Name?"All":item.Name)} key={index} className="genre-list-item">
              <li className={category===item.Name?"active":""}>{item.Name}</li>
            </div>
          ) 
        })}
      </div>
    </div>
  )
}

export default Filters
