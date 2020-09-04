import React from 'react';
import Hero from '../../components/Hero/Hero';
import Sliders from '../../components/Sliders/Sliders';
import RecipeDisplay from '../../components/RecipeDisplay/RecipeDisplay';

const Home =()=>{
    
    const head = { name : "RECIPES OF THE DAY", 
                  desc:"Check out our featured recipe for today! This recipe is the most popular and trendy recipe that you’d definitely want to give a try!",
                };
    const head2 = { name : "MOST VIWED & TRENDY RECIPES", 
                desc:"Most viwed nad Trendy featured recipes! This recipe is the most popular and trendy recipe that mostly viewd give a try!",
              };
    return(
        <div>
            <div>
                <Hero/>
            </div>
            <div>
                <Sliders/>
            </div>
            <div>
                <div>
                     <RecipeDisplay title={head.name} desc={head.desc} />
                </div>
               <div className="mt-1">
                    <RecipeDisplay title={head2.name} desc={head2.desc} />   
               </div>
               
            </div>
        </div>
    );
};

export default Home;