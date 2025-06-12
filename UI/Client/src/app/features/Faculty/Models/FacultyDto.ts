export interface FacultyDto{
    id: string;
    name: string;
    description: string;
    status: number;
}
export interface DeleteFacultyDto{
    id: string;
    name: string;
    description: string;
    status: number;
}
export interface CreateFacultyDto{
    name: string;
    description: string;
    status: number;
}
export interface UpdateFacultyDto{
    id: string;
    name: string;
    description: string;
    status: number;
}