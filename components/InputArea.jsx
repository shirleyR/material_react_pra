import React from 'react';
import className from 'className';

const LabelMap ={

}
const DescMap = {
    
}
class InputArea extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.onValueChange(e.target.value);
    }
    render(){
        const inputLabel = this.props.inputLabel;
        return(
            <div className="rc-editor-input">
                <input className="rc-input" onChange={ this.handleChange }/>
                <span className="rc-input-label">{LabelMap[inputLabel]}</span>
                <span className="rc-input-desc">{DescMap[inputLabel]}</span>
            </div>
        );
    }
}