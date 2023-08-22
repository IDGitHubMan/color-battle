import React from 'react';
import { useState } from 'react';

const Header = ({damageScore}) => {

    return (
        <div>
            <h1>Color Battle</h1>
            <span>{damageScore}</span>
        </div>
    );
}

export default Header;
