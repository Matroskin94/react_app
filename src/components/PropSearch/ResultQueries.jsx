import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SearchResult extends PureComponent {
    render() {
        const { result } = this.props;

        return (
            <div>
                <p>Ricent Queries:</p>
                <table>
                    <tbody>
                        {result.map(({ address, matches } = {}, index) =>
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
    result: PropTypes.array
};

SearchResult.defaultProps = {
    result: []
};

export default SearchResult;
