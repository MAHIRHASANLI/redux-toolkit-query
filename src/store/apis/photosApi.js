import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { faker } from "@faker-js/faker";

const pouse = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration)
    })
}

const photosApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
        fetchFn: async (...args) => {
            await pouse(1000);
            return fetch(...args)
        }
    }),
    endpoints(builder) {
        return {
            getPhotos: builder.query({
                providesTags: (result, error, album) => {
                    const tags = result.map((photo) => {
                        return { type: "Photo", id: photo.id }
                    });

                    tags.push({ type: 'AlbumPhoto', id: album.id });
                    return tags;
                },
                query: (photo) => {
                    return {
                        url: '/photos',
                        method: "GET",
                        params: {
                            photoId: photo.id
                        }
                    }
                }
            }),
            addPhotos: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    return [{ type: "AlbumPhoto", id: album.id }]
                },
                query: (photo) => {
                    return {
                        url: '/photos',
                        method: "POST",
                        body: {
                            photoId: photo.id,
                            image: faker.image.abstract(150, 150, true)
                        }
                    }
                }
            }),
            deletePhotos: builder.mutation({
                invalidatesTags: (result, error, photo) => {
                    return [{ type: "Photo", id: photo.id }]
                },
                query: (photo) => {
                    return {
                        url: `/photos/${photo.id}`,
                        method: "DELETE"
                    }
                }
            }),
        }
    }
});

export const { useGetPhotosQuery, useAddPhotosMutation,useDeletePhotosMutation } = photosApi;
export default photosApi; 