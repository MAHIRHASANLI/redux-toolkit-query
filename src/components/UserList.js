import React from 'react'
import { useAddUsersMutation, useGetUsersQuery } from '../store/store'
import Skeleton from '@mui/material/Skeleton';
import UserListItem from './UserListItem';
import { Button, CircularProgress } from '@mui/material';

const UserList = () => {
    const [addUsers, results] = useAddUsersMutation();
    const { data, isError, isFetching } = useGetUsersQuery();
    const handleUserAdd = () => {
        addUsers();
    }

    let content;
    if (isFetching) {
        content = (<Skeleton variant="rectangular" sx={{ width: "100%", height: "600px" }} />)
    } else if (isError) {
        content = (<div>Error!</div>)
    } else {
        content = data.map((item) => {
            return <UserListItem user={item} key={item.id} />
        })
    }


    return (
        <div>
            <div className='topArrangment'>
                <h1 style={{ fontSize: "20px" }}>Person</h1>
                <Button onClick={handleUserAdd} variant='outlined'>
                    {results.isLoading ? (<CircularProgress style={{ width: "30px", height: "30px" }} />) : (<div>Add User</div>)}
                </Button>
            </div>
            {content}
        </div>
    )
}

export default UserList