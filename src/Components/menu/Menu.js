import React from 'react';
import Conversation from './Conversation';
import Header from './Header';
import Search from './Search';

const Menu = () => {
    return (
        <div>
            <Header></Header>
            <Search></Search>
            <Conversation></Conversation>
        </div>
    );
};

export default Menu;