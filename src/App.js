import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Flights from "./components/Flights";
import moment from "moment";
import "tachyons/css/tachyons.css"



class App extends React.Component {


  state = {
    blue: undefined,
    photo: 'https://loremflickr.com/700/1000/sky',
    city: undefined,
    dTime1: undefined,
    aTime1: undefined,
    price1: undefined,
    dTime2: undefined,
    aTime2: undefined,
    price2: undefined,
    dTime3: undefined,
    aTime3: undefined,
    price3: undefined,
    dTime4: undefined,
    aTime4: undefined,
    price4: undefined,
    dTime5: undefined,
    aTime5: undefined,
    price5: undefined,
    error: undefined,
  }

  getFlights = async (e) => {
    e.preventDefault();
    const cityFrom = e.target.elements.cityFrom.value;
    const cityTo = e.target.elements.cityTo.value;
    const whenRaw = e.target.elements.whenRaw.value;
    const when = moment(whenRaw).format('DD%2FMM%2FYYYY');
    const api_call = await fetch(`https://api.skypicker.com/flights?v=2&locale=en&flyFrom=${cityFrom}&to=${cityTo}&dateFrom=${when}`);
    const bg = `https://loremflickr.com/700/1000/${cityTo}`;   
    const data = await api_call.json();
    if (cityFrom && cityTo) {
      this.setState({
        blue: true,
        photo: bg,
        city: cityTo,
        aTime1: moment.unix(data.data[0].aTime).format("ddd, D MMMM HH:mm"),
        dTime1: moment.unix(data.data[0].dTime).format("ddd, D MMMM HH:mm"),
        price1: data.data[0].price,
        aTime2: moment.unix(data.data[1].aTime).format("ddd, D MMMM HH:mm"),
        dTime2: moment.unix(data.data[1].dTime).format("ddd, D MMMM HH:mm"),
        price2: data.data[1].price,
        aTime3: moment.unix(data.data[2].aTime).format("ddd, D MMMM HH:mm"),
        dTime3: moment.unix(data.data[2].dTime).format("ddd, D MMMM HH:mm"),
        price3: data.data[2].price,
        aTime4: moment.unix(data.data[3].aTime).format("ddd, D MMMM HH:mm"),
        dTime4: moment.unix(data.data[3].dTime).format("ddd, D MMMM HH:mm"),
        price4: data.data[3].price,
        aTime5: moment.unix(data.data[4].aTime).format("ddd, D MMMM HH:mm"),
        dTime5: moment.unix(data.data[4].dTime).format("ddd, D MMMM HH:mm"),
        price5: data.data[4].price,
        error: ""
      });
    } else {

      this.setState({

        blue:undefined,
        photo: "https://i.gifer.com/M2ga.gif",
        city: undefined,
        dTime1: undefined,
        aTime1: undefined,
        price1: undefined,
        dTime2: undefined,
        aTime2: undefined,
        price2: undefined,
        dTime3: undefined,
        aTime3: undefined,
        price3: undefined,
        dTime4: undefined,
        aTime4: undefined,
        price4: undefined,
        dTime5: undefined,
        aTime5: undefined,
        price5: undefined,
        error: "Please enter all the values."
      });
    }
  }
  render() {
    return (

    <div className="dt vh-100 w-100">
      <div className="dtc pv6 v-mid w-100">       
        <div className="main h-100 flex flex-column flex-row-l w-80-l w-90-m w-100">

          <Titles 
            photo={this.state.photo} 
            city={this.state.city} 
            blue={this.state.blue}
          />  

          <div className={"form-container w-100 w-60-l pl3-l ph5 pt5-m pr0-l dt-l h-100 "+ (this.state.blue ? "w-70-forced":"")} >
            <Form getFlights={this.getFlights} blue={this.state.blue}/>                  
              <Flights 
                dTime1={this.state.dTime1}
                aTime1={this.state.aTime1}
                price1={this.state.price1}
                dTime2={this.state.dTime2}
                aTime2={this.state.aTime2}
                price2={this.state.price2}
                dTime3={this.state.dTime3}
                aTime3={this.state.aTime3}
                price3={this.state.price3}
                dTime4={this.state.dTime4}
                aTime4={this.state.aTime4}
                price4={this.state.price4}
                dTime5={this.state.dTime5}
                aTime5={this.state.aTime5}
                price5={this.state.price5}
                error={this.state.error}
              />
          </div>

        </div>
      </div>
    </div>
      
    );
  }
};

export default App;