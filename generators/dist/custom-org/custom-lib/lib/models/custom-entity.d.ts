import { IModel } from "ngx-repository";
export declare class CustomEntity implements IModel {
    static strings: {
        id: string;
        name: string;
        title: string;
        createdAt: string;
        updatedAt: string;
        createTitle: string;
        viewTitle: string;
        updateTitle: string;
        deleteTitle: string;
        deleteMessage: string;
    };
    id: number;
    name: string;
    title: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    toString(): string;
}
