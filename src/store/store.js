import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import usersApi from "./apis/UsersApi";
import albumsApi from "./apis/albumsApi";
import photosApi from "./apis/photosApi";


export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(usersApi.middleware).concat(albumsApi.middleware).concat(photosApi.middleware);
    }
})


setupListeners(store.dispatch);

export { useGetUsersQuery, useAddUsersMutation, useDeleteUsersMutation } from "./apis/UsersApi";

export { useGetAlbumsQuery, useAddAlbumsMutation, useDeleteAlbumsMutation } from "./apis/albumsApi";

export { useGetPhotosQuery, useAddPhotosMutation, useDeletePhotosMutation } from "./apis/photosApi";