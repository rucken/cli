export declare const AUTH_CONFIGS: ({
    provide: string;
    useValue: import("..").IJwtConfig;
} | {
    provide: string;
    useValue: import("..").IFacebookConfig;
} | {
    provide: string;
    useValue: import("..").IGooglePlusConfig;
})[];
