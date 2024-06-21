import React from 'react'
import {data} from '../restApi.json';

const Menu = () => {
  return (
    <section className='menu' >
        <div className="container">
            <div className="heading_section">
                <h1 className='heading'>POPULAR DISHES</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa earum non iste quibusdam distinctio vero, natus accusantium dolorem porro impedit?</p>
            </div>
            <div className="dishes_container" id='menu'>
                {
                    data[0].dishes.map(element=>(
                        <div className="card" key={element.id}>
                            <img src={element.image} alt="" />
                            <h3>{element.title}</h3>
                            <button>{element.category}</button>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Menu