import React from 'react';
import Slider from "react-slick";
import img from '../../images/slide_val.jpg';
import frying from '../../images/slide_frying.jpg'
import broccoli from '../../images/slide_broccoli.jpg';
import cake from '../../images/slide_cake.jpg';
import chicken from '../../images/slide_chicken.jpg';
import tandoori from '../../images/tandoori.jpg'
import '../../App.css';



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const sliders =()=> {
 
    let settings = {
      dots: true,   
      autoplay: true,
      cssEase: "linear",
      speed: 12000,
      autoplaySpeed:100,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        }
      ]
    };
   
      return (
       
            <div className="container-fluid nav_bg mt-1">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div>
                            <Slider {...settings}>
                            <div className="row">
                                  <div className="col-sm-12 ">
                                    <div className="row"> 
                                        <div className="col   ">
                                
                                              <div className="card bg-dark text-white cards mt-5">
                                                  <img src={frying} class="card-img img-fluid cimg" alt="..." />
                                                  <div className="card-img-overlay">
                                                    <h5 className="card-title text-center font-weight-bold slideVertical mb-2 ">FRYING PEAK</h5>
                                                  </div>
                                        
                                              </div>
                                        </div>
                                        <div className="col ">
                                
                                              <div className="card bg-dark text-white cards mt-5">
                                                  <img src={broccoli} class="card-img img-fluid cimg" alt="..." />
                                                  <div className="card-img-overlay">
                                                    <h5 className="card-title text-center font-weight-bold  slideVertical mb-2">BROCCOLI RECIPE</h5>
                                                  </div>
                                        
                                              </div>
                                        </div>
                                    </div>
                                 </div>
                            </div> 
                            <div className="row">
                                  <div className="col-sm-12">
                                    <div className="row"> 
                                     <div className="col  ">
                             
                                           <div class="card bg-dark text-white cards mt-5">
                                               <img src={cake} class="card-img img-fluid cimg" alt="..." />
                                               <div class="card-img-overlay">
                                                 <h5 class="card-title text-center font-weight-bold  slideVertical mb-2">CAKE RECIPE</h5>
                                               </div>
                                     
                                           </div>
                                     </div>
                                     <div className="col  ">
                             
                                           <div class="card bg-dark text-white cards mt-5">
                                               <img src={chicken} class="card-img img-fluid cimg" alt="..." />
                                               <div class="card-img-overlay">
                                                 <h5 class="card-title text-center font-weight-bold slideVertical mb-2">CHICKEN</h5>
                                               </div>
                                     
                                           </div>
                                     </div>
                                    </div>
                                 </div>
                            </div> 
                            <div className="row">
                                  <div className="col-sm-12">
                                    <div className="row"> 
                                     <div className="col ">
                             
                                           <div class="card bg-dark text-white cards mt-5">
                                               <img src={broccoli} class="card-img img-fluid cimg" alt="..." />
                                               <div class="card-img-overlay">
                                                 <h5 class="card-title text-center font-weight-bold slideVertical mb-2">BROCCOLI RECIPE</h5>
                                               </div>
                                     
                                           </div>
                                     </div>
                                     <div className="col ">
                             
                                           <div class="card bg-dark text-white cards mt-5">
                                               <img src={tandoori} class="card-img img-fluid cimg" alt="..." />
                                               <div class="card-img-overlay">
                                                 <h5 class="card-title text-center font-weight-bold slideVertical mb-2">CHICKEN FRY</h5>
                                               </div>
                                     
                                           </div>
                                     </div>
                                    </div>
                                 </div>
                            </div> 
                            <div className="row">
                                  <div className="col-sm-12">
                                    <div className="row"> 
                                     <div className="col ">
                             
                                           <div class="card bg-dark text-white cards mt-5">
                                               <img src={img} class="card-img img-fluid cimg" alt="..." />
                                               <div class="card-img-overlay">
                                                 <h5 class="card-title text-center font-weight-bold  slideVertical mb-3">VALENTI CAKE</h5>
                                               </div>
                                     
                                           </div>
                                     </div>
                                     <div className="col">
                             
                                           <div class="card bg-dark text-white cards mt-5">
                                               <img src={tandoori} class="card-img img-fluid cimg" alt="..." />
                                               <div class="card-img-overlay">
                                                 <h5 class="card-title text-center  font-weight-bold slideVertical mb-3">CHICKEN FRY</h5>
                                               </div>
                                     
                                           </div>
                                     </div>
                                    </div>
                                 </div>
                            </div> 
                             
                                         
                                                                   
                               </Slider>
                     </div>
                  </div>
             </div>
         </div>

      );
  }


export default sliders;