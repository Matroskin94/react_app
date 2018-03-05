import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { noop } from '../../utils/SearchUtils';

class ResultQueries extends PureComponent {
    static propTypes = {
        results: PropTypes.array,
        onLinkClick: PropTypes.func
    };
    static defaultProps = {
        results: [],
        onLinkClick: noop
    };
    handleLinkClick = (queryAsObject, queryAsString) => e => {
        e.preventDefault();
        this.props.onLinkClick(queryAsObject, queryAsString);
    }

    render() {
        const { results } = this.props;

        return (
            <div>
                <p>Ricent Queries:</p>
                {results.map(({ address, matches } = {}) => {
                    const { place_name: placeName, centre_point: centrePoint } = address;
                    let link = null;

                    if (placeName) {
                        link =
                            <Link
                                onClick={this.handleLinkClick({ place_name: placeName }, `place_name=${placeName}`)}
                                to={`/results/?place_name=${placeName}`}
                            > {placeName} : {matches}
                            </Link>;
                    }

                    if (centrePoint) {
                        link =
                            <Link
                                onClick={this.handleLinkClick({ centre_point: centrePoint }, `centre_point=${centrePoint}`)}
                                to={`/results/?centre_point=${centrePoint}`}
                            > {centrePoint} : {matches}
                            </Link>;
                    }

                    return <div key={matches + centrePoint || placeName}>{link}</div>;
                })}
            </div>
        );
    }
}

export default ResultQueries;
