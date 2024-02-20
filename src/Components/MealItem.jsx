import React from "react";
import {currencyFormatter} from '../util/formatting'
import Button from "./UI/Button";

const prefix = 'http://localhost:3000/'

export default function MealItem({ meal }) {
  return (
    <li className="meal-item">
      <article>
        <img src={prefix + `${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button textOnly={false}  >Add To Cart</Button>
        </p>
      </article>
    </li>
  );
}
