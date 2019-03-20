import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.module.css';

const burger = (props) => {
    let ingredientsArray = Object.keys(props.ingredients)    //  returns an array with objects keys
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]   // creates an array of length equal to the current ingredient total
                .map((_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey} />
                });   
        })
        .reduce((arr, el) => {
            return arr.concat(el);      // takes every element of main array and adds it to the new array
        }, []);

    if (ingredientsArray.length === 0) {
        ingredientsArray = <p>Please start adding ingredients!</p>
    };
        

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredientsArray}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger;