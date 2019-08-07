import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'

ReactDOM.render(
    <App/>, document.querySelector('#root')
)

/**
 * !Other Notes!
 * ------------------------------------------------------------------------------------------------
 * Components
 * ------------------------------------------------------------------------------------------------
 * --- Component Lifecycle
 * -------- constructor                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ good for one time setup
 * -------- render                          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Only JSX here
 * -------- *content will be visible on screen*
 * -------- componentDidMount               ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Good for data loading
 * -------- *sit and wait for updates*
 * -------- *render() called*
 * -------- componentDidUpdate              ~ Good for more data loading when state / props changes
 * -------- *sit and wait until this component is not longer shown*
 * -------- componentWillUnmount            ~~~~~~~ Good place to do cleanup (Esp. non-react stuff)
 */