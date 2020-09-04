import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const Footer =()=> {
    return(
      <>
       
          <div className ="container-fluid nav_bg mt-5">
             <div className ="row">
                <div className ="col-10 mx-auto">
                <footer class="border-top bg-light fixed-bottom footer">
                  <div>
                    <small className="d-block mb-3 pt-md-3 text-center text-muted">&copy; 2020-2021|All Rights Reserved </small>
                  </div>
                 <div className="d-flex justify-content-center ">
                 <div className="px-2">
                      <small className="text-center"> <FontAwesomeIcon icon={['fab', 'facebook-f']} /> | </small>
                      <small className="text-center"> <FontAwesomeIcon icon={['fab', 'youtube']} /> |</small>
                      <small className="text-center"> <FontAwesomeIcon icon={['fab', 'instagram']} /> |</small>
                      <small className="text-center"> <FontAwesomeIcon icon={['fab', 'twitter']} /> |</small>
                      <small className="text-center"> <FontAwesomeIcon icon={['fab', 'google']} /> </small>

                 </div>
                
                 </div>
                  </footer>
                </div>
              </div>
        </div>
      
      </>
    )
}

export default Footer;