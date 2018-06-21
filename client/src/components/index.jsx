import ReactDOM from 'react-dom';
import React from 'react';

import AddURL from './addURL.jsx';
import UploadURL from './uploadURL.jsx';

const axios = require('axios');

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			uploadUrl: '',
			newShortUrl: '',
			newLongUrl: '',
		}
		this.addURL = this.addURL.bind(this);
		this.uploadURL = this.uploadURL.bind(this);
	}

	createMarkup() {	// sets inner html
		return {__html: this.state.uploadUrl}
	}

	addURL(url) {
		let encodedUrl = encodeURIComponent(url);
		axios.post(`/url/fetch?url=${encodedUrl}`, {
		})
        .then(res => {
          console.log(res.data);
          this.setState({ 
          	newShortUrl: res.data,
          	newLongUrl: url 
          });
        })	  	
	  }

	uploadURL(url) {
		axios.get('/url', {
			url,
		})
		.then(res => {
			console.log(res);
	//		this.setState({ uploadUrl: url })
			<div className="external-html" 
				dangerouslySetInnerHTML={this.createMarkup()}>
			</div>
		})
	}

	render() {
	  return (
		<div> 
			<h1>This is Shorten URLs</h1>
			<AddURL addURL={this.addURL}/>
			<br></br>
			<UploadURL uploadURL={this.uploadURL}/>
		</div>
	  )	
	}
}

ReactDOM.render(<App />, document.getElementById("main"));