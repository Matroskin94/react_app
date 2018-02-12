import React, { Component } from 'react';

class SearchResult extends Component {
    createQueriesList = () => // Создаёт список поисковых запросов
        [...this.props.result.map(({ address, matches } = {}, index) =>
            <tr key={index}><td>{address} {matches}</td></tr>)];

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

export default SearchResult;
