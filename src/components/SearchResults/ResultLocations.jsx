import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from '../../styles/ResultLocations.css';
import goDetailsAction from '../../actions/DetailsActions';
import { noop } from '../../utils/SearchUtils';

class ResultLocations extends PureComponent {
    static propTypes = {
        queryRessults: PropTypes.array,
        setActiveItem: PropTypes.func,
        searchWord: PropTypes.string,
        favorites: PropTypes.array,
        path: PropTypes.object
    };

    static defaultProps = {
        queryRessults: [],
        setActiveItem: noop,
        searchWord: '',
        favorites: [],
        path: {}
    };

    itemClicked = item => () => {
        this.props.setActiveItem(item);
    }
    render() {
        const pageType = this.props.path.match.params.type;
        const results = pageType === 'search' ?
            this.props.queryRessults :
            this.props.favorites;

        console.log(results);
        return (
            <div>
                {pageType === 'search' ?
                    <h3>Locations: {this.props.searchWord}</h3> :
                    <h3>Favorites</h3>
                }
                {results.map((item = {}, index) =>
                    <Link onClick={this.itemClicked(item)} key={item.key} to='/details'>
                        <div className={styles.listItem}>
                            <div className={styles.itemImg}>
                                <img alt='' src={item.thumb_url} />
                            </div>
                            <div className={styles.itemText}>
                                <p>{item.title} {item.price}{item.price_currency} <br /> {item.summary}</p>
                            </div>
                        </div>
                    </Link>)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        queryRessults: state.searchReducer.queryRessults,
        favorites: state.searchReducer.favorites,
        searchWord: state.searchReducer.searchWord
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setActiveItem: item => {
            dispatch(goDetailsAction(item));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultLocations);
