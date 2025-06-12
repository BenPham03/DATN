import { MajorDto } from "../../MajorManagement/models/Major"


export interface  SpecializationDto{
    id : string,
    name : String,
    description : string,
    majorId: string,
    major : MajorDto | null,
    status: number
}
export interface  SpecializationCreateDto{
    name : String,
    description : string,
    majorId : string
}

export interface  SpecializationUpdateDto{
    id: string,
    name : String,
    description : string,
    majorId : string
    status: number
}
export interface  SpecializationDeleteDto{
    id: string,
    name : String,
    description : string,
    majorId : string
    status: number
}

export interface GetSepecializationResponse{
    pageIndex: number,
  totalPages: number,
  totalCount: number,
  items: SpecializationDto[]
  hasPreviousPage: boolean,
  hasNextPage: boolean
}

