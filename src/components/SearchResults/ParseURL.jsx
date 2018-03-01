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
            return resObject;
        }

        parseURL = url => queryString.parse(url)

        stringifyObject = obj => queryString.stringify(obj);

        render() {
            return <WrappedComponent
                {...this.props}
                getURLParams={this.getURLParams}
                parseURL={this.parseURL}
                stringifyObject={this.stringifyObject}
            />;
        }
    }

    return ParseURL;
};
