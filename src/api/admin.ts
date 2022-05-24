import request from "@/utils/request";
import {IgetBlogInfo} from "@/api/tyeps/common";
import {Admin, AdminPostDate, IListParams} from "@/api/tyeps/admin";


// 获取信息
export const getAdmins = (params: IListParams) => {
    return request<{
        count: number,
        list: Admin[]
    }> ({
        method:'GET',
        url:'/api/admin',
        params
    })
}

// 添加
export const createAdmins = (data: AdminPostDate) => {
    return request ({
        method:'POST',
        url:'/api/admin',
        data
    })
}

// 删除

export const deleteAdmins = (id:number) => {
    return request ({
        method:'PUT',
        url:`/api/admin/${id}`
    })
}

// 更新

export const updateAdmins = (id:number, data: AdminPostDate) => {
    return request ({
        method:'PUT',
        url:`/api/admin/${id}`,
        data
    })
}

// 更新状态

export const updateAdminStatus = (id:number, status: number) => {
    return request ({
        method:'PUT',
        url:`/api/admin-set_status/${id}`
    })
}
