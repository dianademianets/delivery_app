import { IUser } from '../../entity/user';
import { userRepository } from '../../repositories';

class UserService {
    public async createUser(user: IUser): Promise<IUser> {
        return userRepository.createUser({ ...user });
    }

    public async findUsers(): Promise<IUser[]> {
        return userRepository.findUsers();
    }
}

export const userService = new UserService();
