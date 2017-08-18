import React from 'react';

class Content extends React.Component {

    render() {
        return (
            <div className="container Content">
                {this.props.children}
            </div>
        );
    }
}

export default Content;