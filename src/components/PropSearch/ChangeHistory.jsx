import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default url => ChangeHistory => {
    class ConnectHistory extends PureComponent {
        static contextTypes = {
            router: PropTypes.object.isRequired
        };

        historyPush = coordinates => {
            this.context.router.history.push(`${url}${coordinates}`);
        }

        render() {
            return <ChangeHistory
                {...this.props}
                historyPush={this.historyPush}
            />;
        }
    }

    return ConnectHistory;
};
