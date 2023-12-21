export const getApiUrl = () => {
    let url = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000//';
    // clean url...
    return url;
}

export function cleanStartingSlash(endpoint) {
    endpoint = endpoint.replace(/\/{2,}/, '/');
    endpoint = endpoint.startsWith('/') ? endpoint.substring(1) : endpoint;
    return endpoint;
}

console.log(cleanStartingSlash('/user'))
console.log(cleanStartingSlash('////user'))
console.log(cleanStartingSlash('////user/1'))
console.log(cleanStartingSlash('///user////1'))
