import React from "react";
class CounterStd extends React.Component{
  constructor(props) {
    super(props);
    this.state = {"value":10};
  }
    increaseCount=()=>{
      if (this.state.value>9){
          alert('you can not buy more then 10 goods, try to dance without legs');
      }else {
          const temp = ++this.state.value;
          this.setState({
              "value": temp
          });
      }
    }
    decreaseCount=()=>{
        if (this.state.value<1){
            alert('you can not buy less then 0 goods, try to dance without legs');
        }else {
            const temp = --this.state.value;
            this.setState({
                "value": temp
            });
        }
    }
  render() {
    return (
        <div className={'counter'}>
          <div className="button" onClick={this.decreaseCount}>-</div>
          <span>Count:</span>
          <span>{this.state.value}</span>
          <div className="button" onClick={this.increaseCount}>+</div>
        </div>
    );
  }
}
export default CounterStd;