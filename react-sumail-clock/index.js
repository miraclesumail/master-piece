import React, { Component, Fragment } from 'react'
import './index.scss' 

class Clock extends Component {
  componentDidMount() {
        const {container:{width, height}} = this.props; 
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext("2d");
        ctx.strokeStyle="green";
        ctx.fillStyle = "#f5d300";
        ctx.font = "18px Arial";
        ctx.textAlign = "center";
        ctx.beginPath();
        ctx.arc(width/2, height/2, width/2, 0, 2*Math.PI);
        ctx.stroke();
        // ctx.fillText("12", 150, 70);
        // ctx.fillText("1", 200 , 70 + 100 - Math.sin(1/3*Math.PI)*100);  
        for(var i = 12; i > 0; i--) {
            const height = ctx.measureText('1').width;
            console.log(height);
            //const gap = 
            ctx.fillText( i == 12 ? 12 : 12 - i + '', width/2 + Math.sin((12 - i)/6*Math.PI)*.86*width/2, .07*width + Math.ceil(height)/2 + 1 + .86*width/2 - Math.cos((12 - i)/6*Math.PI)*.86*width/2);
        }
  }

  render() {
    const {container:{width, height}} = this.props; 
    return (
      <div style={{width: width + 'px', height: height + 'px', position:'relative'}}>
          <canvas id="canvas" width={width} height={height}></canvas>
          <Pointer width={width}/>
      </div>
    )
  }
}

class Pointer extends Component {   
    getSecondStyle() {
        return {
            position: 'absolute',
            width: '6px',
            height: this.props.width*1/3 + 'px',
            background: 'pink',
            left: this.props.width/2 - 3 + 'px',
            top: this.props.width*1/6 + 'px',
            transformOrigin: '50% 100%',
            // animation: 'pointer 60s steps(60, end) infinite'
        }
    }

    getMinuteStyle() {
        return {
            position: 'absolute',
            width: '6px',
            height: this.props.width*1/4 + 'px',
            background: 'chocolate',
            left: this.props.width/2 - 3 + 'px',
            top: this.props.width*1/4 + 'px',
            transformOrigin: '50% 100%',
        }
    }

    render() {
        const secondStyle = this.getSecondStyle();
        const minuteStyle = this.getMinuteStyle();
        const seconds = 'rotate' + new Date().getSeconds()*6;
        const minutes = 'rotateA' + new Date().getMinutes()*6;
        return (
              <Fragment>
                 <div style={minuteStyle} className={minutes}></div>
                 <div style={secondStyle} className={seconds}></div>
             </Fragment>
         
        )
    }   
}

export default Clock
