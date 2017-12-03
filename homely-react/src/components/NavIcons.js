import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import {grey50, amber500} from 'material-ui/styles/colors';

const iconStyles = {
    marginRight: 24,
  };
  
class NavIcons extends Component {
    render() {
        return (
            <div>
                <FontIcon
                className="muidocs-icon-action-home"
                style={iconStyles}                
                color={grey50}
                hoverColor={amber500}
            />
            </div>
        );
    }
}

export default NavIcons;