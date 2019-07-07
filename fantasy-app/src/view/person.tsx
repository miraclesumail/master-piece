import React, { Component } from 'react'
import { $http } from '../index'
type Props = {
     name: string;
     age: number
}

type State = {
     birthDay: string
}

class Person extends Component<Props, State> {
  state = {
     birthDay: '2019-10-11'
  }

  async componentDidMount() {
     const res = await $http.$fetch('http://localhost:3000/todo/todos');
     console.log(res);
    //  fetch('http://localhost:3000/todo/todos').then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //     });
  }
  
  render() {
    return (
      <div>
         this is person {this.state.birthDay}
      </div>
    )
  }
}

export default Person
