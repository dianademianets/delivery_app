import {
    EntityRepository, getManager, Repository,
} from 'typeorm';

import { User, IUser } from '../../entity/user';
import { IUserRepository } from './userRepository.interface';

@EntityRepository(User)
class UserRepository extends Repository<User> implements IUserRepository {
    public async createUser(user: IUser): Promise<IUser> {
        return getManager().getRepository(User).save(user);
    }

    public async findUsers(): Promise<IUser[]> {
        return getManager().getRepository(User)
            .find({relations:['carts']})}
}

export const userRepository = new UserRepository();
