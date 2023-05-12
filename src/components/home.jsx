import React, {Component} from 'react';

// Home page class
// First thing the user will see
class Home extends Component {
    state = {  }

    // Render the component so the user can see it
    render() {
        return(
            <div className='App'>
                <header className='App-header'>
                    This is my portfolio
                    <p className='App-text'>You can navigate through it as you see fit</p>
                </header>
            </div>
        );
    }
}

// We export it so we can use it on other components/pages like App.js
export default Home;