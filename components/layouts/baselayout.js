import React from 'react';
import HeaderComponent from '../shared/header';

const BaseLayout = (props) => {

    return(
        <React.Fragment>
            <HeaderComponent />
            {props.children}
        </React.Fragment>
    );
}

export default BaseLayout;