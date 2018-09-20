import React, { Component } from 'react'

import Header from '../components/Header.js'

class Randomizer extends Component {
  state = {
    options = []
  }

  handleAddOptionEvent = (option) => {
    // option must be valid JS object
    if (!option){
      return "Enter valid option please!"
    }
    //option test, if it has a index better than -1 it is already in array optionally
    // could have called a built in function to test array this seemed to be a stronger way 
    else if (this.state.options.indexOf(option) > -1){
      return "This option already exists!"
    }

    //if it doesn't return before here it is a valid option and no need for else statement
    this.setState((prevState) => {
      ({options: prevState.options.concat([option])})
    })
  }

  render(){
    return (

  <div>
    <Header />

  // add option component 

  // show all options 

  // single option with delete 

  // modal component 

  // pick component 


</div>
    )
  }
  
}

export default Randomizer