import React from 'react';
import Conversation from './Conversation';
import Header from './Header';
import SearchPeople from './SearchPeople';


const Menu = () => {
    return (
        <div>
            <Header></Header>
            <SearchPeople></SearchPeople>
            <Conversation></Conversation>
        </div>
    );
};

export default Menu;