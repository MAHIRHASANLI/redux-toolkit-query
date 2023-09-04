import React from 'react'
import { useAddAlbumsMutation, useGetAlbumsQuery } from '../store/store'
import { Button, CircularProgress, Skeleton } from '@mui/material';
import AlbumListItem from './AlbumListItem';

const AlbumsList = ({ user }) => {
    const { data, isError, isFetching } = useGetAlbumsQuery(user);
    const [addAlbums, results] = useAddAlbumsMutation();
    const handleAlbumAdd = () => {
        addAlbums(user);
    }

    let content;
    if (isFetching) {
        content = (<Skeleton variant="rectangular" sx={{ width: "100%", height: "100px", borderRadius: "0 0 30px 30px" }} />)
    } else if (isError) {
        content = (<div>Error!</div>)
    } else {
        content = data.map((item) => {
            return <AlbumListItem album={item} key={item.id} />
        })
    };

    return (
        <div>
            <div className='topArrangment'>
                <h3>
                    {user.name}
                </h3>

                <div>
                    <Button onClick={handleAlbumAdd} variant='outlined'> {results.isLoading ? (<CircularProgress style={{ width: "30px", height: "30px" }} />) : (<div>Add +</div>)}</Button>
                </div>
            </div>

            <div>
                {content}
            </div>
        </div>
    )
}

export default AlbumsList