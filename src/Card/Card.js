import React from 'react';
import './Card.css';

// Definindo o componente Card para aceitar props
export default function Card({ imagem, desenvolvedor, dataLancamento, titulo, avaliacao }) {
    // Função para determinar a classe com base na avaliação
    const getAvaliacaoClass = () => {
        if (avaliacao >= 8.0) {
            return 'avaliacao alta';
        } else if (avaliacao >= 7.0) {
            return 'avaliacao media';
        } else {
            return 'avaliacao baixa';
        }
    };
    
    return (
        <div className="card">
            <img src={imagem} alt="Foto do Jogo" />
            <div className="container">
                <div className='titulo'>
                    <h3>{titulo}</h3>
                </div>
                <div className='data'>
                    <h5>{new Date (dataLancamento).getUTCFullYear()}</h5>
                </div>
                <div className='desenvolvedor'>
                    <h5>{desenvolvedor}</h5>
                </div>
                <div className='descricao'>
                    <p className={getAvaliacaoClass()}>⭐{avaliacao}</p>
                </div>
            </div>
        </div>
    );
}