// ['btn']

export interface IGenerateClassName {
    (prefix: string, classNameList: {
        [key: string]: boolean | undefined
    }): string
}

const generateClassName: IGenerateClassName = (prefix, classNameList)=>{
    
}