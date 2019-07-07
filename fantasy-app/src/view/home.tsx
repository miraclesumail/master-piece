import React, { Component } from 'react'

// 一个泛型组件
type SelectProps<T> = { items: T[] };
class Select<T> extends React.Component<SelectProps<T>, any> {}

// 使用
const Form = () => <Select<string> items={['a', 'b']} />;

class Home extends Component {
  render() {
    return (
      <div>
         this is home
      </div>
    )
  }
}

export default Home
