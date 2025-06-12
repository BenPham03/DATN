export interface SubjectDto{
    id :string
    subjectName :string
    subjectCode :string
    theoryCredits :number
    practiceCredits :number
    departmentId :string,
    status: number,
    department :{name:string} 
}
export interface SubjectCreateDto{
    subjectName :string
    subjectCode :string
    theoryCredits :number
    practiceCredits :number
    departmentId :string
}
export interface SubjectUpdateDto{
    id :string
    subjectName :string
    subjectCode :string
    theoryCredits :number
    practiceCredits :number
    status: number,
    departmentId :string
}
export interface SubjectDeleteDto{
    id :string
    subjectName :string
    subjectCode :string
    theoryCredits :number
    practiceCredits :number
    status: number,
    departmentId :string
}