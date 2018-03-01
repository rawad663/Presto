import React, {Component} from 'react';
import SettingsComponent from '../../components/SettingsComponent';


export default class SettingsContainer extends Component{

    constructor(props){
        super(props);

        this.state = {

        };

    }

    render(){
        return(
            <div>
                <SettingsComponent
                />;

            </div>
        );
    }

}