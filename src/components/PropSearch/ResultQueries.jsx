import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { noop } from '../../utils/SearchUtils';
import gridStyles from '../../styles/GridStyles.css';

class ResultQueries extends PureComponent {
    static propTypes = {
        results: PropTypes.array,
        onHandleLinkClick: PropTypes.func
    };
    static defaultProps = {
        results: [],
        onHandleLinkClick: noop
    };
    handleLinkClick = prop => () => {
        this.props.onHandleLinkClick(prop);
    }

    render() {
        const { results } = this.props;

        return (
            <div className={`${gridStyles.col4} ${gridStyles.cols}`}>
                <p>Ricent Queries:</p>
                {results.map(({ address, matches } = {}) => {
                    const { place_name: placeName, centre_point: centrePoint } = address;
                    let link = null;

                    if (placeName) {
                        link =
                            <Link
                                onClick={this.handleLinkClick({ place_name: placeName })}
                                to={`/results/?place_name=${placeName}`}
                            > {placeName} : {matches}
                            </Link>;
                    }

                    if (centrePoint) {
                        link =
                            <Link
                                onClick={this.handleLinkClick({ centre_point: centrePoint })}
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
