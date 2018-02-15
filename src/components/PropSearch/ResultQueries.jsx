import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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
                <table>
                    <tbody>
                        {results.map(({ address, matches } = {}, index) =>
                            <tr key={index.toString()}>
                                <td>
                                    {address}: {matches}
                                </td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}



export default ResultQueries;
