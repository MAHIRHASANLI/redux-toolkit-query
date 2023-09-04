import React from 'react'
import ExpandablePanel from './ExpandablePanel'
import PhotoList from './PhotoList'
import { Button, CircularProgress } from '@mui/material'
import { GoTrash } from 'react-icons/go';
import { useDeleteAlbumsMutation } from '../store/store'

const AlbumListItem = ({ album }) => {
    const [deleteAlbums, results] = useDeleteAlbumsMutation()
    const handleClick = () => {
        deleteAlbums(album)
    }
    const header = (
        <>
            <Button onClick={handleClick} variant="outlined" color="error" style={{ height: "30px", marginRight: "30px", cursor: "pointer" }}>
                {results.isLoading ? (<CircularProgress style={{ width: "20px", height: "20px" }} />) : (<GoTrash />)}
            </Button>
            {album.title}
        </>
    )
    return (
        <ExpandablePanel header={header}>
            <PhotoList album={album} />
        </ExpandablePanel>
    )
}

export default AlbumListItem