import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { defaultFunction } from '../../utils/SearchUtils.js';

class ResultQueries extends PureComponent {
    static propTypes = {
        results: PropTypes.array,
        handleItemClick: PropTypes.func
    };
    static defaultProps = {
        results: [],
        handleItemClick: defaultFunction
    };
    onItemClicked = address => () => {
        this.props.handleItemClick(address);
    };
    render() {
        const { results } = this.props;

        console.log(results);

        return (
            <div>
                <p>Ricent Queries:</p>
                {results.map(({ address, matches } = {}, index) =>
                    <div key={index + address}>
                        <Link onClick={this.onItemClicked(address)} to='/results'>
                            {address}: {matches}
                        </Link>
                    </div>)}
            </div>
        );
    }
}

export default ResultQueries;
