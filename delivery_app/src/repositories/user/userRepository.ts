import {
    EntityRepository, getManager, Repository,
} from 'typeorm';

import {User, IUser} from '../../entity/user';
import {IUserRepository} from './userRepository.interface';


@EntityRepository(User)
class UserRepository extends Repository<User> implements IUserRepository {
    public async createUser(user: IUser): Promise<IUser> {
        return getManager().getRepository(User).save(user);
    }

    public async findUsers(): Promise<IUser[]> {
        return getManager().getRepository(User)
            .find({relations: ['carts']})
    }

    public async getCartUserByParams(email: Partial<IUser>): Promise<IUser[]>  {
        return getManager().getRepository(User)
            .find(email)
    }
    public async deleteUserById(findObject: Partial<IUser>) {
        return getManager().getRepository(User)
            .delete(findObject);
    }
}

export const userRepository = new UserRepository();
