import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import ParseURL from '../SearchResults/ParseURL.jsx';
import { noop } from '../../utils/SearchUtils';

@ParseURL()
class ResultQueries extends PureComponent {
    static propTypes = {
        results: PropTypes.array,
        stringifyObject: PropTypes.func
    };
    static defaultProps = {
        results: [],
        stringifyObject: noop
    };

    render() {
        const { results } = this.props;

        return (
            <div>
                <p>Ricent Queries:</p>
                {results.map(({ address, matches } = {}) => {
                    const place = this.props.stringifyObject(address);

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
