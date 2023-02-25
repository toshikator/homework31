import React from "react";
class CounterStrange extends React.Component{
    constructor(props) {
        super(props);
        this.state = {"value":0};
        this.textInput = React.createRef();
    }
    increaseCount=()=>{
        if (this.state.value>9){
            alert('you can not buy more then 10 goods, try to dance without legs');
        }else {
            const temp = ++this.state.value;
            this.textInput.current.value = '';
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
            this.textInput.current.value = '';
            this.setState({
                "value": temp
            });
        }
    }
    isValid(value){
        if (typeof value !== 'number' || isNaN(value) || value<0 || value >10){
            return false;
        }
        return true;
    }
    setCount(value){
        if (!this.isValid(+value)){
            alert('what the F**k? Why do you press "'+value+'" ?');
        } else{
            this.setState({"value":value});
        }
    }
    handleKey=(event)=> {

        if (event.keyCode===13) {
            this.setCount(this.textInput.current.value);
            this.textInput.current.value = '';
        }
    }
    render() {
        return (
            <div className={'counter'}>
                <div className="button" onClick={this.decreaseCount}>-</div>
                <input ref={this.textInput} onKeyDown={this.handleKey} placeholder={this.state.value}/>
                <div className="button" onClick={this.increaseCount}>+</div>
            </div>
        );
    }
}
export default CounterStrange;