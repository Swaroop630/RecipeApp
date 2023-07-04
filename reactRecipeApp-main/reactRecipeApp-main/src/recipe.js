// import React from 'react'
import style from "./recipe.module.css"


 const Recipe = ({title,calories,image,ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p fontFamily="Roboto"><strong>Calories</strong>: {Math.round(calories)}</p>
            <ol>
                {ingredients.map(item =>
                <li fontFamily="Helvetica">{item.text}</li>
                )}
            </ol>
            <img src={image} alt={title} className={style.image} />
            
        </div>
    )
}
export default Recipe