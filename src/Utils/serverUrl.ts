// export const baseUrl = 'http://10.0.60.118:5000'
export const baseUrl = 'https://server.whatsupjaco.com'
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