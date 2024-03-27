import { UserController } from "./UserController.js";


export async function isThereUser(): Promise<boolean> {
    const userController = new UserController();
    try {   
        await userController.getCurrentUser();
    } catch(e) {
        return false;
    }
    

    if(userController.currentUser === null) {
        return false;
    } else {
        return true;
    }
}

