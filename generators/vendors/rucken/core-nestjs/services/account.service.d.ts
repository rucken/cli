import { User } from '../entities/user.entity';
import { UsersService } from './users.service';
export declare class AccountService {
    private readonly usersService;
    constructor(usersService: UsersService);
    update(options: {
        id: number;
        user: User;
    }): Promise<{
        user: User;
    }>;
}
