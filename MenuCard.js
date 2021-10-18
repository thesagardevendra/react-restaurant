import React from 'react';
import "./style.css";
import allupakoida from "./allupakoida.jpg"

const MenuCard = ({menuData}) => {
   
    return (
        <>
        <div className="main-card">
            {menuData.map((curEle)=>{
return(
    <div className="card" key="curEle.id">
    <span>{curEle.id}</span>
    <span>{curEle.name}</span>
    <span>Welcome, Complete React JS Tutorial for Beginners In Hindi In 2021. Learn Complete React with 5 Projects from Basic to Advanced in Hindi in 2021. Best is ReactJS Tutorial source code is Free. 
    </span>
    <img src={curEle.image} className="image" />
    <h4>{curEle.price}</h4>
   <button>Order Now</button>
 </div>
)
            })}
      
        </div>
        
        </>
       
    )
}

export default MenuCard
