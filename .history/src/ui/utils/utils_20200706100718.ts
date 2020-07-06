// ['btn']

export interface IGenerateClassName {
    (prefix: string, classNameList: {
        [key: string]: boolean | undefined
    }): string
}
export const generateClassName: IGenerateClassName = (prefix, classNameList)=>{

    return ''
}