import './Greetings.css';

// Vamos criar essa função e atribuir duas variáveis: nome e mensagem. Neste caso, estamos atribuindo um texto fixo para mensagem e a variável nome vai receber outro valor, vamos definir posteriormente.

function Greetings({nome, mensagem = "Seja bem vindo(a)!"}) {
    return(
        <div className="greeting">
            <span className="greeting__eyebrow">React - Primeiros Passos</span>
            <h1>{nome}, {mensagem}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, mollitia? Tempore facere culpa neque, eaque ducimus corrupti? Ipsa voluptatum aliquid temporibus itaque. Alias quia obcaecati, quas sed quod ad voluptates!</p>
        </div>
    );
}
export default Greetings;

// A variável {nome} foi atribuida em Home.jsx (conferir código no local)