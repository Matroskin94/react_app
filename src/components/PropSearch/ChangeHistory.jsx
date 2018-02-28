import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

export default url => ConnectHistory => {
    class ChangeHistory extends PureComponent {
        static contextTypes = {
            router: PropTypes.object.isRequired
        };
        static propTypes = {
            location: PropTypes.object
        }
        static defaultProps = {
            location: {}
        }

        getURLParams = () => queryString.parse(this.props.location.search)

        historyPush = coordinates => {
            this.context.router.history.push(`${url}${coordinates}`);
        }

        render() {
            return <ConnectHistory
                {...this.props}
                historyPush={this.historyPush}
                getURLParams={this.getURLParams}
            />;
        }
    }

    return ChangeHistory;
};
