// ['btn']

interface IGenerateClassName {
    (prefix: string, classNameMap: {
        [key: string]: boolean | undefined
    }, className?: string): string
}
export const generateClassName: IGenerateClassName = (prefix, classNameMap, className) => {
    // 遍历map，
    let classArr: string[] = [];
    Object.keys(classNameMap).forEach(item => {
        classNameMap[item] && classArr.push(`${prefix}-${item}`)
    })
    return className ? ` ${className}` : '' + classArr.join(" ");
}