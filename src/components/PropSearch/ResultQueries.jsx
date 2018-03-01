import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
                    const { place_name: placeName, centre_point: centrePoint } = address;
                    let link = null;

                    if (placeName) {
                        link = <Link to={`/results/?place_name=${placeName}`}> {placeName} : {matches} </Link>;
                    }

                    if (centrePoint) {
                        link = <Link to={`/results/?centre_point=${centrePoint}`}> {centrePoint} : {matches} </Link>;
                    }

                    return <div key={matches + centrePoint || placeName}>{link}</div>;
                })}
            </div>
        );
    }
}

export default ResultQueries;
