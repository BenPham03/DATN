export interface DepartmentDto{
    id : string
    name: string
    description: string
    facultyId: string
    faculty: {
        name: string
    }
}
export interface CreateDepartmentDto{
    name: string
    description: string
    facultyId: string
}
export interface DeleteDepartmentDto{
    id: string
    name: string
    description: string
    facultyId: string
}
export interface UpdateDepartmentDto{
    id: string
    name: string
    description: string
    facultyId: string
}