import React from 'react';
import './ImageLinkForm.css';
 


const ImageLinkForm = ({onInputChange, onButtonSubmit}) =>{
	return(
		<div>
			<p className='white f4'>
				{'아래 공간에 이미지 링크를 넣으시면 얼굴 부분을 찾아줍니다!'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-80 center' type='tex' onChange={onInputChange} />
					<button 
						className='w-20 grow f4-ns f5-m tc link ph3 pv2 dib white bg-light-purple'
						onClick={onButtonSubmit}
						>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;