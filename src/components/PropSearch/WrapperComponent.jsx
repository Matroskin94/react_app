import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default url => WrapperComponent => {
    class GetLinckClickCallback extends PureComponent {
        static contextTypes = {
            router: PropTypes.object.isRequired
        };

        toResults = coordinates => {
            this.context.router.history.push(`${url}${coordinates}`);
        }

        render() {
            return <WrapperComponent
                {...this.props}
                getResults={this.toResults}
            />;
        }
    }

    return GetLinckClickCallback;
};
