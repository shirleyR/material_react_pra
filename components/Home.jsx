import React, { Component, PureComponent } from 'react'
import CompareArea from './CompareArea.jsx';
import tiny from 'tinycolor2';
import throttle from 'lodash'

export class Home extends (PureComponent || Component){
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBlurChange = this.handleBlurChange.bind(this)
        this.state = {
            currentColor: "#FF0000",
            blurColor:"#FF0000"
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
       
       this.setState({
                blurColor: e.target.value
            })
    
    }
    handleBlurChange (e){
        if(tiny(this.state.blurColor).isValid()){
            this.setState({
                currentColor: this.state.blurColor,
                blurColor: null
            })
        }
        
    }
    render(){
        const color = tiny(this.state.currentColor);
        return(
            <div>
                <input value ={this.state.blurColor} onBlur={ this.handleBlurChange}onChange={this.handleInputChange}/>
                <CompareArea onChange = {this.handleChange} rgb = {color.toRgb()} hsv={color.toHsv()} hex={color.toHex()} />
            </div>
        )
    }
}
export default Home;