import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../../styles/ResultLocations.css';

class ResultLocations extends PureComponent {
    static propTypes = {
        results: PropTypes.array,
        handleItemClick: PropTypes.func
    };

    static defaultProps = {
        results: [],
        handleItemClick: null
    };
    render() {
        const { results } = this.props;

        const itemClicked = item => () => {
            this.props.handleItemClick(item);
        };

        return (
            <div>
                <p>Your Locations</p>
                {results.map((item = {}, index) =>
                    <Link onClick={itemClicked(item)} key={item.key} to='/details'>
                        <div className={styles.listItem}>
                            <div>
                                <img alt='' className={styles.itemImg} src={item.thumb_url} />
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

export default ResultLocations;
