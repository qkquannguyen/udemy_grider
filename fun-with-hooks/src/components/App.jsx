import React, { useState } from "react";

const App = () => {
	const [resource, setResource] = useState("posts");

	return (
		<div>
			<h2>{resource}</h2>
			<button onClick={() => setResource("posts")}>Post</button>
			<button onClick={() => setResource("todos")}>Todo</button>
		</div>
	);
};

export default App;
