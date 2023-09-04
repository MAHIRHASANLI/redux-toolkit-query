import React from 'react'
import ExpandablePanel from './ExpandablePanel'
import AlbumsList from './AlbumsList'
import { GoTrash } from "react-icons/go"
import { useDeleteUsersMutation } from '../store/store'
import { Button, CircularProgress } from '@mui/material';

const UserListItem = ({ user }) => {
    const [deleteUsers, results] = useDeleteUsersMutation()
    const handleClick = () => {
        deleteUsers(user)
    }
    const header = (
        <>
            <Button onClick={handleClick} variant="outlined" color="error" style={{ height: "30px", marginRight: "30px", cursor: "pointer" }}>
                {results.isLoading ? (<CircularProgress style={{ width: "20px", height: "20px" }} />) : (<GoTrash />)}
            </Button>
            {user.name}
        </>
    )
    return (
        <ExpandablePanel header={header}>
            <AlbumsList user={user} />
        </ExpandablePanel>
    )
}

export default UserListItem