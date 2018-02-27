import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default WrapperComponent => {
    class GetLocation extends PureComponent {
        static contextTypes = {
            router: PropTypes.object.isRequired
        };
        ToResults = coordinates => {
            this.context.router.history.push(`/results/?centre_point=${coordinates}`);
        }

        render() {
            return <WrapperComponent
                {...this.props}
                goToResults={this.ToResults}
            />;
        }
    }

    return GetLocation;
};
