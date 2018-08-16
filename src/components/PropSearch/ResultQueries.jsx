import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { noop } from '../../utils/SearchUtils';
import styles from './ResultQueries.css';

class ResultQueries extends PureComponent {
    static propTypes = {
        results: PropTypes.array,
        onLinkClick: PropTypes.func
    };
    static defaultProps = {
        results: [],
        onLinkClick: noop
    };
    handleLinkClick = (queryAsObject, queryAsString) => e => {
        e.preventDefault();
        this.props.onLinkClick(queryAsObject, queryAsString);
    }

    render() {
        const { results } = this.props;

        return (
            <div>
                <p>Ricent Queries:</p>
                <List>
                    {results.map(({ address, matches } = {}) => {
                        const { place_name: placeName, centre_point: centrePoint } = address;
                        let link = null;

                        if (placeName) {
                            link =
                                <Link
                                    onClick={this.handleLinkClick({ place_name: placeName }, `place_name=${placeName}`)}
                                    to={`/results/?place_name=${placeName}`}
                                >
                                    <Paper className={styles.queryItem}>
                                        <ListItem>
                                            <ListItemText primary={placeName} secondary={`Matches: ${matches}`} />
                                        </ListItem>
                                    </Paper>
                                </Link>;
                        }

                        if (centrePoint) {
                            link =
                                <Link
                                    onClick={this.handleLinkClick({ centre_point: centrePoint }, `centre_point=${centrePoint}`)}
                                    to={`/results/?centre_point=${centrePoint}`}
                                >
                                    <Paper className={styles.queryItem}>
                                        <ListItem>
                                            <ListItemText primary={centrePoint} secondary={`Matches: ${matches}`} />
                                        </ListItem>
                                    </Paper>
                                </Link>;
                        }
                        return (
                            <Grid
                                key={matches + address}
                                item
                            >
                                {link}
                            </Grid>
                        );
                    })}
                </List>
            </div>
        );
    }
}

export default ResultQueries;


/*
<ListItem>
          <Avatar>
            <WorkIcon />
          </Avatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>

        <Link onClick={this.onQueryClicked(address)} to={`/results/?address=${address}&locationBased=${locationBased}`}>
                            {address}: {matches}
            </Link>

*/