import React, { useEffect, useState } from "react";
import "../styles/app.scss";
import Header from "./Header";
import Categories from "./Categories";
import Sort from "./Sort";
import PizzaBlock from "./PizzaBlock";
// import pizzas from "../assets/pizzas.json";

const App = () => {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    fetch("https://6a34e8278248ee962fa5c8d3.mockapi.io/items")
      .then((resp) => resp.json())
      .then((data) => setPizzas(data));
  }, []);

  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {pizzas.map((pizza) => (
                <PizzaBlock key={pizza.id} {...pizza} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
