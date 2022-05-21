import { createStore, Store,useStore as baseUseStore} from "vuex";
import {InjectionKey} from "vue";
import {IUserInfo} from "@/api/tyeps/common";


// state 数据
const state = {
    count: 0,
    isCollapse: false,
    user: null as IUserInfo | null
}

//  state 的接口类型
// export interface State {
//     count: number,
//     isCollapse: boolean
// }

// 使用 type of 推导出来
export type State = typeof state
// 定义 injection key

export const key: InjectionKey<Store<State>> = Symbol('store')

export const store = createStore<State>({
    state,
    mutations: {
        increment (state) {
            state.count++
        },
        // 传参
        setIsCollapse(state, payload) {
            state.isCollapse = payload
        },
        // 设置用户信息
        setUser(state, payload) {
            state.user = payload
        }
    }
})

// 定义自己的 ' useStore ' 组合式函数

export function useStore () {
    return baseUseStore(key)
}
