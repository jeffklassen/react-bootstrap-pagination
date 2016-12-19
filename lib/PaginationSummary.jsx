import React from 'react';

export default React.createClass({
    render() {
        return (
            <div>
                Showing {this.props.currMin || 1} - {this.props.currMax} of {this.props.total}
            </div>
        );
    }
});
