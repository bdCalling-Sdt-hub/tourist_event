export const baseUrl = 'http://192.168.10.14:5000'
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