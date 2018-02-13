import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ResultLocations extends Component {
    createSearchResList = () => // Создаёт список результатов поиска
        this.props.result.map(({ address, name } = {}, index) =>
            <tr key={index.toString()}>
                <td>
                    <p>{address} Location: {name}</p>
                </td>
            </tr>);

    render() {
        return (
            <div>
                <p>Your Locations</p>
                <table>
                    <tbody>
                        {this.createSearchResList()}
                    </tbody>
                </table>
            </div>
        );
    }
}

ResultLocations.propTypes = {
    result: PropTypes.array
};


ResultLocations.defaultProps = {
    result: []
};

export default ResultLocations;
