import { Divider, Input } from 'antd';
import { useState } from 'react';

export function Search({ foods, setFilteredFoods }) {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearch(value)

    const searchFoods = foods.filter((food) => food.name.toLowerCase().includes(value))
    setFilteredFoods(searchFoods)
  }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={search} type="text" onChange={handleSearch} />
    </>
  )
}



  