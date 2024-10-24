import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import './Navbar.css';

export default function Navbar(){

    let [jogos, setJogos] = useState([]);
    let [activeTab, setActiveTab] = useState('Jogos');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return <nav>
            {/* <div className="catalogo-container">
                <div className="sidebar">
                        <div className="sidebar-section">
                            <h3>Categorias</h3>
                            <button>Ação</button>
                            <button>Aventura</button>
                            <button>RPG</button>
                            <button>Simulação</button>
                            <button>Estratégia</button>
                            <button>Esportes</button>
                            <button>Quebra-Cabeça</button>
                            <button>Corrida</button>
                            <button>Luta</button>
                            <button>Terror</button>
                            <button>Plataforma</button>
                            <button>Battle Royale</button>
                            <button>Tiro/Equipe</button>
                            <button>Survival</button>
                        </div>
                </div>
            </div> */}
            <div className="main-content"></div>
        <div className="header">
                <div className="logo">
                    <img src="./logoLobo.png" alt="" style={{ width: '30px', height: '30px', marginRight: '10px' }} />Lobs
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to ="home">
                                <button
                                    className={activeTab === 'Home' ? 'active' : ''}
                                    onClick={() => handleTabClick('Home')}
                                >
                                    Home
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to ="catalogo">
                            <button
                                className={activeTab === 'Catálogo' ? 'active' : ''}
                                onClick={() => handleTabClick('Catálogo')}
                            >
                                Catálogo
                            </button>
                            </Link>
                        </li>
                        <li>
                            <Link to ="noticias">
                                <button
                                    className={activeTab === 'Notícias' ? 'active' : ''}
                                    onClick={() => handleTabClick('Notícias')}
                                >
                                    Notícias
                                </button>
                            </Link>    
                        </li>
                        <li>
                            <Link to ="contato">
                                <button
                                    className={activeTab === 'Contato' ? 'active' : ''}
                                    onClick={() => handleTabClick('Contato')}
                                >
                                    Contato
                                </button>
                            </Link>   
                        </li>
                        <li>
                            <Link to ="categorias">
                                <button
                                    className={activeTab === 'Categorias' ? 'active' : ''}
                                    onClick={() => handleTabClick('Categorias')}
                                >
                                    Categorias
                                </button>
                            </Link>   
                        </li>
                    </ul>
                </nav>
                <div className="actions">
                    <button className="login-btn">Iniciar sessão</button>
                    <div className="search">
                        <input type="text" placeholder="Pesquisar" />
                        <button><i className="fa fa-search"></i></button>
                    </div>
                </div>
            </div>
    </nav>
}