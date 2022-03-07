import Web3 from 'web3';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Authereum from 'authereum';
import Fortmatic from 'fortmatic';
import Web3Modal from 'web3modal';

const providerOptions = {
    authereum: {
        package: Authereum
    }
};

export async function wallet(idx) {
    let provider = undefined
    switch (idx) {
        case 0:
            window.web3 = new Web3(window.web3.currentProvider)
            window.ethereum.enable()
            return window.web3
        case 1:
            const web3Modal = new Web3Modal({
                network: 'mainnet',
                cacheProvider: true,
                providerOptions
            });
        // const web3ModalProvider = await web3Modal.connect();
        // return new Web3(web3ModalProvider)
        case 2:
            provider = new WalletConnectProvider({ infuraId: 'c1b81edd795644b48de5d80c3ef46c08' })
            await provider.enable()
            return Web3(provider)
        case 3:
            const fm = new Fortmatic('pk_test_70BDEF9A461724F4');   //pk_live_26071AE53286E504
            return new Web3(fm.getProvider());
        case 4:
            window.klaytn.enable()
            return window.web3
    }
}