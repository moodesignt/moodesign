import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/common/button';

import './style.css';

export default function Home() {
    const navigate = useNavigate();

    return (
        <main className='home-page'>
            <div className='home-content-container'>
                <h1>Moodesign AI</h1>
                <p>O Design é uma força transformadora que permeia todos os aspectos da nossa vida moderna. Vai além da estética, sendo essencial para a funcionalidade, a usabilidade e a comunicação eficaz. Desde produtos simples até sistemas complexos, o Design desempenha um papel crucial na criação de experiências significativas, impulsionando a inovação, facilitando a interação humana e elevando a qualidade de vida. Em um mundo cada vez mais interconectado e dinâmico, o Design emerge como uma ferramenta indispensável para enfrentar os desafios do presente e moldar o futuro.</p>
                <Button onClick={() => navigate('/studio')}>Começar</Button>
            </div>
        </main>
    )

}