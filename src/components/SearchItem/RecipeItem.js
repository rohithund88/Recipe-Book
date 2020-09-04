import React from 'react';
import '../../App.css';

const recipeItem = (props)=> {
    const {search,onInputChange,onsearchClick}=props;
    return (
     <div className="container-fluid nav_bg mt-5 martop">
          <div className="row">
            <div className="col-10 mx-auto">
                <div className="jumbotron searchbar">
                    <h5 className="display-1  text-center searchbar">Search Recipe</h5>
                    <div className="input-group w-50 mx-auto">
                    <input type="text" className="form-control" placeholder="find Your Recipe"  
                    value={search}
                    onChange={onInputChange}/>
                    <div className="input-group-append">
                        <butoon className="btn btn-dark" onClick={onsearchClick}>Search</butoon>
                    </div>
                </div>
                </div>
               
                
            </div>
                
            </div>
        </div>
);
}
export default recipeItem;