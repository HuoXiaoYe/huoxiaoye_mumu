export function useDebounce<T extends (...args: any[]) => void>
    (func: T, delay: number, immediate: boolean = false) {
    let timer: ReturnType<typeof setTimeout>;
    return function (...args: ReturnFuncArgsType<T>) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            if (!immediate) func.apply(null, args)
        }, delay)
        if (immediate && !timer) func.apply(null, [...args])
    }
}
export function useThrottle<T extends (...args: any[]) => void>(func: T, delay: number) {
    let timer: ReturnType<typeof setTimeout> | null = null;
    return function (...args: ReturnFuncArgsType<T>) {
        if (timer === null) return;
        timer = setTimeout(() => {
            timer = null
            func(...args);
        }, delay);
    };
}
export function generateClassName<T extends Record<string, boolean | undefined>>
    (prefix: string, classNameMap: T, className: string): string {
    let classArr: string[] = [];
    Object.keys(classNameMap).forEach(item => {
        classNameMap[item] && classArr.push(`${prefix}-${item}`)
    })
    return (className ? `${className} ` : '') + classArr.join(" ");
}
export function isSameMap<T extends Record<string, any>, U extends Record<string, any>>(
    m1: T,
    m2: U,
) {
    if (Object.keys(m1).length !== Object.keys(m2).length) return false;
    return Object.keys(m1).some(k => m1[k] !== m2[k]);
}
export function isEqual<T extends Record<string, any>, U extends Record<string, any>>
    (
        obj1: T,
        obj2: U,
        fields: Array<Extract<keyof T, keyof U>>
    ): boolean {
    return fields.every((field) => (obj1[field]) === (obj2[field]));
}


