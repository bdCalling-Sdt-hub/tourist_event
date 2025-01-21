import baseApi from "../baseApi";

const packageApis = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getPackages : builder.query({
            query :()=>{
                return ({
                    url:`dashboard/get_packages`,
                    method:'GET'
                })
            }
        })
    })
})
export const {
useGetPackagesQuery
}=packageApis