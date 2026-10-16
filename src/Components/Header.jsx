// O css atribuido aqui funciona de forma modular, ou seja, isso significa que o Style atribuido, opera somente no local que eu informar. Analise o código abaixo. 
// Atribuimos uma variável Style recebendo o css. na TAG Header, aplicamos o className={} para informar que apenas esta tag irá receber o CSS. Todas as outras funcionalidades atribuidas não irão receber o CSS, exceto se você direiconar a aplicação.

import style from './Header.module.css'

export function Header( {brand, description, children} ) {
    return (
        <>
            <header className={style.header}>
                <div className={style.brand}>
                    <span className={style.logo}>GT4 </span>
                    <div>
                        <strong>{brand}</strong> {/* brand = marca */}
                            <span>{description}</span>
                    </div>
                </div>
                
                <nav className={style.navigation} arial-label='Navegação principal'>
                    {children}
                </nav>

            </header>
        </>
    );
}