import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { noop } from '../../utils/SearchUtils';

class ResultQueries extends PureComponent {
    static propTypes = {
        results: PropTypes.array,
        handleItemClick: PropTypes.func
    };
    static defaultProps = {
        results: [],
        handleItemClick: noop
    };
    onQueryClicked = address => () => {
        this.props.handleItemClick(address);
    };
    render() {
        const { results } = this.props;

        return (
            <div>
                <p>Ricent Queries:</p>
                {results.map(({ address, matches } = {}, index) =>
                    <div key={index + address}>
                        <Link onClick={this.onQueryClicked(address)} to='/results/search'>
                            {address}: {matches}
                        </Link>
                    </div>)}
            </div>
        );
    }
}

export default ResultQueries;
