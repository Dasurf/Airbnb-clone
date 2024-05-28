import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./components/data";
import "./App.css";


const App =  () => {
const cards = data.map((item) => {
  return (
    <Card
      key={item.id}
      {...item}
    />
  )
})

  return (
    <>
      <Header />
      <div className="card-list">
        {cards}
      </div>
    </>
  )
}

export default App;