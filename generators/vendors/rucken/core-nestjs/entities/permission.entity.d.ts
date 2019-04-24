import { ContentType } from '../entities/content-type.entity';
import { Group } from '../entities/group.entity';
export declare class Permission {
    id: number;
    name: string;
    title: string;
    contentType: ContentType;
    groups: Group[];
    doBeforeInsertion(): void;
    doBeforeUpdate(): void;
}
