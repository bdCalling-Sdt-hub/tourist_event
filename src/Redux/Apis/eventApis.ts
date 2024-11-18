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
        }),

        // PATCH: Update an event by ID
        updateEvent: builder.mutation({
            query: (data) => ({
                url: `/events/update/${data.id}`, // Dynamically add the event ID
                method: "PATCH",
                body: data,
            }),
        }),

        // GET: Get an event by its ID
        getEventById: builder.query({
            query: (id) => ({
                url: `events/get/${id}`,
                method: "GET",
            }),
        }),

        // GET: Fetch events by category
        getEventsByCategory: builder.query({
            query: (categoryId) => ({
                url: `/events?category=${categoryId}`,
                method: "GET",
            }),
        }),

        // GET: Get featured events
        getFeaturedEvents: builder.query({
            query: () => ({
                url: "/events/featured_events",
                method: "GET",
            }),
        }),

        // PATCH: Save click data for an event
        saveEventClick: builder.mutation({
            query: (eventId) => ({
                url: `/events/save-click/${eventId}`,
                method: "PATCH",
            }),
        }),

        // GET: Get popular events
        getPopularEvents: builder.query({
            query: () => ({
                url: "/events/popular-events",
                method: "GET",
            }),
        }),

        // GET: Fetch events by date
        getEventsByDate: builder.query({
            query: () => ({
                url: "/events/events_by_date",
                method: "GET",
            }),
        }),

        // GET: Fetch past events
        getPastEvents: builder.query({
            query: () => ({
                url: "/events/events_by_past",
                method: "GET",
            }),
        }),

        // GET: Get user favorite events
        getUserFavorites: builder.query({
            query: () => ({
                url: "/events/user-favorites",
                method: "GET",
            }),
        }),

        // DELETE: Delete an event by ID
        deleteEvent: builder.mutation({
            query: (eventId) => ({
                url: `/events/delete/${eventId}`,
                method: "DELETE",
            }),
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
} = eventApis;
