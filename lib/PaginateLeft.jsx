import React from 'react';

export default React.createClass({
      propTypes: {
        currPage: React.PropTypes.number.isRequired,
        onChangePage: React.PropTypes.func.isRequired
    },
    handleClick(val, e) {
        e.preventDefault();
        this.props.onChangePage(val);
        return false;
    },
    render() {
        return (
            <li className="{this.props.currPage == 1? 'disabled': ''}">
                <a href aria-label="Previous" onClick={this.handleClick.bind(null, this.props.currPage == 1 ? this.props.currPage : this.props.currPage - 1)} >
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
        );
    }
});
