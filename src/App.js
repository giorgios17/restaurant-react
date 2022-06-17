import './App.css';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import Menu from './components/menu';
import margherita from './images/pizza-margherita.jpg';
import napoli from './images/pizza-napoli.jpg';
import wurstelPatate from './images/pizza-wurstel-e-patatine.jpg';

class App extends Component {
  state = {
    pizze: [{
      id: 0,
      name: 'Pizza margherita',
      price: 5.00,
      image: margherita
    },
    {
      id: 1,
      name: 'Pizza napoli',
      price: 4.00,
      image: napoli
    },
    {
      id: 2,
      name: 'Pizza wurstel e patate',
      price: 7.00,
      image: wurstelPatate
    }]
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="row">

            {this.state.pizze.map(pizza => (
              <Menu
                key={pizza.id}
                name={pizza.name}
                image={pizza.image}
                price={pizza.price}
              />
            ))}
          </div>
        </div>
      </>
    );
  }

}

export default App;
