const get = async (headers, endpoint, postData, responseType) => {
    return sendRequest('GET', headers, endpoint, postData, responseType);
}

const sendRequest = async (method, headers, endpoint, postData, responseType = 'json', fullResponseWhenError = false) => {
    console.log(headers);
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, endpoint);

        xhr.setRequestHeader('Content-Type', contentType);
        xhr.setRequestHeader('Accept', acceptType);
        xhr.setRequestHeader('X-KitsConfigurator-SharedKey', sharedKey);
        xhr.responseType = responseType;

        xhr.onload = () => {
            if (xhr.status === 200) {
                const response = {
                    data: xhr.response,
                    status: xhr.status
                };
                resolve(response);
            }
            else {
                if (fullResponseWhenError) {
                    reject({
                        status: xhr.status,
                        response: xhr.response
                    })
                }
                else {
                    reject(xhr.statusText);
                }
            }
        }
        xhr.send(postData);
    });
};

const setHeaders = (xhr, headers) => {

};


export { get };