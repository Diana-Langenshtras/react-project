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

import axios from "axios";


class App extends React.Component {
  constructor(props){
    super(props);
    this.updateActiveCard = this.updateActiveCard.bind(this);
    this.addCard = this.addCard.bind(this);
    this.deleteSet = this.deleteSet.bind(this);
    this.deleteExercise = this.deleteExercise.bind(this);
    this.addExercise = this.addExercise.bind(this);
    this.changeExercise = this.changeExercise.bind(this);
    this.addImage = this.addImage.bind(this);
    this.state = {
      gameURL: "",
      cards: cards,
      activeCard: 1,
      images: [
        {
          name: 'Default',
          image: '/images/img.png',
        },
        {
          name: 'Бокс',
          image: '/images/img.png',
        },
        {
          name: 'Бег',
          image: '/images/img.png',
        },
        {
          name: 'Ходьба',
          image: '/images/img.png',
        },
      ],
    }
  }

  componentDidMount(){
    let data;

    axios.get('http://localhost:8000/card_sets_json')
    .then(res => {
      data = res.data;
      console.log(data);
      this.setState({cards: this.state.cards.concat(data)});
      console.log(this.state.cards);
    })
    .catch(err => {
      console.log(err);
    })
  }

  componentDidUpdate(prevProps) {
    // Популярный пример (не забудьте сравнить пропсы):
   const fileInput = document.querySelector(".filename__input"); // получаем элемент input для загрузки файла
   const file = fileInput.files[0]; // получаем выбранный файл
   
    const formData = new FormData(); // создаем объект FormData для передачи файла
    
    formData.append('name', this.state.images[this.state.images.length-1].name);
    formData.append('image',file); // добавляем файл в объект FormData
  //  console.log(this.state.images[this.state.images.length-1].name);
   // console.log(file);
    console.log(...formData)
    //xhr.open('POST', '/upload'); // указываем метод и URL сервера, куда будет отправлен файл
    //xhr.send(formData); // отправляем запрос на сервер с помощью метода send()
      axios.post('http://localhost:8000', {
        cards: this.state.cards,
        image: formData,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    
  }

  updateActiveCard(value) {
    this.setState({activeCard: value});
  }

  addCard(value){
    const newArray = {
      id: this.state.cards.length+1,
      name: value,
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
    const newCards = this.state.cards;
    newCards[id].exercises.splice(index, 1);
    this.setState({cards: newCards});
  }

  addExercise(id, value){
    const newCards = this.state.cards;
    newCards[id].exercises.push(value.toLowerCase());
    this.setState({cards: newCards});
  }

  changeExercise(id, index, value){
    const newCards = this.state.cards;
    newCards[id].exercises.splice(index, 1, value);
    this.setState({cards: newCards});
    console.log(newCards[id].exercises);
  }

  addImage(filename, name){
    let flag = true;
      const image = {
        name: name,
        image: filename,
      }
      const newImages = this.state.images;
      newImages.map(el =>
        {
          if (el.name === name){
            flag = false;
            el.image = filename;
            return console.log("Значение обновлено");
        }
      }
      )
      if (flag) this.setState({images: newImages.concat(image)}); 
      else this.setState({images: newImages}); 
  }

  render() {

    const activeCard = this.state.activeCard;

  return (
    <div className="App">
      <BrowserRouter>
				<Routes>
					<Route path="/settings" element={<SettingsPage cards={this.state.cards} gameURL={this.state.gameURL} updateActiveCard={this.updateActiveCard} activeCard={this.state.activeCard} addCard={this.addCard} deleteSet={this.deleteSet} deleteExercise={this.deleteExercise}/>} />
          <Route path="/settings-card" element={<SettingsCard cards={this.state.cards} deleteExercise={this.deleteExercise} addExercise={this.addExercise} changeExercise={this.changeExercise} addImage={this.addImage}/>} />
          <Route path="/" element={<HomePage cards={this.state.cards} activeCard={this.state.activeCard} images={this.state.images}/>} />
          
				</Routes>
			</BrowserRouter>
    </div>
  )
}
}

export default App;
