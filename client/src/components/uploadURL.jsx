import React from 'react';

const UploadURL = props => {
	let url;
	return (
		<div>
			<input 
				type="text" 
				placeholder="your shorten url"
				ref={input => url = input}
			></input>
			<button onClick={() => props.uploadURL(url.value)}>Upload short url</button>
		</div>
	)
}

export default UploadURL;