import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default url => WrappedComponent => {
    class ChangeHistory extends PureComponent {
        static contextTypes = {
            router: PropTypes.object.isRequired
        };

        historyPush = coordinates => {
            this.context.router.history.push(`${url}${coordinates}`);
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
