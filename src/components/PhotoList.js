import React from 'react'
import { useAddPhotosMutation, useGetPhotosQuery } from '../store/store';
import { Button, CircularProgress, Skeleton } from '@mui/material';
import PhotoListItem from './PhotoListItem';

const PhotoList = ({ album }) => {
    const { data, isError, isFetching } = useGetPhotosQuery(album);
    const [addPhotos, results] = useAddPhotosMutation();
    const handleAlbumAdd = () => {
        addPhotos(album);
    }

    let content;
    if (isFetching) {
        content = (<Skeleton variant="rectangular" sx={{ width: "100%", height: "100px", borderRadius: "0 0 30px 30px" }} />)
    } else if (isError) {
        content = (<div>Error!</div>)
    } else {
        content = data.map((item) => {
            return <PhotoListItem photo={item} key={item.id} />
        })
    };
    return (
        <div>
            <div className='topArrangment'>
                <h4>
                    {album.title} - Photo
                </h4>

                <div>
                    <Button onClick={handleAlbumAdd} variant='outlined' color='success'> {results.isLoading ? (<CircularProgress style={{ width: "30px", height: "30px" }} />) : (<div>Add +</div>)}</Button>
                </div>
            </div>
            <div className='photoItem'>
                {content}
            </div>
        </div>
    )
}

export default PhotoList