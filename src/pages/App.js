import { UseWalletProvider } from 'use-wallet';

import "../scss/App.scss";
import "../App.css"
import Route from "../route/index";
import "../scss/style.css"

import PayrProvider from '../contexts/PayrProvider';
import FarmsProvider from '../contexts/Farms';
import PricesProvider from '../contexts/Prices';
import { getEthChainInfo } from "../utils/getEthChainInfo"; 

function App() {
  return (
    <Providers>
      <Route />
    </Providers>
  );
}

const Providers = ({ children }) => {

  const {
    chainId,
    rpcUrl
  } = getEthChainInfo();

  return (
    <UseWalletProvider
      chainId={chainId}
      connectors={{
        walletconnect: { rpcUrl }
      }}
    >
      <PayrProvider>
        <FarmsProvider>
          <PricesProvider>
            {children}
          </PricesProvider>
        </FarmsProvider>
      </PayrProvider>
    </UseWalletProvider>
  )
}

export default App;
