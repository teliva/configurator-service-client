const get = (authInfo, requestInfo, endpoint, responseType = 'json') => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', endpoint);

        xhr.setRequestHeader('Content-Type', requestInfo.contentType);
        xhr.setRequestHeader('Accept', requestInfo.acceptType);
        xhr.setRequestHeader('X-KitsConfigurator-SharedKey', authInfo.sharedKey);
        xhr.responseType = responseType;
        
        xhr.onload = () => {
            if (xhr.status === 200) {
                const response = {
                    data: JSON.parse(xhr.response),
                    status: xhr.status
                };
                resolve(response);
            }
            else {
                reject(xhr.statusText);
            }
        }
    });

}


export { get };