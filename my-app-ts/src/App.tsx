import * as React from 'react';
import './App.css';

import logo from './logo.svg';

const incrementClicksCount = (prevState: State) => ({
  clicksCount: prevState.clicksCount + 1,
});
const decrementClicksCount = (prevState: State) => ({
  clicksCount: prevState.clicksCount - 1,
});

const initialState = { clicksCount: 0 };
type State = Readonly<typeof initialState>;

const defaultProps = {age:18}
type Props = Partial<{
  name: string;
  age:number
}>;

class App extends React.Component<Props, State>{
  public readonly state: State = initialState;
  public static readonly defaultProps: Props = defaultProps;

  constructor(props:Props){
    super(props);
  }

  public handleIncrement = () => this.setState(incrementClicksCount);
  public handleDecrement = () => this.setState(decrementClicksCount);

  public render() { 
    const {clicksCount} = this.state;

    return (
      <div className="App">
        You've clicked me {clicksCount} times!
        <button onClick={this.handleIncrement}>add</button>
        <button onClick={this.handleDecrement}>qqq</button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcomell to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.{this.props.name} {this.props.age}
        </p>
      </div>
    );
  }
}

export default App;
