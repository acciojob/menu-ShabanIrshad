import React, { useState } from 'react';
import Menu from './Menu';
// import '../styles/styles.css';

const App=()=>{
    const dishesh=[
        {
            name:'Halwa Puri',
            category:'Breakfast',
            image:'https://www.tasteatlas.com/images/dishes/a115b8b6115f4ea580599eb24a369408.jpg',
            price:1299,
            desc:'atest Hindi Video Song of 2019 "Kithe Reh Gaya" ,In the voice of "Neeti Mohan", composed by "" and the lyrics of this new song are penned by " Kumaar ". Enjoy and stay connected with us'
        },
        {
            name:'Dal Makhni',
            category:'Lunch',
            image:'https://www.sharmispassions.com/wp-content/uploads/2012/05/dal-makhani7.jpg',
            price:999,
            desc:'atest Hindi Video Song of 2019 "Kithe Reh Gaya" ,In the voice of "Neeti Mohan", composed by "" and the lyrics of this new song are penned by " Kumaar ". Enjoy and stay connected with us'
        },
        {
            name:'Lassi Punjabi',
            category:'Shakes',
            image:'https://www.sharmispassions.com/wp-content/uploads/2023/08/sweet-lassi3.jpg',
            price:499,
            desc:'atest Hindi Video Song of 2019 "Kithe Reh Gaya" ,In the voice of "Neeti Mohan", composed by "" and the lyrics of this new song are penned by " Kumaar ". Enjoy and stay connected with us'
        },
        {
            name:'Aloo Paratha',
            category:'Breakfast',
            image:'https://i0.wp.com/smithakalluraya.com/wp-content/uploads/2015/02/image.1024x1024-95.jpg?resize=720%2C972&ssl=1',
            price:599,
            desc:'atest Hindi Video Song of 2019 "Kithe Reh Gaya" ,In the voice of "Neeti Mohan", composed by "" and the lyrics of this new song are penned by " Kumaar ". Enjoy and stay connected with us'
        },
        {
            name:'Chicken 65',
            category:'Lunch',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaULrDzejMQMqWTNqOPk1SmuBZ2Q_8C9jmAw&s',
            price:1500,
            desc:'atest Hindi Video Song of 2019 "Kithe Reh Gaya" ,In the voice of "Neeti Mohan", composed by "" and the lyrics of this new song are penned by " Kumaar ". Enjoy and stay connected with us'
        },
        {
            name:'Mojito Continental',
            category:'Shakes',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ2A7qow7FdQkM3jcINiNG9vNvIuJyY01Ovg&s',
            price:299,
            desc:'atest Hindi Video Song of 2019 "Kithe Reh Gaya" ,In the voice of "Neeti Mohan", composed by "" and the lyrics of this new song are penned by " Kumaar ". Enjoy and stay connected with us'
        },
        {
            name:'Dum Aloo',
            category:'Lunch',
            image:'https://myspicetrunk.com/wp-content/uploads/2021/04/20210410_1838302-e1618165098812.jpg?v=1618099124',
            price:1200,
            desc:'atest Hindi Video Song of 2019 "Kithe Reh Gaya" ,In the voice of "Neeti Mohan", composed by "" and the lyrics of this new song are penned by " Kumaar ". Enjoy and stay connected with us'
        }
    ]
    const [dishArray,setDishArray]=useState([...dishesh]);
    // console.log(dishesh);
    return (
        <>
        <div id='main'>
            <Menu data={{dishArray,setDishArray}}/>
        </div>
        </>
    );
}
export default App;