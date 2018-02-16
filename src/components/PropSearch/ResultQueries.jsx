import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ResultQueries extends Component {
    static propTypes = {
        results: PropTypes.array,
        handleItemClick: PropTypes.func
    };
    static defaultProps = {
        results: [],
        handleItemClick: null
    };
    itemClicked = address => () => {
        this.props.handleItemClick(address);
    };
    render() {
        const { results } = this.props;

        return (
            <div>
                <p>Ricent Queries:</p>
                {results.map(({ address, matches } = {}, index) =>
                    <div key={index.toString()}>
                        <Link onClick={this.itemClicked(address)} to='/results'>
                            {address}: {matches}
                        </Link>
                    </div>)}
            </div>
        );
    }
}

export default ResultQueries;
