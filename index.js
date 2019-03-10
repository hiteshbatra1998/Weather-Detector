import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner.js';

class App extends React.Component {
    state={lat:null,errorMessage:''};
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position=> this.setState({lat: position.coords.latitude}),    
            err=> this.setState({errorMessage:err.message})
        );
    }
    render(){ 
        if(this.state.errorMessage && !this.state.lat){
            return <Spinner disp={this.state.errorMessage} /> ;
        }
        if(!this.state.errorMessage && this.state.lat){
            return (
                <div>
                    <SeasonDisplay lat={ this.state.lat }/><br></br>
                </div>
                );
        }
        return <Spinner disp='Please Allow to acess location '/>;
    }
}
ReactDOM.render(<App/> , document.querySelector('#root'));
