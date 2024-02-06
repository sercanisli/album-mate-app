import React from 'react'
import ExpandablePanel from './ExpandablePanel'
import AlbumList from './AlbumList';
import { GoTrash } from "react-icons/go";
import { useRemoveUserMutation } from '../store';
import  CircularProgress  from '@mui/material/CircularProgress';

function UsersListItem({user}) { 

  const [removeUser, result] = useRemoveUserMutation();
  //removeUser benim diğer tarafta ki metot adım result ise dönen sonuçları içinde barındırır.

  const handleClick = () =>{
    removeUser(user); //burada use bana props olarak geliyor zaten.
  }

  const header = (
    <>
      <button 
        style={{marginRight:'30px', border:'none', cursor:'pointer' }} 
        onClick={handleClick}
      >
        {
          result.isLoading ? ( //true ise spinner olacak
            <CircularProgress style={{width:'20px', height:'20px'}} />
          ) : (
            <GoTrash/> //false ise GoTrash icon çöp kutusu olacak.
          )
        }
      </button>
      {user.name}
    </>
  )

  return (
    <div>
        <ExpandablePanel header={header}> 
          <AlbumList user={user}/>
        </ExpandablePanel>
    </div>
  )
}

export default UsersListItem