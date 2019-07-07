### a light react form validator by miracle_sumail
```javascript
// below is the rules we customized for our react forms
this.state = {
           rules: [
               {
                   name: 'username',
                   rule: {
                           test: /^[A-Za-z0-9]{6,10}$/,
                           msg: '请输入6到10位数字或字母'
                   }, 
                   err_msg: ''
               },
               {
                   name: 'testByExpAndFn',
                   rule: [
                           {
                               test: /^[A-Za-z0-9]{6,10}$/,
                               msg: '请输入6到10位数字或字母'
                           },   
                           {
                               test: val => {
                                    return !((Math.random()*10 | 0) % 3)
                               },
                               msg: '对不起你的运气不够好, 再接再厉'
                           },
                           {
                               test: val => {
                                    return usernames.indexOf(val) == -1
                               },
                               msg: '这个名字已经被注册了',
                               verifyBackend: true
                           }         
                   ],
                     err_msg: ''
               }
           ]
      }
import { Validator } from 'react-validator-haha'
     
componentDidMount() {
      new Validator(this);
}

// inspired by the rxjs domEvent can be a observerable 
fromEvent(dom, 'input').pipe(debounce(() => interval(1000))).subscribe(e => {
                console.log(e.target.value);
                this.validate(item.name, e.target.value);
            })
```

### only a total of 88 lines code to accomplish the validation
