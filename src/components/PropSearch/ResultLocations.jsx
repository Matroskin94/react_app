import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ResultLocations extends PureComponent {
    static propTypes = {
        results: PropTypes.array,
    };

    static defaultProps = {
        results: [],
    };
    render() {
        const { results } = this.props;
        console.log(this.props);

        return (
            <div>
                <p>Your Locations</p>
                <table>
                    <tbody>
                        {results.map(({ address, name } = {}, index) =>
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

export default ResultLocations;
