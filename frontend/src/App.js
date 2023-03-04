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
        this.fetchDisplayData = this.fetchDisplayData.bind(this);
    }

    async fetchDisplayData() {
        let data = await fetchAllDogs();
        this.setState({ dogs: data });
      }

      render() {
        return (
          <div>
            <div id="title">Tierheim</div>
            <button id="fetcher" onClick={this.fetchDisplayData}>
              Check out the dogs
            </button>
            <div className="data">
              {/* generates a div for every entry */}
              {this.state.dogs.map((dog, key) => (
                <div key={key}>
                  {dog.dogBreed} by {dog.colour}
                </div>
              ))}
            </div>
          </div>
        );
      }
    }
    
    export default App;
