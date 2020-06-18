import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <div className="ui secondary pointing menu">
            <Link className="item" to="/">
                Streamer
            </Link>
            <div className="right menu">
                <Link className="item" to="/StreamList">
                    All Stream
                </Link>
                <Link className="item" to="/">
                    Streamer
                </Link>
            </div>
        </div>
    )
}

export default Header;