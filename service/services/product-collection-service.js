import { get } from '../client/http-client.js';
import { ConfiguratorHttpHeader } from '../client/model/header.js';

class ProductCollectionService {
    #_sharedKey;
    #_configuratorApiUrl;
    #_httpHeader;

    constructor(sharedKey, configuratorApiUrl) {
        this.#_sharedKey = sharedKey;
        this.#_configuratorApiUrl = configuratorApiUrl;
        this.#_httpHeader = new ConfiguratorHttpHeader('application/json', 'application/json', sharedKey);
    };

    async getPcToc() {
        const endpoint = this.#_configuratorApiUrl + '/pc/119/tocs?pck=AA01F7E0-9D92-42A5-B099-A17A5ECE5709&tocLevel=2';
        get(this.#_httpHeader, endpoint, null, 'application/json');
    };
};

export { ProductCollectionService };