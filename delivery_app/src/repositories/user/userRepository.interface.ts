import { IUser } from '../../entity/user';

export interface IUserRepository {
    createUser(user: IUser): Promise<IUser>,

    findUsers(): Promise<IUser[]>
}
