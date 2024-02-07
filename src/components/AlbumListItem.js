import React from 'react'
import ExpandablePanel from './ExpandablePanel'
import  CircularProgress  from '@mui/material/CircularProgress';
import { GoTrash } from "react-icons/go";
import { useRemoveAlbumMutation } from '../store';
import PhotoList from './PhotoList';


function AlbumListItem({album}) {

  const [removeAlbum, result] = useRemoveAlbumMutation();

  const handleClick = () =>{
    removeAlbum(album);
  }

  const header = (
    <>
      <button 
        style={{marginRight:'30px', border:'none', cursor:'pointer' }} 
        onClick={handleClick}
      >
        {
          result.isLoading ? ( 
            <CircularProgress style={{width:'20px', height:'20px'}} />
          ) : (
            <GoTrash/> 
          )
        }
      </button>
      {album.title}
    </>
  )

  return (
    <div>
        <ExpandablePanel header={header}> 
          <PhotoList album={album}/>
        </ExpandablePanel>
    </div>
  )
}

export default AlbumListItem