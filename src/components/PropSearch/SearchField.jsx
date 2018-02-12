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

    createQueriesList = () => { // Создаёт список поисковых запросов
        return this.props.query.map(({ address, matches } = {}, index) =>
            <tr key={index}><td>{address} ({matches})</td></tr>);
    }

    createSearchResList = () => { // Создаёт список результатов поиска
        return this.props.queryRess.map(({ address, name } = {}, index) =>
            <tr key={index}><td><p>{address} <br /> Location: {name}</p></td></tr>);
    }

    render() {
        const listResults = this.props.queryRess.length !== 0 ? [...this.createSearchResList()] : [];
        const listQueries = this.props.queryRess.length === 0 ? [...this.createQueriesList()] : [];

        return (
            <div>
                <input onChange={this.handleInputChange} type='text' value={this.state.inputValue} />
                <button onClick={this.handleSearchClick}>Go</button>
                <button>My Location </button>
                <table >
                    <tbody>
                        {listResults}
                        {listQueries}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        query: state.searchReducer.query,
        locations: state.searchReducer.locations,
        queryRess: state.searchReducer.queryRess,
        searchWord: state.searchReducer.searchWord
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
