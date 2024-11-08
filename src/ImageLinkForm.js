import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonClick }) => {
	return (
		<div className='center-column  w-100'>
			<p className='f3'>
				This Magic Brain will detect faces in your pictures. Give it a try
			</p>

			<div className='form center-row pa4 shadow-5'>
				<input onChange={onInputChange} className='f4 pa2 w-70'>
				</input>
				<button onClick={onButtonClick} className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>
					Detect
				</button>
			</div>

		</div>
	);
}
export default ImageLinkForm
