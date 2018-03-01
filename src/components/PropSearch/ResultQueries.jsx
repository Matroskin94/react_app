import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

class ResultQueries extends PureComponent {
    static propTypes = {
        results: PropTypes.array
    };
    static defaultProps = {
        results: []
    };

    render() {
        const { results } = this.props;

        return (
            <div>
                <p>Ricent Queries:</p>
                {results.map(({ address, matches } = {}) => {
                    const place = queryString.stringify(address);

                    return (
                        <div key={matches + place}>
                            <Link to={`/results/?${place}`}>
                                {address.place_name || address.centre_point}: {matches}
                            </Link>
                        </div>);
                })}
            </div>
        );
    }
}

export default ResultQueries;
