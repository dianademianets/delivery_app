import {IUser} from '../../entity/user';
import {userRepository} from '../../repositories';

class UserService {
    public async createUser(user: IUser): Promise<IUser> {
        return userRepository.createUser({...user});
    }

    public async findUsers(): Promise<IUser[]> {
        return userRepository.findUsers();
    }
    public async getCartUserByParams(email:string): Promise<IUser[]> {
        return userRepository.getCartUserByParams({email});
    }

    public async deleteUserById(id: number) {
        return userRepository.deleteUserById({id});
    }
}

export const userService = new UserService();
