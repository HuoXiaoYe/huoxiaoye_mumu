// 移除readonly
export type RemoveReadonly<T> = {
    -readonly [P in keyof T]: T[P]
}