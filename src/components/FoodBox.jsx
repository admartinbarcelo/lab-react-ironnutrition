import { Card, Col, Button } from 'antd';

export function FoodBox({ food, onDelete }) {
  const { name, image, calories, servings } = food;
  const totalCalories = parseInt(calories) * parseInt(servings);

  const handleDelete = () => {
    onDelete(name);
  };

  return (
    <Col>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {totalCalories} </b> kcal
        </p>
        <Button type="primary" onClick={handleDelete}>
          Delete
        </Button>
      </Card>
    </Col>
  );
}
