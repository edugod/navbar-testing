import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import { useRef } from 'react'
/* o que é o useRef mesmo?
useRef é um hook no React utilizado para criar uma referência mutável 
que persiste durante o ciclo de vida do componente.
Ele é comumente utilizado para acessar ou modificar diretamente o DOM, 
manter uma referência persistente a um valor que não aciona uma nova renderização, 
ou interagir com outros métodos imperativos fornecidos por bibliotecas externas. 
useRef não causa uma nova renderização quando seu valor é atualizado, 
tornando-o útil para armazenar informações que não devem impactar o fluxo de renderização do React.
*/

const Navbar = () => {
	const navRef = useRef()

    const showNavBar = () => {
        console.log('clicado')
        navRef.current.classList.toggle("responsive_nav");
    }
	return (
		<header>
			{/* O header sendo um container... */}
			<h3>Logo</h3>
			<nav ref={navRef}>
				<a href='/#'>Home</a>
				<a href='/#'>My work</a>
				<a href='/#'>Blog</a>
				<a href='/#'>About Me</a>
				<button className='nav-btn nav-close-btn' onClick={showNavBar}>
					{/* vai ser usado para fechar o navigation */}
					<FaTimes />
				</button>
			</nav>
            <button className='nav-btn nav-btn' onClick={showNavBar}>
				{/* aqui vai ser usado para abrir o navigation */}
				<FaBars />
			</button>
		</header>
	)
}

export default Navbar
