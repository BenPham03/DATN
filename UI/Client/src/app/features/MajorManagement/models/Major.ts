import { Faculty } from "./Faculty"

export interface MajorDto{
    id : string
    name: string,
    description: string,
    majorCode: string,
    facultyId : string,
    status: number,
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
  hasNextPage: boolean,
}
export interface MajorCreateDto{
    name: string,
    majorCode: string,
    description: string,
    facultyId: string
}

export interface MajorUpdateDto{
  id: string
  name: string,
    majorCode: string,
    description: string,
  facultyId: string,
  status: number,

}
export interface MajorDeleteDto{
  id: string
  name: string,
    majorCode: string,
    description: string,
  facultyId: string,
  status: number,
}