import React from 'react';

export default React.createClass({
    displayName: 'PublicPage',
    render () {
        return ( // multi line JSX needs parentheses
            <div className='container'>
                <header role='banner'>
                    <h1>Labelr</h1>
                </header>
                <div>
                    <p>We label stuff for you because we can&trade;</p>
                    <a className='button button-large' href='/repos'>
                        <span className='mega-octicon octicon-mark-gitub'></span> Login with GitHub
                    </a>
                </div>
            </div>
        );
    }
});