export class inicioSesion extends HTMLElement{
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
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

        /* Aplicar la fuente a los elementos del componente */
        .login-container {
            font-family: 'Poppins', sans-serif;
        }
        .forgot-password {
            font-style: italic;
            text-decoration: underline;
        }
    </style>
        <img src="./img/imagen logo.png" alt="Logo" class="logo">
        <div class="login-container">
        <h2>Iniciar sesión</h2>
        <form action="login.php" method="post">
            <div class="form-group">
                <label for="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <div class="forgot-password">
            <a href="#">¿Olvidaste tu contraseña?</a>
            </div>
            <button type="submit">Iniciar sesión</button>
            <div class="forgot-password">
            <a href="#">Registrarse</a>
        </div>
        </form>
    </div>
        `
    }
    #agregarEstilo(shadow){
        let link=document.createElement('link');
        link.setAttribute("rel","stylesheet");
        link.setAttribute("href","./inicioSesion/inicioSesion.css")
        shadow.appendChild(link);
    }
}