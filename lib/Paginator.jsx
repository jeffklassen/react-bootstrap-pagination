import React from 'react';
import PaginateLeft from './PaginateLeft.jsx';
import PaginateRight from './PaginateRight.jsx';
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

    range() {
        const maxPages = 10;
        const halfMaxPages = Math.floor(maxPages / 2);
        
        let currPage = this.props.currPage;

        let max = this.props.numPages;
        let min = 1;

        if (currPage <= halfMaxPages) {
            max = Math.min(max, maxPages);

        }
        else {
            min = currPage - halfMaxPages;
            max = Math.min(max, (currPage + halfMaxPages));
        }

        let input = [];
        for (let i = min; i <= max; i++) {
            input.push(i);
        }
        return input;
    },
    render() {
        return (
            <nav aria-label="Page navigation">
                <ul className="pagination">
                    <PaginateLeft {...this.props} />

                    {
                        this.range().map(n => {
                            return (
                                <li key={n} className={n == this.props.currPage ? 'active' : ''}>
                                    <a href onClick={this.handleClick.bind(null, n)}>{n}</a>
                                </li>
                            );
                        })
                    }
                    <PaginateRight {...this.props} />
                </ul>
            </nav>
        );
    }
});

