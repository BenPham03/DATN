export interface CurriculumsubjectDto{
    curriculumId : string
    subjectId : string
    curriculum : {
        name : string
    }
    subject : {
        subjectName : string
    }
    semester : number
}
export interface CreateCurriculumsubjectDto{
    curriculumId : string
    subjectId : string
    semester: number
}
export interface UpdateCurriculumsubjectDto{
    curriculumId : string
    subjectId : string
    semester: number
}
export interface DeleteCurriculumsubjectDto{
    curriculumId : string
    subjectId : string
    semester: number
}