import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

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

            if (resObject.search) {
                resObject.search = queryString.parse(resObject.search);
            }
            return resObject;
        }

        render() {
            return <WrappedComponent
                {...this.props}
                getURLParams={this.getURLParams}
                parseQuery={this.parseQuery}
            />;
        }
    }

    return ParseURL;
};
