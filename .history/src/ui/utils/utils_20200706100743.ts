// ['btn']

export interface IGenerateClassName {
    (prefix: string, classNameMap: {
        [key: string]: boolean | undefined
    }): string
}
export const generateClassName: IGenerateClassName = (prefix, classNameMap)=>{
    // 遍历数组，
    return ''
}