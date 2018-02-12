import React, { Component } from 'react';

class ResultLocations extends Component {

    createSearchResList = () => { // Создаёт список результатов поиска
        return [...this.props.result.map(({ address, name } = {}, index) =>
            <tr key={index}><td><p>{address} Location: {name}</p></td></tr>)];
    }

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

export default ResultLocations;
