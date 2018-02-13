import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchResult extends Component {
    createQueriesList = () => // Создаёт список поисковых запросов
        this.props.result.map(({ address, matches } = {}, index) =>
            <tr key={index.toString()}>
                <td>{address}: {matches}</td>
            </tr>);

    render() {
        return (
            <div>
                <p>Ricent Queries:</p>
                <table>
                    <tbody>
                        {this.createQueriesList()}
                    </tbody>
                </table>
            </div>
        );
    }
}

SearchResult.propTypes = {
    result: PropTypes.array
};

SearchResult.defaultProps = {
    result: []
};

export default SearchResult;
