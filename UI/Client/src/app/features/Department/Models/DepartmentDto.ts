export interface DepartmentDto{
    id : string
    name: string
    description: string
    facultyId: string
    status : number
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
    status: number
}
export interface UpdateDepartmentDto{
    id: string
    name: string
    description: string
    facultyId: string
    status: number
}