import { initConfigurator } from 'Configurator';
import { ConfiguratorServiceClient } from 'ConfiguratorServiceClient';

const init = async () => {
    globalThis.configuratorService = new ConfiguratorServiceClient('kfi-826132', 'https://www41.kisp.com/api');
    let ret = await globalThis.configuratorService.productCollectionService.getPcToc();
    
    console.log(';asdasdasd');
    //forceClientError here ?
    //
};

window.onLoad = init();