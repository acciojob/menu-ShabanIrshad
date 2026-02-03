import React, { useState } from 'react';

const Menu=({data})=>{
    const {dishArray,setDishArray}=data;
    const [dishesh,setDishesh]=useState([...dishArray]);
    // console.log(dishArray);
    const cat=dishArray.map((dish)=>dish.category);
    const categoryData=new Set([...cat]);
    const category=[...categoryData];

    const handleDish=(dish)=>{
        console.log(dish);
        console.log(dishArray);
        const arr=dishArray.filter( (item) => item.category === dish);
        console.log(arr);
        setDishesh([...arr]);
        // console.log(arr);
    }
    const change=(str)=>{
        return (str.charAt(0).toLowerCase()+str.slice(1,str.length));
    }
    // change('Mohd');
    return (
        <>
        <h1 className='heading'>Our Menu</h1>
        <hr className='underline'></hr>
        <div className='dish-category'>
            <button id='filter-btn-1' onClick={()=>handleDish('Breakfast')}>Breakfast</button>
            <button id='filter-btn-2' onClick={()=>handleDish('Lunch')}>Lunch</button>
            <button id='filter-btn-3' onClick={()=>handleDish('Shakes')}>Shakes</button>
        </div>
        <div className='dish-items'>
            {dishesh.map((dish,index)=>
                <div key={index} data-test-id={`menu-item-${change(dish.category)}`} className='dish-item'>
                    <img src={dish.image} alt='image'/>
                    <div>
                        <h4>{dish.name}</h4>
                        <b><small>{dish.price}</small></b>
                        <hr></hr>
                        <p>{dish.desc}</p>
                    </div>    
                </div>
            )}

        </div>
        

        </>
    );
}
export default Menu;