import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ResultLocations extends PureComponent {
    render() {
        const { result } = this.props;

        return (
            <div>
                <p>Your Locations</p>
                <table>
                    <tbody>
                        {result.map(({ address, name } = {}, index) =>
                            <tr key={index.toString()}>
                                <td>
                                    <p>{address} Location: {name}</p>
                                </td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

ResultLocations.propTypes = {
    results: PropTypes.array,
};

ResultLocations.defaultProps = {
    results: [],
};

export default ResultLocations;
