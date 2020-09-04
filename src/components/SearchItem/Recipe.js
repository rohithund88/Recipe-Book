import React from 'react';
import Ingredient from './Ingredient'

const recipe = (props)=> {
    const {recipes}=props;
    return(
        <div>
         <div className="container-fluid nav_bg mt-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                        {recipes.map(recipe =>(
                            <div className="col-sm-5 col-md-4 col-lg-3">
                            
                                <div className="card mb-5 rcorners">
                                    <img src={recipe.recipe.image} className="img-fluid img" alt={recipe.recipe.image}/>
                                    <div className="card-body cwidth">
                                        <h5>{recipe.recipe.label}</h5>
                                    </div>
                                    <Ingredient ingredients={recipe.recipe.ingredientLines}/> 
                                </div>
                            </div>
                        

                        ))
                        }
                       
              </div>
             </div>
          </div>
          </div>
    </div>
    );

};
export default recipe;