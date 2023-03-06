import React from "react";
import { fetchAllDogs } from "./RestClient";
import { fetchAllCats } from "./RestClient";
import { fetchAllHamsters } from "./RestClient";
class App extends React.Component {

    constructor(props){
        super(props);
        this.state={
            dogs: [],
            cats: [],
            hamsters: [],
        };
        this.fetchDisplayDogData = this.fetchDisplayDogData.bind(this);
        this.fetchDisplayCatData = this.fetchDisplayCatData.bind(this);
    }

    async fetchDisplayDogData() {
        let dogData = await fetchAllDogs();
        this.setState({ dogs: dogData });
      }

    async fetchDisplayCatData() {
        let catData = await fetchAllCats();
        this.setState({ cats: catData });
      }

      render() {
        return (
          <div>
            <div id="title">Tierheim</div>
            <button id="dogFetcher" onClick={this.fetchDisplayDogData}>
              Check out the dogs
            </button>
            <button id="catFetcher" onClick={this.fetchDisplayCatData}>
              Check out the cats
            </button>
            <div className="dogData">
              {/* generates a div for every entry */}
              {this.state.dogs.map((dog, key) => (
                <div key={key}>
                  {dog.dogBreed} colour {dog.colour}
                </div>
              ))}
            </div>
            <div className="catData">
              {/* generates a div for every entry */}
              {this.state.cats.map((cat, key) => (
                <div key={key}>
                  {cat.catBreed} colour {cat.colour}
                </div>
              ))}
            </div>
          </div>
        );
      }
    }
    
    export default App;
