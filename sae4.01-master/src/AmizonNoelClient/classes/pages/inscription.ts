import { AuthController } from "../AuthController.js";


const authController = new AuthController();

const nomInput = document.querySelector("#nom") as HTMLInputElement;
const prenomInput = document.querySelector("#prenom") as HTMLInputElement;
const adresseInput = document.querySelector("#adresse") as HTMLInputElement;
const mailInput = document.querySelector("#mail") as HTMLInputElement;
const loginInput = document.querySelector("#login") as HTMLInputElement;
const mdpInput = document.querySelector("#mdp") as HTMLInputElement;
const submitBtn = document.querySelector(".btn-inscription") as HTMLInputElement;
const errorMsg = document.querySelector(".error-message") as HTMLSpanElement;
const successMsg = document.querySelector(".success-message") as HTMLSpanElement;

submitBtn.addEventListener("click", async () => {
    const inputs = [
        nomInput,
        prenomInput,
        adresseInput,
        mailInput,
        loginInput,
        mdpInput
    ];

    const isEmpty = inputs.some(input => input.value === "");

    if(isEmpty) {
        errorMsg.innerHTML = "Un ou plusieurs champs sont vides.";
    } else {
        const isSignedUp = await authController.signUp(nomInput.value, prenomInput.value, adresseInput.value, mailInput.value, loginInput.value, mdpInput.value);
        if(isSignedUp) {

            successMsg.innerHTML = "L'inscription a réussi.";
            const isLogged = await authController.login(mailInput.value, mdpInput.value);

            if(isLogged) {
                console.log("La connexion a réussi !");
                location.href = "/accueil.html";
            }

        } else {
            errorMsg.innerHTML = authController.errorMessage;
        }
    }
})