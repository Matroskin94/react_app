import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

export default () => WrappedComponent => {
    class ParseURL extends PureComponent {
        static contextTypes = {
            router: PropTypes.object.isRequired
        };

        getURLParams = (paramsArray = []) => {
            const resObject = {};

            paramsArray.forEach(item => {
                resObject[item] = this.context.router.history.location[item];
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
