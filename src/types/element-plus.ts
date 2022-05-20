import {ElForm, FormItemRule} from "element-plus";

export type IELFORM = InstanceType<typeof ElForm>

// TS 提示规则
export type IFormRule = Record<string, FormItemRule[]>
