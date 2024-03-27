var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UserController } from "./UserController.js";
export function isThereUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const userController = new UserController();
        try {
            yield userController.getCurrentUser();
        }
        catch (e) {
            return false;
        }
        if (userController.currentUser === null) {
            return false;
        }
        else {
            return true;
        }
    });
}
