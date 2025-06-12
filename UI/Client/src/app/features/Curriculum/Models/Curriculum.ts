export interface CurriculumDto{
    id: string
    name: string
    academicYear: string
    specializationId: string
    status: number
    outputStandard: number
    specialization: {
        name: string
    }
}
export interface CurriculumCreateDto{
    name: string
    academicYear: string
    specializationId: string
    outputStandard: number
}
export interface CurriculumUpdateDto{
    id: string
    name: string
    academicYear: string
    specializationId: string
    status: number
    outputStandard: number
}
export interface CurriculumDeleteDto{
    id: string
    name: string
    academicYear: string
    specializationId: string
    status: number
    outputStandard: number
}
export enum outputStandard{
    Bachelor,
    Master,
    Doctoral
}