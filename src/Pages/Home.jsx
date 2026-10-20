import Greetings from "../Components/Greetings";
import UserCard from "../Components/UserCard";


// A variável nome foi atribuida aqui com um prompt que é exibito ao usuário para que informe o seu nome de usuário ou atribua Visitante! quando o mesmo não informar. Na function, a Tag Greetings trás a variável nome que é atribuida a chave visitorName.

const visitorName = window.prompt('Qual o seu nome?') || "Visitante!";

{/* Dica: o link avatarUrl gera imagens aleatórias, conforme necessidade. Observar os parâmetros no próprio site randomuser.me */}
{/* Para alterar a foto automáticamente, trocar o women por men e vice-versa */}
const team = [
    {
        id: 1,
        name: 'M&M',
        age: 25,
        profession: 'Desenvolvedora Front-end',
        avatarUrl: 'https://randomuser.me/api/portraits/women/12.jpg',  
        isMentor: true,
        focus: 'Componentes e acessibilidade',
    },
    {
        id: 2,
        name: 'Mike Portnoy',
        age: 23,
        profession: 'Desenvolvedor Back-end',
        avatarUrl: 'https://randomuser.me/api/portraits/men/19.jpg',
        focus: 'Integração entre serviços',
    },
    {
        id: 3,
        name: 'Michael Jackson',
        age: 42,
        profession: 'Analista de qualidade',
        avatarUrl: 'https://randomuser.me/api/portraits/men/31.jpg',
        focus: 'Testes e experiência do usuário',
    },
]

function Home() {
    return(
        <>
            <Greetings nome={visitorName}/>
        
            <section id="equipe">
                <div className = "section=heading">
                    <div>
                        <span className = "section-label"> Capital Humano </span>
                        <h2>Conheça nossa equipe:</h2>
                    </div>
                    <span className = "counter"></span>
                </div>

                <div className = "team-grid">
                    {team.map((person) => (
                        <UserCard key = {person.id} {...person}>
                            <p className = "card-note">Foto: {person.focus}</p>
                        </UserCard>
                    ))}
                </div>
            </section>
        </>
    );
}
export default Home;