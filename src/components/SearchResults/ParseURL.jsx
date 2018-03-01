import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default () => WrappedComponent => {
    class ParseURL extends PureComponent {
        static propTypes = {
            location: PropTypes.object
        };
        static defaultProps = {
            location: {}
        };

        getURLParams = (paramsArray = []) => {
            const resObject = {};

            paramsArray.forEach(item => {
                resObject[item] = this.props.location[item];
            });
            return resObject;
        }

        render() {
            return <WrappedComponent
                {...this.props}
                getURLParams={this.getURLParams}
            />;
        }
    }

    return ParseURL;
};
