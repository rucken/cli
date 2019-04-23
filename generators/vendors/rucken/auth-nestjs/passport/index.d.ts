import { FacebookStrategy } from './facebook.strategy';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategySignIn, LocalStrategySignUp } from './local.strategy';
import { GooglePlusStrategy } from './google-plus.strategy';
export declare const AUTH_PASSPORT_STRATAGIES: (typeof FacebookStrategy | typeof GooglePlusStrategy | typeof JwtStrategy | typeof LocalStrategySignIn | typeof LocalStrategySignUp)[];
