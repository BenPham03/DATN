import { Faculty } from "./Faculty"

export interface MajorDto{
    name: string,
    description: string,
    faculty: {
        name :string
    }
}
export interface Response{
    pageIndex: number,
  totalPages: number,
  totalCount: number,
  items: MajorDto[]
  hasPreviousPage: boolean,
  hasNextPage: boolean
}
export interface GetFacultyResponse{
    pageIndex: number,
  totalPages: number,
  totalCount: number,
  items: Faculty[]
  hasPreviousPage: boolean,
  hasNextPage: boolean
}
export interface MajorCreateDto{
    name: string,
    description: string,
    facultyId: string
}