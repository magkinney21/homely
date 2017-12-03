import React, { Component } from 'react';
import styled from 'styled-components';

const Image = styled.img`
height:100px;
width:100px;
margin:20px;


`
class Splash extends Component {
    render() {
        return (
            <div>
            hello
                <img src='https://www.canva.com/design/DACoLDHD1DI/zd79Ka2iFgC-aQORvy80fA/view?utm_content=DACoLDHD1DI&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton'  atl='Icon'/>
            </div>
        );
    }
}

export default Splash;