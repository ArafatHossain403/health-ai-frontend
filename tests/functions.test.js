const getApiUrl = () => {
    let url = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000//';
    // clean url...
    return url;
}

function cleanStartingSlash(endpoint) {
    endpoint = endpoint.replace(/\/{2,}/, '/');
    endpoint = endpoint.startsWith('/') ? endpoint.substring(1) : endpoint;
    return endpoint;
}

function cleanEndingSlash(endpoint) {
    endpoint = endpoint.replace(/\/{2,}/g, '/'); 
    endpoint = endpoint.endsWith('/') ? endpoint.slice(0, -1) : endpoint; 
    return endpoint;
  }
console.log(cleanStartingSlash('/user'))
console.log(cleanStartingSlash('////user'))
console.log(cleanEndingSlash('////user/1'))
console.log(cleanEndingSlash('/////user/////1////'))