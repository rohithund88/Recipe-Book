import React from 'react';
import About from '../../components/About/About';




const AboutUs =()=> {
    const info=  {
                title: "Our Story",
                para1:"It started with a cookie (not the Internet kind…) two Years ago when our founder Tim Hunt, a UW anthropology graduate student craving his mom’s homemade cookies got to thinking this new thing called the Internet would be a really cool place for cooks, to exchange favorite recipes.",
                para2:"Tim created cookierecipe.com as an experiment to see if others would respond to his idea. As it turns out, cooks had a huge appetite for sharing recipes; the site was an instant success. Over the next 20 years, Tim and his crew rolled out more sites and social features allowing cooks of all types and interests to connect through recipes, reviews, ratings, photos, profiles, blog posts, personal collections, and more.",
                para3:"What started with a single cookie recipe has grown organically to become the world’s largest food-focused social network with a community of 85 million home cooks consuming 3 billion pages annually of food inspiration across our 19 sites serving 24 countries in 12 languages. I invite you to join our one-of-a-kind community that inspires home cooking and celebrates the foods we make with friends, family, brands and followers. Calling all cooks!",
            }   
     

    return(
        <About title={info.title} para1={info.para1} para2={info.para2} para3={info.para3}/>
    )
};


export default AboutUs;