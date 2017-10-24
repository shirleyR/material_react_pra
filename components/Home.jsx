import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    render(){
        return(
            <div>
                <PickerArea/>
                <Slider />
                <CompareArea />
            </div>
        )
    }
}