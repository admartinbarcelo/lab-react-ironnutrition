import { Divider, Input } from 'antd';
import { useState } from 'react'

export  function AddFoodForm ({createFood}) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")

    const handlerName = (event) => setName(event.target.value)
    const handlerImage = (event) => setImage(event.target.value)
    const handlerCalories = (event) => setCalories(event.target.value)
    const handlerServings = (event) => setServings(parseInt(event.target.value));


    const handlerSubmit = (event) => {
        event.preventDefault()

        createFood({name, image, calories, servings})
        setName("")
        setImage("")
        setCalories("")
        setServings("")
    }


    return (
        <form onSubmit={handlerSubmit} >
          <Divider>Add Food Entry</Divider>
    
          <label>Name</label>
          <Input value={name} type="text" onChange={handlerName} />
    
          <label>Image</label>
          <Input value={image} type="text" onChange={handlerImage} />
        
          <label>Calories</label>
          <Input value={calories} type="number" onChange={handlerCalories} />
    
          <label>Servings</label>
          <Input value={servings} type="number" onChange={handlerServings} />
    
          <button type="submit">Create</button>
        </form>
      )
}