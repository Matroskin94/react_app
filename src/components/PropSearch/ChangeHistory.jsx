import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default () => WrappedComponent => {
    class ChangeHistory extends PureComponent {
        static contextTypes = {
            router: PropTypes.object.isRequired
        };

        historyPush = ({ url, query }) => {
            this.context.router.history.push(`${url}${query}`);
        }

        render() {
            return <WrappedComponent
                {...this.props}
                historyPush={this.historyPush}
            />;
        }
    }

    return ChangeHistory;
};
