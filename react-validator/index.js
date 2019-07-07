import { fromEvent, interval } from 'rxjs';
import { debounce } from 'rxjs/operators';

export class Validator {
      constructor(reactInstance){
          this.reactInstance = reactInstance; 
          this.init(); 
      }

      init() {
          this.reactInstance.state.rules.forEach(item => {
            //    document.querySelector('input[name=' + item.name + ']').oninput = (e) => {
            //       console.log(e.target.value);
            //    }
            const dom = document.querySelector('input[name=' + item.name + ']');
            fromEvent(dom, 'input').pipe(debounce(() => interval(1000))).subscribe(e => {
                console.log(e.target.value);
                this.validate(item.name, e.target.value);
            })
          })
      }

      validate(key, val) {
          const temp = this.reactInstance.state.rules.slice();
          const index = temp.findIndex(item => item.name == key);
          const choosed = temp[index];
          // 如果 rule数组 这样处理
          if(Object.prototype.toString.call(choosed.rule).indexOf('Array') != -1) {
               const rule = choosed.rule.slice();
               this.validateArrs(rule, val, index);
          } else {
               const rule = choosed.rule;
               if(!rule.test.test(val)) {
                    // 当匹配不合格时 如果之前的error_msg为空 才设置
                    if(!choosed.err_msg) {
                        temp[index] = {...choosed, err_msg: rule.msg};
                        this.reactInstance.setState({rules: temp})
                    }
               } else {
                    if(choosed.err_msg) {
                        temp[index] = {...choosed, err_msg: ''};
                        this.reactInstance.setState({rules: temp})
                    }
               }
          }
      }

      validateArrs(rule, val, index) {
            const ruleBackEnd = rule.filter(item => item.verifyBackend)[0];

            let flag = true, ruleNow;
            // 只要flag为 false  跳出  没必要继续比较
            while(flag && rule.length) {
                ruleNow = rule.shift();
                 if(!ruleNow.verifyBackend) {
                     if(Object.prototype.toString.call(ruleNow.test).includes('Function')) 
                         flag = ruleNow.test(val);
                     else
                         flag = ruleNow.test.test(val);
                 }
            }

            const rules = this.reactInstance.state.rules.slice();
            //const temp = 
            let theRule = rules[index];
            if(!flag) {
                 if(!theRule.err_msg || theRule.err_msg != ruleNow.msg) {
                     theRule = {...theRule, err_msg: ruleNow.msg};
                     rules[index] = theRule;
                     this.reactInstance.setState({rules})
                 }
            } else {
                 // 使用verifyBackend 来检测
                 if(ruleBackEnd.test(val)) {
                     if(!theRule.err_msg) return;
                           theRule.err_msg = '';
                           rules[index] = theRule;
                           this.reactInstance.setState({rules});
                 } else {
                     if(!theRule.err_msg || theRule.err_msg != ruleBackEnd.msg) {
                           theRule = {...theRule, err_msg: ruleBackEnd.msg};
                           rules[index] = theRule;
                           this.reactInstance.setState({rules});
                     }
                 }
            }
      }
}