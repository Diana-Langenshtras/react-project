import React from "react";

import { BrowserRouter as BrowserRouter, Route, Routes} from 'react-router-dom';

import "./fonts/fonts.css";
import "./styles/global.css"
import "./styles/variables.css";
import "./styles/themes.css";
import "./styles/style.css";

import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";

import cards from "./cards";
import SettingsCard from "./pages/SettingsCard";
import CardSettings from "./components/CardSettings/CardSettings";


class App extends React.Component {
  constructor(props){
    super(props);
    this.updateActiveCard = this.updateActiveCard.bind(this);
    this.addCard = this.addCard.bind(this);
    this.deleteSet = this.deleteSet.bind(this);
    this.deleteExercise = this.deleteExercise.bind(this);
    this.addExercise = this.addExercise.bind(this);
    this.addImage = this.addImage.bind(this);
    this.state = {
      cards: cards,
      activeCard: 1,
      images: [],
    }
  }

  updateActiveCard(value) {
    this.setState({activeCard: value});
  }

  addCard(value){
    const newArray = {
      id: this.state.cards.length+1,
      title: value,
      exercises: [],
  };
    const newCards = this.state.cards;
    this.setState({cards: newCards.concat(newArray)});
  }

  deleteSet(id){
    const newCards = this.state.cards;
    newCards.splice(id-1, 1);
    newCards.map((el, index) => {
      el.id = index + 1;
    })
    this.setState({cards: newCards});
  }

  deleteExercise(id, index){
    console.log("1");
    const newCards = this.state.cards;

    newCards[id].exercises.splice(index, 1);

    this.setState({cards: newCards});
  }

  addExercise(id, value){
    console.log('1');
    const newValue = value;
    const newCards = this.state.cards;
    newCards[id].exercises.push(newValue);
    this.setState({cards: newCards});
  }

  addImage(filename){
    console.log('2');
    const newImages = this.state.images;
    newImages.push(filename);
    this.setState({images: newImages});
  }


  render() {

    const activeCard = this.state.activeCard;

  return (
    <div className="App">
      <BrowserRouter>
				<Routes>
					<Route path="/settings" element={<SettingsPage cards={this.state.cards} updateActiveCard={this.updateActiveCard} activeCard={this.state.activeCard} addCard={this.addCard} deleteSet={this.deleteSet} deleteExercise={this.deleteExercise}/>} />
          <Route path="/settings-card" element={<SettingsCard cards={this.state.cards} deleteExercise={this.deleteExercise} addExercise={this.addExercise} addImage={this.addImage}/>} />
          <Route path="/settings-card-add" element={<SettingsCard cards={this.state.cards} deleteExercise={this.deleteExercise} addExercise={this.addExercise}/>} />
          <Route path="/" element={<HomePage cards={this.state.cards} activeCard={this.state.activeCard}/>} />
          
				</Routes>
			</BrowserRouter>
    </div>
  )
}
}

export default App;
