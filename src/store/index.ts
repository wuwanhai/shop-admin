import { createStore, Store,useStore as baseUseStore} from "vuex";
import {InjectionKey} from "vue";

//  state 的接口类型

export interface State {
    count: number,
    isCollapse: boolean
}

// 定义 injection key

export const key: InjectionKey<Store<State>> = Symbol('store')

export const store = createStore<State>({
    state () {
        return {
            count: 0,
            isCollapse: true
        }
    },
    mutations: {
        increment (state) {
            state.count++
        },
        // 传参
        setIsCollapse(state, payload) {
            state.isCollapse = payload
        }
    }
})

// 定义自己的 ' useStore ' 组合式函数

export function useStore () {
    return baseUseStore(key)
}
