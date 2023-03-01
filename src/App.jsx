import { useState } from 'react';
import { FoodBox } from './components/FoodBox';
import { AddFoodForm } from './components/AddFoodForm';
import { Search } from './components/Search';
import foodsData from './foods.json';
import { Row, Divider, Button } from 'antd';
import './App.css';

function App() {
  const [foods, setFoods] = useState(foodsData);
  const [filteredFoods, setFilteredFoods] = useState('');

  const createFood = (food) => {
    setFoods([...foods, food]);
  };
  const deleteFood = (name) => {
    const newFoods = foods.filter((food) => food.name !== name);
    setFoods(newFoods);
  };

  return (
    <div className="App">
      <AddFoodForm createFood={createFood} />

      <Button>Hide Form / Add New Food</Button>

      <Search foods={foods} setFilteredFoods={setFilteredFoods} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {(filteredFoods || foods).map((food) => (
          <FoodBox
           key={food.name} 
           food={food} 
           onDelete={deleteFood} 
           />
        ))}
      </Row>
    </div>
  );
}

export default App;
