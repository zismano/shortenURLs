import React from 'react';

const AddURL = props => {
	let url;
	return (
		<div>
			<input 
				type="text" 
				placeholder="http://www.google.com"
				ref={input => url = input}
			></input>
			<button onClick={() => props.addURL(url.value)}>Add URL</button>
		</div>
	)
}

export default AddURL;