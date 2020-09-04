import React from 'react';


const About =(props)=> {
    const {title,para1,para2,para3}= props
    return(
        <div className="container-fluid nav_bg mt-5 martop">
             <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                      <div className="col-sm-8 mx-auto">
                            <div className="mt-3">
                                <h2 className="d-flex justify-content-md-center font-weight-bold">{title}</h2>
                                <p className="d-flex justify-content-md-center mt-3">{para1}</p>
                                <p className="d-flex justify-content-md-center">{para2}</p>
                                <p className="d-flex justify-content-md-center">{para3}</p>
            
                            </div>
                       </div>     
                    </div>   
                </div>
              </div>    
        </div>
    )
};


export default About;