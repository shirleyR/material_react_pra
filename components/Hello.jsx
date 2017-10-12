import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import {Tutorial} from './index';

const styles =  theme => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing.unit *3,
        backgroundColor: theme.palette.background.paper
    }
});
function TabContainer(props){
    return <div style={ {padding: 8*3}}>{props.children}</div>
}
TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}
class TopTabs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 0
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange (event, value) {
        this.setState({value});
    };
    render(){
        const {classes} = this.props;
        const {value} = this.state;
        return (
        <div>
            <AppBar position="static" className={classes.root}>
                <Tabs 
                    value= {value}
                    onChange = {this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Tutorial" />
                    <Tab label="Blog" />
                    <Tab label="Resource" />

                </Tabs>
            </AppBar>
            { value === 0 && <TabContainer><Tutorial/></TabContainer>}
        </div>
        )
    }
}

TopTabs.protoTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopTabs);
