// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import TokenExchange from '../assets/Token-Exchange.png';
import Whitelist from '../assets/Whitelist.png';
import Labelless from '../assets/Labelless.png'

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Blockchain Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Token Exchange</h3>
                    <img src={TokenExchange} alt="Uniswap Swap Page" />
                    <p> A cryptocurrency exchange built to trade Ethereum for the native Atlas token. A user can trade tokens, create new orders, fill outstanding orders,
                    check their balances and past orders. All while monitoring the Atlas token price. This project uses the power of 2 smart contracts, one for the token
                    contract which is based on ERC-20 standards. The other for the exchange which outlines all necessary functions of an exchange. 
                    </p>

                    <a href="https://atlas-token-exchange.surge.sh/#/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/Brycelanders/Atlas-Token-exchange" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Whitelist</h3>
                    <img src={Whitelist} alt="Whitelist Landing Page" />
                    <p>A project built to demonstrate the power of whitelisting. This is a first come, first serve project
                    where the first 10 wallets will be whitelisted. Whitelists have many use cases, such as a prerelease to 
                    a project, access to an event or you simpley want to do a preorder for potential customers. This whitelist project is for demonstration only and has no future use cases.  
                    </p>

                    <a href="https://whitelist-dapp-brycelanders.vercel.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/Brycelanders/Whitelist-Dapp" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Labelless Collective (Coming Soon)</h3>
                    <img src={Labelless} alt="Aave Landing Page" />
                    <p> A NFT project built to motivate, encourange and inspire the pursuit of passsions
                    while utilizing smart contract technology to store ideas and connect like-minded indiviuals. 
                    </p>

                    <a target="_blank" className="button">N/A</a>
                    <a target="_blank" className="button">N/A</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;