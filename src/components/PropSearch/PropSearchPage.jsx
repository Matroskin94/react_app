import React from 'react';
import Instruction from './Instruction.jsx';
import Header from './Header.jsx';
import Searchfield from './Searchfield.jsx';

/*const PropSearchPage = props => (
    <div className='root-div'>
        <Header />
        <Instruction />
        <Searchfield />
    </div> 
);*/

class PropSearchPage extends React.Component {
    render() {
        return (
            <div className='root-div'>
                <Header />
                <Instruction />
                <Searchfield />
            </div> 
        );
    }

}

export default PropSearchPage;
