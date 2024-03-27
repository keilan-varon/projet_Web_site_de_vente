import { AuthController } from "../AuthController.js";
import { UserController } from "../UserController.js";


const authController = new AuthController();
const userController = new UserController();
const emailInput = document.querySelector("#login") as HTMLInputElement;
const mdpInput = document.querySelector("#mdp") as HTMLInputElement;
const submitBtn = document.querySelector(".btn-connexion") as HTMLInputElement;
const errorMsg = document.querySelector(".error-message") as HTMLSpanElement;

submitBtn.addEventListener("click", async () => {
    if(!emailInput.value || !mdpInput.value) {
        errorMsg.innerHTML = "Un des deux champs est vide."
    } else {
        const isLogged = await authController.login(emailInput.value, mdpInput.value);
        if(isLogged) {
            console.log("La connexion a réussi !");
            const user = await userController.getCurrentUser();
            console.log(user);
            //  location.href = "/accueil.html";
        } else {
            errorMsg.innerHTML = authController.errorMessage;
        }
    }
})