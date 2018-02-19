import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { noop } from '../../utils/SearchUtils.js';

class ResultQueries extends PureComponent {
    static propTypes = {
        results: PropTypes.array,
        handleItemClick: PropTypes.func
    };
    static defaultProps = {
        results: [],
        handleItemClick: noop
    };
    onItemClicked = address => () => {
        this.props.handleItemClick(address);
    };
    render() {
        const { results } = this.props;

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
