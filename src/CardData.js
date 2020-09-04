import broccoli from './images/slide_broccoli.jpg';
import cake from './images/slide_cake.jpg';
import tandoori from './images/tandoori.jpg';
import PomfretMasala from './images/PomfretMasala.jpg';
import {NavLink } from 'react-router-dom';
import React from 'react'

const CardData = [
    {
        imgsrc :broccoli,
        recipe :"Broccoli",
        createdBy: "chef Kaustub",
        imgclick:<NavLink className="nav-link font-weight-bold navi"  to={"/search"}>Ingredient</NavLink>,
    },
    {
        imgsrc: PomfretMasala,
        recipe : "Pomfret-Masala",
        createdBy: "chef Ronald",
        imgclick:<NavLink className="nav-link font-weight-bold navi"  to={"/search"}>Ingredient</NavLink>,
        
    },
    {
        imgsrc : tandoori,
        recipe : "Mathi",
        createdBy: "chef Srinivas",
        imgclick:<NavLink className="nav-link font-weight-bold navi"  to={"/search"}>Ingredient</NavLink>,
       
    },
    {
        imgsrc :cake,
        recipe :"Milk-Pudding",
        createdBy:"chef Shobha",
        imgclick:<NavLink className="nav-link font-weight-bold navi"  to={"/search"}>Ingregient</NavLink>,
        
    }
 ];

 
 

 export default CardData;
 
