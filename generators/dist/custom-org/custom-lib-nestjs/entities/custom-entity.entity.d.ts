export declare class CustomEntity {
    id: number;
    name: string;
    title: string;
    createdAt: Date;
    updatedAt: Date;
    doBeforeInsertion(): void;
    doBeforeUpdate(): void;
}
