import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import goDetailsAction from '../../actions/DetailsActions';
import { noop } from '../../utils/SearchUtils';
import styles from './ResultLocations.css';

class ResultLocations extends PureComponent {
    static propTypes = {
        setActiveItem: PropTypes.func,
        results: PropTypes.array
    };

    static defaultProps = {
        setActiveItem: noop,
        results: []
    };

    itemClicked = item => () => {
        this.props.setActiveItem(item);
    }

    render() {
        return (
            <div>
                {this.props.results.map((item = {}, index) =>
                    <Link
                        onClick={this.itemClicked(item)}
                        key={item.lister_url}
                        to='/details'
                    >
                        <div className={styles.listItem}>
                            <div className={styles.itemImg}>
                                <img alt='' src={item.thumb_url} />
                            </div>
                            <div className={styles.itemText}>
                                <p>{item.title}</p>
                                <p>{item.price}{item.price_currency}</p>
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
        setActiveItem: item => dispatch(goDetailsAction(item))
    };
}

export default connect(undefined, mapDispatchToProps)(ResultLocations);
