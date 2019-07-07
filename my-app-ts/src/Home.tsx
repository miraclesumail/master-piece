import * as React from 'react';
import * as $ from 'jquery'


class Home extends React.Component{
  

  constructor(props:any){
    super(props);
    console.log($);
    console.log('sss');
    console.log(this.props);
  }

  

  public render() { 
    return (
      <div className="Home">
          home
      </div>
    );
  }
}

export default Home;
