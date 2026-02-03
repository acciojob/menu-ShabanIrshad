import React from 'react';

const Menu=({data})=>{
    const {dishArray,setDishArray}=data;
    // console.log(dishArray);
    const cat=dishArray.map((dish)=>dish.category);
    const categoryData=new Set([...cat]);
    const category=[...categoryData];

    const handleDish=(dish)=>{
        console.log(dish);
        console.log(dishArray);
        const arr=dishArray.filter( (item) => item.category === dish);
        setDishArray([...arr]);
        // console.log(arr);
    }
    return (
        <>
        <h1 className='heading'>Our Menu</h1>
        <hr className='underline'></hr>
        <div className='dish-category'>
            <button id='filter-btn-1' onClick={()=>handleDish('breakfast')}>Breakfast</button>
            <button id='filter-btn-2' onClick={()=>handleDish('lunch')}>Lunch</button>
            <button id='filter-btn-3' onClick={()=>handleDish('shakes')}>Shakes</button>
        </div>
        <div className='dish-items'>
            {dishArray.map((dish,index)=>
                <div key={index} className='dish-item'>
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