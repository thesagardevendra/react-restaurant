import React, { useState } from 'react';
import MenuCard from './MenuCard';
import Menu from './Menu.js';

const Restaurant = () => {
  const [menuData, setmenuData] = useState(Menu);
  const filterItem=(category)=>{
      const updatedList=Menu.filter((curEle)=>{
        return curEle.category===category;
      });
      setmenuData(updatedList);
  }
    return (
        <div>
            <nav>
                <button onClick={()=>filterItem("breakfast")}>Breakfast</button>
                <button onClick={()=>filterItem("lunch")}>Lunch</button>
                <button onClick={()=>filterItem("dinner")}>Dinner</button>
                <button onClick={()=>filterItem("evening")}>Evening</button>
                <button onClick={()=>{setmenuData(Menu)}}>All</button>

                </nav>
       <MenuCard menuData={menuData}/>
          
        </div>
    )
}

export default Restaurant;
