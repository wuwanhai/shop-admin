 // any 为泛型，也就是任意类型,
 // T 用于接受自定义类型，也就是二次封装
 //

 // 数据类型
export interface IgetBlogInfo<T = any> {
    code: number,
    status: number,
    msg: string,
    data: T,
}

// 路有菜单
export interface IMenu {
    path: String,
    title: String,
    icon: String,
    header: String,
    is_header: String,
    children: String,
}

// 用户信息

 export interface IUserInfo {
     id: number,
     account: string,
     head_pic: string,
 }
 // 数据类型
 export interface ILoginResponseInfo<T = any> {
     token: string,
     expires_time: number,
     menus: IMenu,
     unique_auth: string[],
     user_info: IUserInfo,
     logo: string,
     logo_square: string,
     version: string,
     newOrderAudioLink: string,
 }
