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
import { UserController } from "../UserController.js";
const authController = new AuthController();
const userController = new UserController();
const emailInput = document.querySelector("#login");
const mdpInput = document.querySelector("#mdp");
const submitBtn = document.querySelector(".btn-connexion");
const errorMsg = document.querySelector(".error-message");
submitBtn.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    if (!emailInput.value || !mdpInput.value) {
        errorMsg.innerHTML = "Un des deux champs est vide.";
    }
    else {
        const isLogged = yield authController.login(emailInput.value, mdpInput.value);
        if (isLogged) {
            console.log("La connexion a réussi !");
            const user = yield userController.getCurrentUser();
            console.log(user);
            //  location.href = "/accueil.html";
        }
        else {
            errorMsg.innerHTML = authController.errorMessage;
        }
    }
}));
