import React,{useState} from 'react';
import '../../App.css';



const Ingredient = (props)=> {

    const {ingredients}=props;
    const [show,setShow]=useState(false)
   return (
        <>
         <button type="button" className="btn btn-success  font-weight-bold" onClick={() => setShow(!show)} >Ingredient</button>  
            {show &&<div>
                  {
                     ingredients.map(ingredient => {
                        return( 
                           <ul key={2} class="list-group ">
                              <li class="list-group-item bg-primary">{ingredient} </li>
                           </ul>
                        ) 
                        })                                
               }   
            </div>}
      </>
   );
}
export default Ingredient;