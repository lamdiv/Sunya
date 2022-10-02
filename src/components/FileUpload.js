import React, { useState } from 'react'

function FileUpload() {
    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

	const handleSubmission = () => {
	};

    return (
        <div className="flex flex-col spacey-2 items-center mt-10 ">
            <input className='mt-4 w-full block text-transparent outline-none border-none' type="file" name="Select file" onChange={changeHandler} />
			{isSelected ? (
				<div className='w-full h-min border-2 p-4 mt-4 mb-4'>
                    
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
				</div>
			) : (
				<p className='w-full h-min border-2 p-4 mt-4 mb-4'>No File Selected</p>
			)}
			<div>
				<button className='bg-primary outline-none rounded-[36px] px-6 py-2 text-white' onClick={handleSubmission}>Analyze this file</button>
			</div>
		
        </div>
    )
}

export default FileUpload