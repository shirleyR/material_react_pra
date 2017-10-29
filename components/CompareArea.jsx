import React from 'react';
import tinycolor from 'tinycolor2';
import InputArea from './InputArea.jsx';

export class TextInputArea extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange (data, e) {

        const hsv = this.props.hsv;
        const rgb = this.props.rgb;
        const hex = this.props.hex;

        var onChange = this.props.onChange;
       if(data['#']){
           tinycolor(data['#']).isValid() && onChange({
               hex: data['#']
           }, e);
       } else if(data.r || data.g || data.b){
           onChange({
               r: data.r || rgb.r,
               g: data.g || rgb.g,
               b: data.b || rgb.b
           }, e);
       } else  if(data.h || data.s || data.v){
            onChange({
                h: data.h || hsv.h,
                s: data.s || hsv.s,
                v: data.v || hsv.v
            }, e)
       }
    }
    render(){
        const hsv = this.props.hsv;
        const rgb = this.props.rgb;
        const hex = this.props.hex;
        return(
            <div>
                <div className="rc-input-field">
                    <InputArea label ="h" value = {Math.round(hsv.h)} onValueChange={this.handleChange}/>
                    <InputArea label ="s" value= {Math.round(hsv.s  * 100)} onValueChange={this.handleChange}/>
                    <InputArea label ="v" value= {Math.round(hsv.v  * 100)} onValueChange={this.handleChange}/>
                </div>
                <div className="rc-input-field">
                    <InputArea label ="r" value= {rgb.r} onValueChange={this.handleChange}/>
                    <InputArea label ="g" value={ rgb.g} onValueChange={this.handleChange}/>
                    <InputArea label ="b" value={ rgb.b} onValueChange={this.handleChange}/>
                </div>
                <div className="rc-input-field">
                    <InputArea label ='#' value={hex.replace('#', '')} onValueChange={this.handleChange}/>
                </div>
                
            </div>
        );
    }
}
export default TextInputArea;