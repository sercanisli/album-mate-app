import React from 'react'
import { useFetchAlbumsQuery } from '../store';

function AlbumList({user}) {

  const {data, isError, isFetching} = useFetchAlbumsQuery(user);
  console.log(data);

  return (
    <div>
        {
            user.name
        }
          Albümü
    </div>
  )
}

export default AlbumList