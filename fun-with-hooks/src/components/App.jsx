import React, { useState } from "react";

import ResourceList from './ResourceList'

const App = () => {
    // --- NOTE: Calling setResource() will trigger a re-render
	const [resource, setResource] = useState("posts");

	return (
		<div>
            <ResourceList resource={resource}/>
			<button onClick={() => setResource("posts")}>Post</button>
			<button onClick={() => setResource("todos")}>Todos</button>
		</div>
	);
};

export default App;
