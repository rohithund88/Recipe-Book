import React from 'react';
import '../../App.css';
import CardData from '../../CardData';
import Cards from '../Cards/Cards';



const RecipeDisplay =(props) => {
    const {title,desc}= props;
    
   
    return(
        <>
       
        <div className="container-fluid nav_bg mt-5">
             <div className="row">
                <div className="col-10 mx-auto">
                    <div className="mt-3">
                         <h2 className="text-left">{title}</h2>
                         <p>{desc}</p>
                    </div>
                </div>
              </div>    
        </div>
                    <div className="container-fluid nav_bg mt-4">
                        <div className="row">
                            <div className="col-10 mx-auto">     
                                <div className="row">   
                                {
                                CardData.map((data,idx)=>{
                                        return <Cards
                                            key={idx}
                                            imgsrc={data.imgsrc}
                                            recipe={data.recipe}
                                            createdBy={data.createdBy}
                                            img={data.imgclick}
                                            
                                        />
                                    })
                                }
                            </div> 
                        </div> 
                    </div> 
                    </div>              
     
    
           
          
       </>           
    );
}

export default RecipeDisplay;