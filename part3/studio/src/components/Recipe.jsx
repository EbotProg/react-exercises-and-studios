import { useState } from 'react';
import data from "./data";

const RecipeAuthor = ({authorLink, authorPhoto, authorName}) => {
   // let authorLink = "";
   // let authorPhoto = "";
   // let authorName = "";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = ({ingredients}) => {
   // const ingredients = [];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = ({data}) => {
   return (
      <div> 
         <div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients ingredients={data.ingredients} />
            <RecipeAuthor authorPhoto={data.authorPhoto} authorLink={data.websiteLink} authorName={data.authorName} />
         </div>
      </div>
   );
}

const RecipePhoto = ({photo}) => {
   return (
      <img src={photo} alt="" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto photo={data.recipePhoto} />
         <div>
            <RecipeDescription data={data}/>
         </div>
      </div>
   );
}
