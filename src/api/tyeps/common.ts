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
