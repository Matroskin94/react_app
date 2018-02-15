import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SearchResult extends PureComponent {
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

SearchResult.propTypes = {
    results: PropTypes.array
};

SearchResult.defaultProps = {
    results: []
};

export default SearchResult;
