import React from "react";

import { BrowserRouter as BrowserRouter, Route, Routes} from 'react-router-dom';

import "./styles/global.css"
import "./styles/variables.css";
import "./styles/themes.css";
import "./styles/style.css";

import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";

import cards from "./cards";
import SettingsCard from "./pages/SettingsCard";


class App extends React.Component {
  constructor(props){
    super(props);
    this.updateActiveCard = this.updateActiveCard.bind(this);
    this.addCard = this.addCard.bind(this);
    this.state = {
      cards: cards,
      activeCard: 1,
    }
  }

  updateActiveCard(value) {
    this.setState({activeCard: value});
  }

  addCard(value){
    const newArray = {
      id: cards.length+1,
      title: value,
      exercises: ['Бокс', 'Бег', 'Ходьба'],
  };
    const newCards = this.state.cards;
    this.setState({cards: newCards.concat(newArray)});
  }

  render() {

    const activeCard = this.state.activeCard;

  return (
    <div className="App">
      <BrowserRouter>
				<Routes>
					<Route path="/settings" element={<SettingsPage cards={this.state.cards} updateActiveCard={this.updateActiveCard} activeCard={this.state.activeCard} addCard={this.addCard}/>} />
          <Route path="/settings-card" element={<SettingsCard cards={this.state.cards}/>} />
          <Route path="/" element={<HomePage cards={this.state.cards} activeCard={this.state.activeCard}/>} />
				</Routes>
			</BrowserRouter>
    </div>
  )
}
}

export default App;
