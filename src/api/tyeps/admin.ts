//
export interface IListParams  {
    page: number,
    limit: number
    name: string
    rules: string
    status: 0 | 1 | ''
}

export interface Admin  {
    account: string,
    id: number,
    pwd: string,
    head_pic: string,
    real_name: string,
    status: number,
    is_del: number,
}

export interface AdminPostDate {
    account: string,
    pwd: string,
    head_pic: string,
    real_name: string,
    status: number,
    is_del: number,
}
