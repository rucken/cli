import { ContentType1524199022084 } from './content-type.entity';
import { Group1524199022084 } from './group.entity';
export declare class Permission1524199022084 {
    id: number;
    name: string;
    title: string;
    contentType: ContentType1524199022084;
    groups: Group1524199022084[];
    doBeforeInsertion(): void;
    doBeforeUpdate(): void;
}
