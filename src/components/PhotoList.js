import React from 'react'
import { useAddPhotoMutation, useFetchPhotosQuery } from '../store';
import PhotoListItem from './PhotoListItem';
import Skeleton from '@mui/material/Skeleton';
import  CircularProgress  from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';


function PhotoList({album}) {

    const {data, isError, isFetching} = useFetchPhotosQuery(album);
  const [addPhoto, result] = useAddPhotoMutation();

  const handlePhotoAdd  = ()=>{
    addPhoto(album);
  }

  let content;
  if(isFetching){
    content=(
      <Skeleton
        variant='rectangular'
        sx={{
          width:'100%',
          height:'200px'
        }}
      />
    )
  }
  else if(isError) {
    content = <div>Hata Var!</div>
  }
  else {
    content = data.map((photo) => {
      return <PhotoListItem key={photo.id} photo = {photo} />;
    })
  }

  return (
    <>
      <div>
        <div className='topArrangement'>
            <h3>{album.title} Fotoğrafları</h3>
            <Button 
              variant='outlined'
              onClick={handlePhotoAdd}
            >
              {
                result.isLoading ? (
                  
                  <CircularProgress style={{width:'20px', height:'20px'}}/>
                ) : (
                  <span>Fotoğraf Ekle</span>
                )
              }
            </Button>
          </div>
      </div>
      <div>
        {
          content
        }
      </div>
    </>
  )
}

export default PhotoList