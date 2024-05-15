import React from "react";

import { BrowserRouter as BrowserRouter, Route, Routes} from 'react-router-dom';

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
    this.state = {
      cards: cards,
      activeCard: 1,
    }
  }
  render() {
  return (
    <div className="App">
      <BrowserRouter>
				<Routes>
					<Route path="/settings" element={<SettingsPage cards={this.state.cards} activeCard={this.state.activeCard}/>} />
          <Route path="/settings-card" element={<SettingsCard cards={this.state.cards}/>} />
          <Route path="/" element={<HomePage cards={this.state.cards} activeCard={this.state.activeCard}/>} />
				</Routes>
			</BrowserRouter>
    </div>
  )
}
}

export default App;
