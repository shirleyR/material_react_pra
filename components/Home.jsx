import React, { Component, PureComponent } from 'react'
import CompareArea from './CompareArea.jsx';
import tiny from 'tinycolor2';

export class Home extends (PureComponent || Component){
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
        this.state = {
            currentColor: "#FF0000"
        }
    }

    handleChange  (data, e){
        // e for what??
        if(tiny(data) !== tiny(this.currentColor)){
            this.setState({
                currentColor: tiny(data).toHex()
            })
        }
        
    }
    handleInputChange (e){
        const  value = tiny(e.target.value);
       // if(value.isValid()){
            this.setState({
                currentColor: e.target.value
            })
       // }
    }
    render(){
        const color = tiny(this.state.currentColor);
        return(
            <div>
                <input value ={this.state.currentColor} onChange={this.handleInputChange}/>
                <CompareArea onChange = {this.handleChange} rgb = {color.toRgb()} hsv={color.toHsv()} hex={color.toHex()} />
            </div>
        )
    }
}
export default Home;