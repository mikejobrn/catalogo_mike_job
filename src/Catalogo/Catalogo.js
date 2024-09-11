import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { listarCatalogo } from '../api/api';
import './Catalogo.css';
import { format } from 'date-fns';

export default function Catalogo() {
    let [jogos, setJogos] = useState([]);
    let [activeTab, setActiveTab] = useState('Jogos');

    useEffect(() => {
        listarCatalogo()
            .then((resultado) => {
                setJogos(resultado);
            });
    }, []);


    return (
        <div>
            <div className="container">
                <div className="card-list">
                    {jogos.map((jogo, i) => (
                        <Card
                            key={i}
                            imagem={jogo.urlCapa}
                            titulo={jogo.nome}
                            dataLancamento={format(jogo.dataLancamento, 'yyyy')}
                            avaliacao={jogo.avaliacao}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}