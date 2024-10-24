import { initConfigurator } from 'Configurator';
import { ConfiguratorServiceClient } from 'ConfiguratorServiceClient';

const init = () => {
    globalThis.configuratorService = new ConfiguratorServiceClient('kfi-826132', 'https://myapi.com');
    //forceClientError here ?
    //
};

window.onLoad = init();