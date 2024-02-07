import React from 'react'
import { useRemovePhotoMutation } from '../store';
import  CircularProgress  from '@mui/material/CircularProgress';
import { GoTrash } from "react-icons/go";

function PhotoListItem({photo}) {

    const [removePhoto, result] = useRemovePhotoMutation();

    const handleRemovePhoto = () =>{
      removePhoto(photo);
    }

  return (
    <div 
        style={{
            margin:'20px',
            cursor:'pointer',
            position:'relative'
        }} 
        onClick={handleRemovePhoto}
    >
        <img src={photo.url} alt="" />
        <div className='imageDiv'>
            {
            result.isLoading ? ( 
                <CircularProgress style={{width:'20px', height:'20px'}} />
            ) : (
                <GoTrash/> 
            )
            }
        </div>
    </div>
  )
}

export default PhotoListItem