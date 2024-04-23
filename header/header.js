export class HeaderComponent extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        const shadow=this.attachShadow({mode:'open'})
        this.#agregarEstilo(shadow);
        this.#render(shadow);
    }

    #render(shadow){
        shadow.innerHTML+= `
        <header>
        <div class="logo">
        <img src="./../img/logo-sin-letra.png" alt="Logo">
    </div>
    <div class="search-bar">
        <img src="./../img/busqueda.png" alt="Buscar">
        <input type="text" placeholder="Buscar...">
    </div>
    <div class="menu-icons">
        <img src="./../img/hogar.png" alt="Icono 1">
        <img src="./../img/pista.png" alt="Icono 2">
        <img src="./../img/usuario.png" alt="Icono 3">
        <img src="./../img/sonido-de-timbre.png" alt="Icono 4">
    </div>
        </header>
        `
    }

    #agregarEstilo(shadow){
        let link=document.createElement('link');
        link.setAttribute("rel","stylesheet");
        link.setAttribute("href","./header/header.css")
        shadow.appendChild(link);
    }
}
customElements.define('header-component', HeaderComponent);