import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'

// --- NOTE: Do not use anchor tags with react-router.
// --------- It essentially sends a request to a server and the server will respond back with a
// --------- index.html file. The browser will dump all the code, and files. Due to this, thats
// --------- why we don't use anchor tag.
// --------- TLDR: Don't use anchor tags because it requests a new requests, any data you receive
// --------- or fetch will be wiped!

// --- NOTE: Single Page App comes from you only wanting to render one html document.

// --- NOTE: Three different Routers in this library
// --------- 1. BrowserRouter   --> Looks for everything at that top level domain
// --------- 2. HashRouter      --> Uses everything a '#' as the 'path'
// --------- 3. MemoryRouter    --> Doesn't use the URL to track navigation 

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit" exact component={StreamEdit} />
                    <Route path="/streams/delete" exact component={StreamDelete} />
                    <Route path="/streams/show" exact component={StreamShow} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
