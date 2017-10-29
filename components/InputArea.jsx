import React from 'react';

export class InputArea extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.state = {
            value: String(props.value).toUpperCase(),
            blurValue: String(props.value).toUpperCase()
        }
    }

    componentWillReceiveProps(nextProps){
        const input = this.input;
        if (nextProps.value !== this.state.value){
            if (input === document.activeElement){
                this.setState({
                    blurState: String(nextProps.value)
                })   
            } else { 
                 this.setState({value: String(nextProps.value).toUpperCase(), blurValue: !this.state.blurValue && String(nextProps.value).toUpperCase() })
            }
        }
    }

    componentWillUnmount(){
        this.unbindEventListeners()
    }
    handleBlur () {
        if(this.state.blurValue){
            this.setState({
                value: this.state.blurValue,
                blurValue: null
            })
        }
    }

    handleChange(e){
        if (this.props.label){
            this.props.onValueChange && this.props.onValueChange(
                {[this.props.label] :e.target.value}, e
            )
        }else {
            this.props.onValueChange(e.target.value, e);
        }
        this.setState({
            value: e.target.value
        })
        e.preventDefault();
    }
    
    render(){
        return(
            <div className="rc-editor-input">
                <input 
                    className="rc-input" 
                    ref= {input => this.input=input}
                    onChange={ this.handleChange } 
                    onBlur = {this.handleBlur}
                    value={this.state.value}/>
                <span className="rc-input-label">{this.props.label}</span>
            </div>
        );
    }
}
export default  InputArea