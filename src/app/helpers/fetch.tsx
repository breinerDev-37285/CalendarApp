const baseURL = process.env.REACT_APP_API_URL;

export const fetchSinToken = ( endPoint:string, data:any, method = 'GET') => {
    const url = `${ baseURL }/${ endPoint }`;

    if( method === 'GET' ){
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            headers:  {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify( data )
        })
    }
}

export const fetchToken = (endPoint:string, data?:any, method = 'GET') => {
    const url = `${ baseURL }/${ endPoint }`;

    const token = localStorage.getItem('token') || '';

    if( method === 'GET' ){
        return fetch( url, {
            method: 'GET',
            headers: {
                'X-Token': token
            }
        } );
    } else {
        return fetch( url, {
            method,
            headers:  {
                'Content-type' : 'application/json',
                'X-Token': token
            },
            body: JSON.stringify( data )
        })
    }
}