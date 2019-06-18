import React, { Component } from 'react';
import Purecomponent from './purecomponent';
import Somponent from './component';


export default class exicution extends Component {

    state={
        name:"manoj"
    }

    componentDidMount(){
        setInterval(()=>{
          this.setState({
              name:"anil"
          })
        },5000)
    }
    render() {
        return (
            <div>
                <Purecomponent name={this.state.name}/>
                <Somponent name={this.state.name}/>
            </div>
        )
    }
}
