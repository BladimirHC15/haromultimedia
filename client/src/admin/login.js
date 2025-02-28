
import Logo from '../assets/H_M_logo.png';

const Login = () => {

    return (
        <>
            <div className="login">
                <main class="form-signin w-100 m-auto">
                    <form className="form-control">
                        <center>
                        <img src={Logo} style={{width: '80%', alignItems: 'center'}}/>
                        </center>
                        <div class="form-floating">
                            <input type="email" class="form-control mt-2 mb-4" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Correo</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control mt-2 mb-4" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Contraseña</label>
                        </div>

                        {/* <div class="form-check text-start my-3">
                            <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Remember me
                            </label>
                        </div> */}
                        <button class="btn btn-primary w-100 py-2" type="submit">Entrar</button>

                        <center>
                            <hr/>
                            <p class="mt-2 mb-3 text-body-secondary">&copy; Haro Multimedia</p>
                        </center>
                    </form>
                </main>
            </div>
        </>
    )

}

export default Login;