import React from 'react';
import '../../App.css';



const Cards =(props) => {
    const {imgsrc,recipe,createdBy,img}= props;
       
    return(        
            <>   
         
            <div className="col-sm-5 col-md-4 col-lg-3">
                <div className="card bg-light  mb-5 rcorners">
                    <img src={imgsrc}  class="card-img-top img" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{recipe}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">By-{createdBy}</h6>
                  
                            <button type="button" className="btn btn-success btn-block font-weight-bold" >{img}</button>
                        </div>
                </div>
            </div>
                        
                    
            </>           
    );
}

export default Cards;