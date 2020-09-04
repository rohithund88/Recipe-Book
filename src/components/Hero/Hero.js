import React from 'react';
import heroimg from '../../images/hero.jpg';
import '../../App.css';


const hero = ()=>{
    return(
       
            <div className="container martop ">
                <div className="row " >
                    <div className="col "> 
                    
                            <div className="mt-5">
                                <img src={heroimg} className="img-fluid hero  w-100  " alt="{heroimg}" />
                            </div>
                       </div> 
                </div>
                
             </div>
       
        
    );

}

export default hero;