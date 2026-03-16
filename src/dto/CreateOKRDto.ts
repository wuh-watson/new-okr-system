export class CreateOKRDto {
    title: string;
    description?: string;
    objectives: string[];
    dueDate: Date;
}