import React from 'react';

const Menu = ({foods}) => {
  return (
    <div className='section-center'>
      {
        foods.map((food)=>{
          const {id,title,price,img,desc} = food 
          return (
            <article key={id} className="menu-item">
              <img src={img} className='photo'/>
              <div className='item-info'>
                <header>
                  <h4>{title}</h4>
                  <h4 className='price'>{price}$</h4>
                </header>
                <p className='item-text'>{desc}</p>
                </div>
            </article>
            )})
      }
    
    </div>
  );
};

export default Menu;
