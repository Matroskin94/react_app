import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { noop } from '../../utils/SearchUtils';

class ResultQueries extends PureComponent {
    static propTypes = {
        results: PropTypes.array,
        onItemClick: PropTypes.func
    };
    static defaultProps = {
        results: [],
        onItemClick: noop
    };
    onQueryClicked = address => () => {
        this.props.onItemClick(address);
    };
    render() {
        const { results } = this.props;

        return (
            <div>
                <p>Ricent Queries:</p>
                <List>
                    {results.map(({ address, matches, locationBased } = {}) =>
                        <Grid
                            key={matches + address}
                            item md={6}
                        >
                            <Paper>
                                <ListItem>
                                    <Link
                                        onClick={this.onQueryClicked(address)}
                                        to={`/results/?address=${address}&locationBased=${locationBased}`}
                                    >
                                        <ListItemText primary={address} secondary={`Matches: ${matches}`} />
                                    </Link>
                                </ListItem>
                            </Paper>
                        </Grid>)}
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