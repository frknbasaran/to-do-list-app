import React from 'react';

import constants from '../constants';

class Footer extends React.Component {

    render() {
        return (
            <div className="u-align-center Footer">{constants.appDescription}</div>
        );
    }
}

export default Footer;