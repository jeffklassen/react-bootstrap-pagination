import React from 'react';
export default React.createClass({
    propTypes: {
        currPage: React.PropTypes.number.isRequired,
        numPages: React.PropTypes.number.isRequired,
        onChangePage: React.PropTypes.func.isRequired
    },
    handleClick(val, e) {
        e.preventDefault();
        this.props.onChangePage(val);
        return false;
    },
    render() {
        return (
            <li className="{this.props.currPage >= numPages? 'disabled': ''}">
                <a href onClick={this.handleClick.bind(null, this.props.currPage == this.props.numPages ? this.props.currPage : this.props.currPage + 1)} aria-label="Next" >
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        );
    }
});
