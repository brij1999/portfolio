import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class NotFound extends Component {
    render() {
        return (
            <div>
                404 - Not Found
            </div>
        )
    }
}

export default withRouter(NotFound); 