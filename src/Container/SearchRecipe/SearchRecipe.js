import React, {useState,useEffect} from 'react';
import RecipeItem from '../../components/SearchItem/RecipeItem';
import Recipe from '../../components/SearchItem/Recipe';
import Axios from 'axios';



const SearchRecipe = ()=> {

    const [search , setSearch] = useState("Pasta ");
    const [recipes , setRecipes] = useState([]);
  
    const APP_Id = "2aa5efa1";
    const APP_KEY = "b1f9ea9dace60884d45a1730e84f372f";	
    
    useEffect(()=>{
      getrecipe();
    },[]);
    
    
  
    const getrecipe = async()=>{
      const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_Id}&app_key=${ APP_KEY}`);
     
      setRecipes(res.data.hits);
    };
  
  
    const onInputChange = (e)=>{
      setSearch(e.target.value);
    }
    const onsearchClick =()=>{
      getrecipe();
    };
    return (
      <div>
      <RecipeItem search={search} onInputChange={onInputChange} onsearchClick={onsearchClick} />
      <Recipe recipes={recipes}/>
      </div>
    );
  }
export default SearchRecipe;