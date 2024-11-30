// export const baseUrl = 'http://103.145.138.200:5000'
export const baseUrl = 'http://159.65.187.252:6001'
export const imageUrl = (url: string) => {
    if (!url) {
        return ""
    }
    if (url.includes('http')) {
        return url
    }
    if (url.startsWith('/')) {
        return `${baseUrl}${url}`
    }
    return `${baseUrl}/${url}`
}