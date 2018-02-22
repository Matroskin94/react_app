import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';
import styles from '../../styles/ResultLocations.css';
import goDetailsAction from '../../actions/DetailsActions';
import { chooseLocationsAction } from '../../actions/LocationActions';
import { noop } from '../../utils/SearchUtils';

class ResultLocations extends Component {
    static propTypes = {
        setActiveItem: PropTypes.func,
        loadQuery: PropTypes.func,
        location: PropTypes.object,
        match: PropTypes.object,
        results: PropTypes.array,
        favorites: PropTypes.array,
        isLoading: PropTypes.bool
    };

    static defaultProps = {
        setActiveItem: noop,
        loadQuery: noop,
        location: {},
        match: {},
        results: [],
        favorites: [],
        isLoading: false
    };

    state = {
        results: []
    };

    componentWillMount() {
        const { address, locationBased } = { ...queryString.parse(this.props.location.search) };

        if (!this.props.isLoading && this.props.match.path === '/results') {
            const property = locationBased === 'true' ?
                { centre_point: address } :
                { place_name: address };

            this.props.loadQuery(property);
        } else if (this.props.match.path === '/favorite') {
            this.setState({ results: this.props.favorites });
        }
    }
    componentWillReceiveProps(props) {
        this.setState({ results: props.results });
    }

    itemClicked = item => () => {
        this.props.setActiveItem(item);
    }

    render() {
        return (
            <div>
                {this.state.results.map((item = {}, index) =>
                    <Link onClick={this.itemClicked(item)} key={item.key} to='/details'>
                        <div className={styles.listItem}>
                            <div className={styles.itemImg}>
                                <img alt='' src={item.thumb_url} />
                            </div>
                            <div className={styles.itemText}>
                                <p>{item.title} {item.price}{item.price_currency} </p>
                                <p> {item.summary}</p>
                            </div>
                        </div>
                    </Link>)}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadQuery: query => dispatch(chooseLocationsAction(dispatch)(query)),
        setActiveItem: item => dispatch(goDetailsAction(item))
    };
}

export default connect(undefined, mapDispatchToProps)(ResultLocations);
