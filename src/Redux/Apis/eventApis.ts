import { baseApi } from "../baseApi";

const eventApis = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // POST: Create a new event
        createEvent: builder.mutation({
            query: (data) => ({
                url: "events/create",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['event']
        }),

        // PATCH: Update an event by ID
        updateEvent: builder.mutation({
            query: ({ id, data }) => ({
                url: `/events/update/${id}`, // Dynamically add the event ID
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ['event']
        }),
        duplicateEvent: builder.mutation({
            query: (_id) => ({
                url: `/events/duplicate-events/${_id}`, // Dynamically add the event ID
                method: "PATCH",
                body: {},
            }),
            invalidatesTags: ['event']
        }),

        // GET: Get an event by its ID
        getEventById: builder.query({
            query: (id) => ({
                url: `events/get/${id}`,
                method: "GET",
            }),
            providesTags:['event']
        }),

        // GET: Fetch events by category
        getEventsByCategory: builder.query({
            query: ({ category, option, searchTerm, page, date }) => {
                return ({
                    url: `/events`,
                    method: "GET",
                    params: { category, option, searchTerm, page, date }
                })
            },
            providesTags:['event']
        }),

        // GET: Get featured events
        getFeaturedEvents: builder.query({
            query: () => ({
                url: "/events/featured_events",
                method: "GET",
            }),
            providesTags:['event']
        }),

        // PATCH: Save click data for an event
        saveEventClick: builder.mutation({
            query: (eventId) => ({
                url: `/events/save-click/${eventId}`,
                method: "PATCH",
            }),
            invalidatesTags: ['event']
        }),

        // GET: Get popular events
        getPopularEvents: builder.query({
            query: () => ({
                url: "/events/popular-events",
                method: "GET",
            }),
            providesTags:['event']
        }),

        // GET: Fetch events by date
        getEventsByDate: builder.query({
            query: () => ({
                url: "/events/events_by_date",
                method: "GET",
            }),
            providesTags:['event']
        }),

        // GET: Fetch past events
        getPastEvents: builder.query({
            query: () => ({
                url: "/events/events_by_past",
                method: "GET",
            }),
            providesTags:['event']
        }),

        // GET: Get user favorite events
        getUserFavorites: builder.query({
            query: () => ({
                url: "/events/user-favorites",
                method: "GET",
            }),
            providesTags:['event']
        }),

        // DELETE: Delete an event by ID
        deleteEvent: builder.mutation({
            query: (eventId) => ({
                url: `/events/delete/${eventId}`,
                method: "DELETE",
            }),
            invalidatesTags: ['event']
        }),
        getVendorEvent: builder.query({
            query: ({ page }) => {
                return ({
                    url: `/events/my-event`,
                    method: "GET",
                    params: { page }
                })
            },
            providesTags:['event']
        }),

    }),
});

export const {
    useCreateEventMutation,
    useUpdateEventMutation,
    useGetEventByIdQuery,
    useGetEventsByCategoryQuery,
    useGetFeaturedEventsQuery,
    useSaveEventClickMutation,
    useGetPopularEventsQuery,
    useGetEventsByDateQuery,
    useGetPastEventsQuery,
    useGetUserFavoritesQuery,
    useDeleteEventMutation,
    useGetVendorEventQuery,
    useDuplicateEventMutation
} = eventApis;
