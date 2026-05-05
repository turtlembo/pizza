import React, { useState } from 'react'

const Categories = () => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
  const [active,setActive] = useState(0)
  return (
    <div>
      <div className="categories">
              <ul>
                {
                  categories.map((categorie, ind)=>(
                    <li key={ind} onClick={()=>setActive(ind)} className={ind == active? 'active': ''}>{categorie}</li>
                  ))
                }
              </ul>
        </div>
    </div>
  )
}

export default Categories
