import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem () {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars2.githubusercontent.com/u/40374187?s=460&u=4ebac440a13ed84e38c34686ecd609dce88870d7&v=4" alt="Deh Oliveira"/>
            <div>
                <strong>Deh Oliveira</strong>
                <span>Quimica</span>
            </div>
        </header>
        <p>Entusiasta das melhores tecnólogias da química avançada.
           <br /><br />
           Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. 
           Mais de 200.000 pessoas já passaram por uma das minhas explosões. 
        </p>
        <footer>
            <p>
                Preço/hora
                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="WhatsApp"/>
                Entrar em contato
            </button>
        </footer>
    </article>    
    );
}

export default TeacherItem;