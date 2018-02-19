import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from '../../styles/ResultLocations.css';
import goDetailsAction from '../../actions/DetailsActions';
import { defaultFunction } from '../../utils/SearchUtils';

class ResultLocations extends PureComponent {
    static propTypes = {
        queryRessults: PropTypes.array,
        setActiveItem: PropTypes.func,
        searchWord: PropTypes.string
    };

    static defaultProps = {
        queryRessults: [],
        setActiveItem: defaultFunction,
        searchWord: ''
    };

    itemClicked = item => () => {
        this.props.setActiveItem(item);
    }
    render() {
        const results = this.props.queryRessults;

        return (
            <div>
                <h3>Locations: {this.props.searchWord}</h3>
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
        searchWord: state.searchReducer.searchWord,
        trigger: state.searchReducer.trigger
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
