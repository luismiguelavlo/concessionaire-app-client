import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const carData = [
  {
    name: "Ford Mustang",
    features: "V8 Engine, 450 HP, 0-60 mph in 4.3 seconds",
    price: 55000,
    photoName: "cars/mustang.jpg",
    soldOut: false,
  },
  {
    name: "Tesla Model S",
    features: "Electric, 396 miles range, 0-60 mph in 2.1 seconds",
    price: 79999,
    photoName: "cars/tesla-model-s.jpg",
    soldOut: false,
  },
  {
    name: "Chevrolet Camaro",
    features: "V6 Engine, 335 HP, 0-60 mph in 5.1 seconds",
    price: 42000,
    photoName: "cars/camaro.jpg",
    soldOut: false,
  },
  {
    name: "BMW M3",
    features: "Twin-turbo I6, 503 HP, 0-60 mph in 3.8 seconds",
    price: 70000,
    photoName: "cars/bmw-m3.jpg",
    soldOut: true,
  },
  {
    name: "Audi R8",
    features: "V10 Engine, 562 HP, 0-60 mph in 3.2 seconds",
    price: 142000,
    photoName: "cars/audi-r8.jpg",
    soldOut: false,
  },
  {
    name: "Mercedes-Benz AMG GT",
    features: "Twin-turbo V8, 523 HP, 0-60 mph in 3.7 seconds",
    price: 118000,
    photoName: "cars/amg-gt.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Auto Dealership</h1>
    </header>
  );
}

function Menu() {
  const cars = carData;
  const numCars = cars.length;

  return (
    <main className="menu">
      <h2>Our Inventory</h2>

      {numCars > 0 ? (
        <>
          <p>
            Premium selection of vehicles available. Explore our top models
            below.
          </p>

          <ul className="cars">
            {cars.map((car) => (
              <Car carObj={car} key={car.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Our inventory is currently being updated. Please check back soon!</p>
      )}
    </main>
  );
}

function Car({ carObj }) {
  return (
    <li className={`car ${carObj.soldOut ? "sold-out" : ""}`}>
      <img src={carObj.photoName} alt={carObj.name} />
      <div>
        <h3>{carObj.name}</h3>
        <p>{carObj.features}</p>
        <span>{carObj.soldOut ? "SOLD OUT" : `$${carObj.price}`}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 18;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We are open from {openHour}:00 to {closeHour}:00. Visit us or book an
          appointment online.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We are open from {openHour}:00 to {closeHour}:00. Come visit us or book
        an appointment online.
      </p>
      <button className="btn">Book Now</button>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);