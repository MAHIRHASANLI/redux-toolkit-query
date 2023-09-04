import React from 'react'
import ExpandablePanel from './ExpandablePanel'
import { Button, CircularProgress } from '@mui/material'
import { GoTrash } from 'react-icons/go';
import { useDeletePhotosMutation } from '../store/store';
const PhotoListItem = ({ photo }) => {
    const [deletePhotos, results] = useDeletePhotosMutation()
    const handleClick = () => {
        deletePhotos(photo)
    }
    const header = (
        <>
            <Button onClick={handleClick} variant="outlined" color="error" style={{ height: "30px", marginRight: "30px", cursor: "pointer" }}>
                {results.isLoading ? (<CircularProgress style={{ width: "20px", height: "20px" }} />) : (<GoTrash />)}
            </Button>
            <img src={photo.image} alt="" />
        </>
    )
    return (
        <ExpandablePanel header={header}>

        </ExpandablePanel>
    )
}

export default PhotoListItem