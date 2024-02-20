import { useState ,  useEffect } from 'react'
import MealItem from './MealItem';
export default function Meals() {
    const [loadedMeals , setLoadesMeals] = useState([]) ; 

    useEffect(()=>{
        async function fetchmeals(){
            const response  = await fetch('http://localhost:3000/meals' ) ; 
            if(!response.ok){
    
            }
            const meals = await response.json() ; 
            setLoadesMeals(meals) ; 
    
        }
        fetchmeals() ; 
    }, [])
    

  return (
    <ul id="meals" >
        {loadedMeals.map((meal)=>(
            <MealItem  key={meal.id} meal={meal} ></MealItem>
        ))}
    </ul>
  )
}
