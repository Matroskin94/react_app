import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { noop } from '../../utils/SearchUtils';

class ResultQueries extends PureComponent {
    static propTypes = {
        results: PropTypes.array,
        onItemClick: PropTypes.func
    };
    static defaultProps = {
        results: [],
        onItemClick: noop
    };
    onQueryClicked = address => () => {
        this.props.onItemClick(address);
    };
    render() {
        const { results } = this.props;

        return (
            <div>
                <p>Ricent Queries:</p>
                {results.map(({ address, matches, locationBased } = {}) =>
                    <div key={matches}>
                        <Link onClick={this.onQueryClicked(address)} to={`/results/?address=${address}&locationBased=${locationBased}`}>
                            {address}: {matches}
                        </Link>
                    </div>)}
            </div>
        );
    }
}

export default ResultQueries;
