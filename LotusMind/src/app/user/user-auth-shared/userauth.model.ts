export interface IUser{
    userid:string,
    fname?:string,
    lname?:string    
}


export interface ILogin{
    org_id:number,
    userid:string,
    passwd:string
}

export interface AppResponse{
    response_result:string,
    response_status:string
}