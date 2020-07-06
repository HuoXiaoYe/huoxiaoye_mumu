// ['btn']

export interface IGenerateClassName {
    (prefix:string,):string
}

const generateClassName:IGenerateClassName = (prefix, o)