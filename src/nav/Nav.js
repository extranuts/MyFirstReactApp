import React from 'react';

class Nav extends React.Component {
    render() {
        let nav = this.props.nav;

        return (
            <nav>
                <ul>
                    {Object.keys(nav).map(value => {
                    return <li><a href="{nav[value]}">{value}</a></li>
                })}
                </ul>
            </nav>
        )
    }
}

export default Nav;
