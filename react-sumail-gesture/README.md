A tiny tool for gesture unlock made by miracle_sumail
### 1. see the code inside
```javascript
    this.state = {
        dotPlace: [],
        hasConnected: [],
        subscriber: null,
        movingDot: null,
        password: [1,3,4,6,5,2], // default password
        restTimes: 3,
        status: 0  // 1 correct  2 wrong
    }

    // this is to generate the 9(0-9) point axis
    calculateDots = () => {
        // 5x + 3y = 8  .4 1 2.1
        const dotPlace = Array.from({length: 9}).map((item, index) => (
            {
                left: `${.4 + (index % 3)*3.1}rem`,
                top: `${.4 + (index/3 | 0)*3.1}rem`,
                width: '1rem',
                height: '1rem',
                borderRadius: '50%',
                border: '1px solid yellow',
                position: 'absolute'
            }
        ))
        this.setState({dotPlace})
    }

    // below is the render
    <div className="g-container" onTouchMove={this.onTouchMove} onTouchEnd={this.onTouchEnd}>
                   {
                       // 9 dots to place
                       this.state.dotPlace.map((style, index) => (
                           <div style={hasConnected.includes(index) ? {...style, border: '1px solid red'} : style} onClick={() => this.addToConnected(index)}>
                                {hasConnected.includes(index) ? <div className="inner"></div> : null}
                           </div>
                       ))
                   }   
                   {
                       // drawlines as our hand moving
                       lineArrs.length ? lineArrs.map((item, index) => (
                           <Line key={index} {...item} status={status}/>
                       )) : null
                   }
    </div>     
```
want see more details, just open index.js and have a look

### 2 how to use ?
```javascript
import Touch from 'react-sumail-gesture'
// just wrap it in your root 
<Touch/>
```