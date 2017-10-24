import React from 'react';
import tinycolor from 'tinycolor2';
import InputArea from './InputArea.jsx';

class TextInputArea extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const hsv = this.props.currentColor.toHsv();
        return(
            <div>
                <div className="rc-input-field">
                    <InputArea inputLabel ="h" hsv onValueChange={this.props.onValueChange('h')}/>
                    <InputArea inputLabel ="s" hsv onValueChange={this.props.onValueChange('s')}/>
                    <InputArea inputLabel ="v" hsv onValueChange={this.props.onValueChange('v')}/>
                </div>
                <div className="rc-input-field">
                    <InputArea inputLabel ="r" rgb onValueChange={this.props.onValueChange('r')}/>
                    <InputArea inputLabel ="g" rgb onValueChange={this.props.onValueChange('g')}/>
                    <InputArea inputLabel ="b" rgb onValueChange={this.props.onValueChange('b')}/>
                </div>
                <div className="rc-input-field">
                    <InputArea inputLabel ='#' hex onValueChange={this.onValueChange('#')}/>
                </div>
                
            </div>
        );
    }
}