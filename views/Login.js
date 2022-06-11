import Data from "../js/Api.js"
import Home from "./Home.js";
class Login {


    constructor() {


        console.log(localStorage.getItem("personId") === "");

        if (localStorage.getItem("personId") != "") {
            new Home(localStorage.getItem("personId"));
        } else {


            // localStorage.removeItem("personId");


            this.api = new Data();
            this.container = document.querySelector(".container");
            this.container.innerHTML = "";
            this.createMain();

            this.login = document.querySelector(".login-btn");
            this.login.addEventListener("click", this.handleLogin);
        }
    }


    createMain = () => {
        let main = document.createElement("main2");
        main.classList = "main2";
        main.innerHTML = `
        <fieldset class="login">
        <h3>Login</h3>

        <label>Email</label>
        <input class="email-login">

        <label>Password</label>
        <input class="password-login">

        <p class="invalid">Invalid email or password</p>

        <button class="login-btn btn-primary btn">Log in</button>

        

    </fieldset>


    <fieldset class="sign-up">

        <h3>Sign up</h3>
        <label>Name</label>
        <input>

        <label>Email</label>
        <input>

        <label>Password</label>
        <input>

        <button   class=" btn-primary btn"> Sign in</button>

       


    </fieldset>`;


        this.container.appendChild(main);

    }



    handleLogin = async(e) => {


        let email1 = document.querySelector(".email-login").value;

        let password1 = document.querySelector(".password-login").value;

        let person = {
            email: email1,
            password: password1
        }



        let response = await this.api.validPerson(person);

        console.log(response);

        if (response.status != 400) {


            new Home(response.id);

        } else {
            let email = document.querySelector(".email-login");

            email.classList.add("error");

            email.value = response.message;

            let password = document.querySelector(".password-login");

            password.classList.add("error");

            password.value = response.message;


        }




    }


    handleInvalidEmailOrPassword = (message) => {


        let error = document.createElement("div");
        error.classList = "error";

        error.innerHTML = `${message}`;

        let login = document.querySelector("login");

        login.appendChild(error);
    }





}

export default Login;