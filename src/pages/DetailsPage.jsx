import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Details/Header.jsx';
import ItemInfo from '../components/Details/ItemInfo.jsx';
import ItemDescription from '../components/Details/ItemDescription.jsx';

class Details extends Component {
    render() {
        return (
            <div>
                <Header />
                <ItemInfo />
                <ItemDescription />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeItem: state.detailsReducer.activeItem
    };
}

export default connect(mapStateToProps)(Details);
