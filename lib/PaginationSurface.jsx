import React from 'react';
import Paginator from './Paginator.jsx';

export default React.createClass({

    propTypes: {
        currPage: React.PropTypes.number.isRequired,
        numPages: React.PropTypes.number.isRequired,
        onChangePage: React.PropTypes.func.isRequired
    },
    maybeRenderPaginator() {
        if (this.props.numPages > 1) {
            return <Paginator {...this.props} />;
        }
        else {
            return null;
        }

    },
    render() {
        return this.maybeRenderPaginator();;
    }
});