import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

export default () => ConnectURL => {
    class ChangeLink extends PureComponent {
        static propTypes = {
            location: PropTypes.object
        };
        static defaultProps = {
            location: {}
        };

        getURLParams = () => queryString.parse(this.props.location.search)

        render() {
            return <ConnectURL
                {...this.props}
                getURLParams={this.getURLParams}
            />;
        }
    }

    return ChangeLink;
};
