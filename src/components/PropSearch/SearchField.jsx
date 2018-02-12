import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchAction } from '../../actions/SearchActions';

class Searchfield extends Component {
    state = {
        inputValue: ''
    };

    handleSearchClick = () => {
        this.props.setNewQuery(this.state.inputValue);
    }

    handleInputChange = event => this.setState({ inputValue: event.target.value });

    render() {
        const listItems = [];

        if (this.props.queryRess.length === 0) {
            listItems.push(...this.props.query.map(({ address, matches } = {}, index) =>
                <tr key={index}><td>{address} ({matches})</td></tr>));
        } else {
            listItems.push(...this.props.queryRess.map(({ address, name } = {}, index) =>
                <tr key={index}><td><p>{address} <br /> Location: {name}</p></td></tr>));
        }

        return (
            <div>
                <input onChange={this.handleInputChange} type='text' value={this.state.inputValue} />
                <button onClick={this.handleSearchClick}>Go</button>
                <button>My Location </button>
                <table ><tbody>{listItems}</tbody></table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        query: state.search_reducer.query,
        locations: state.search_reducer.locations,
        queryRess: state.search_reducer.queryRess,
        searchWord: state.search_reducer.searchWord
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setNewQuery: text => {
            dispatch(searchAction(text));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchfield);
