import React from 'react';

class Nav extends React.Component {
    render() {
        let nav = [1, 2, 3];
        return (
            <nav>
                {nav.map(value => <li>{value}</li>)}
            </nav>
        )
    }
}

export default Nav;
