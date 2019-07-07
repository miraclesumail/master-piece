### A observer for react data, below is a simple use
```javascript
this.info = {
        count: 0
      }
import { ObserveState } from '../observe'
     
let ob = new ObserveState(this.info, 'count', (n,v) => console.log('now we change', n, v));

// the wacther is based on the defineProperty, is not applied to react state
```
