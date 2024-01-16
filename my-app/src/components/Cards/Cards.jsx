import React, { useContext } from 'react'
import "./Cards.scss"
import MainContext from '../../context/context'
import Card from '../Card/Card'
const Cards = () => {
    const {filter,handleFilter,seacrhHandlerr}=useContext(MainContext)
  return (
    <div className='cards'>
      
      <div className='ca'>
            <div><p>OUR MENU</p>
            <h2>Discover Our Exclusive Menu</h2>
                </div>
                <div className='inb'>
                    <button  onClick={(e)=>{
                handleFilter(e.target.value)
            }}  class="setting-btn">
  <span class="bar bar1"></span>
  <span class="bar bar2"></span>
  <span class="bar bar1"></span>
  Sort
</button>
<input onChange={(e)=>{
    seacrhHandlerr(e.target.value)
}} type="text" placeholder="Search menu..." name="text" class="inputt"/>
                </div>
            
            
        </div>

        <div className='chil'>
        { filter.map((item,index)=>(
            <Card key={index} item={item} />
         ))}
        </div>

    </div>
  )
}

export default Cards