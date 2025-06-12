export interface AccountDto{
    id : string,
    username : string,
    email : string,
    roles : []
}
export interface AssignRoleDto{
    username : string,
    role : string
}
export interface ResetPasswordDto{
    username : string,
    newPassword : string
}

export interface RegisterDto{
    username : string,
    email : string,
    password : string
}
