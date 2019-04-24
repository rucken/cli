import { InAccountDto } from '../dto/in-account.dto';
import { OutAccountDto } from '../dto/out-account.dto';
import { ICoreConfig } from '../interfaces/core-config.interface';
import { AccountService } from '../services/account.service';
export declare class AccountController {
    private readonly coreConfig;
    private accountService;
    constructor(coreConfig: ICoreConfig, accountService: AccountService);
    update(req: any, accountDto: InAccountDto): Promise<OutAccountDto>;
}
