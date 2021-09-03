import '../scss/App.scss';
import Route from "../route/index";
import { UseWalletProvider } from 'use-wallet';
import { getEthChainInfo } from "../utils/getEthChainInfo";
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
        {children}
    </UseWalletProvider>
  )
} 
function App() {
  return (
    <Providers>
      <Route />
    </Providers>
      );
}

export default App;
