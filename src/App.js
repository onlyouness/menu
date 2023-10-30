import "./index.css";
import Data from "./data";
import Categorie from "./Categories";
import Menu from "./Menu";
import { useState } from "react";

const allCategories = ["all", ...new Set(Data.map((item) => item.category))];

function App() {
  const [food, setFood] = useState(Data);
  const [categories, setCategories] = useState(allCategories);

  const filterFoods = (category) => {
    console.log(food);
    if (category === "all") {
      setFood(Data);
      return;
    }
    const newFoodItems = Data.filter((item) => item.category === category);
    setFood(newFoodItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
          <Categorie allCategories={categories} filterFoods={filterFoods} />
          <Menu foods={food} />
        </div>
      </section>
    </main>
  );
}

export default App;
