var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { AuthController } from "../AuthController.js";
const authController = new AuthController();
const nomInput = document.querySelector("#nom");
const prenomInput = document.querySelector("#prenom");
const adresseInput = document.querySelector("#adresse");
const mailInput = document.querySelector("#mail");
const loginInput = document.querySelector("#login");
const mdpInput = document.querySelector("#mdp");
const submitBtn = document.querySelector(".btn-inscription");
const errorMsg = document.querySelector(".error-message");
const successMsg = document.querySelector(".success-message");
submitBtn.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    const inputs = [
        nomInput,
        prenomInput,
        adresseInput,
        mailInput,
        loginInput,
        mdpInput
    ];
    const isEmpty = inputs.some(input => input.value === "");
    if (isEmpty) {
        errorMsg.innerHTML = "Un ou plusieurs champs sont vides.";
    }
    else {
        const isSignedUp = yield authController.signUp(nomInput.value, prenomInput.value, adresseInput.value, mailInput.value, loginInput.value, mdpInput.value);
        if (isSignedUp) {
            successMsg.innerHTML = "L'inscription a réussi.";
            const isLogged = yield authController.login(mailInput.value, mdpInput.value);
            if (isLogged) {
                console.log("La connexion a réussi !");
                location.href = "/accueil.html";
            }
        }
        else {
            errorMsg.innerHTML = authController.errorMessage;
        }
    }
}));
