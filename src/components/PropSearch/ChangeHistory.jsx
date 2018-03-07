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

        historyBack = (e) => {
            console.log('HistoryBack');
            this.context.router.history.goBack();
        }

        render() {
            return <WrappedComponent
                {...this.props}
                historyPush={this.historyPush}
                historyBack={this.historyBack}
            />;
        }
    }

    return ChangeHistory;
};
