import React, { Context, createContext, useReducer, useContext } from 'react'


// action-type的类型
const ADD_COUNTER = 'ADD_COUNTER'
// state的类型,action的类型
type StateData = { count: number }
type CountAction = { type?: typeof ADD_COUNTER }

// 创建一个同步action
export const addActions: () => CountAction = () => ({ type: ADD_COUNTER })

export const initialState: StateData = {
  // 初始化的state
  count: 1
}

// reducer 的类型
type CountReducer = React.Reducer<StateData, CountAction>

export const reducer: CountReducer = (state, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return { ...state, count: state.count + 1 }
    default:
      return state
  }
}
// 创建上下文实例
export const ProviderContext: Context<{
  state: StateData
  dispatch?: React.Dispatch<CountAction>
}> = createContext({
  state: initialState
}) 

// 高阶组件，给函数组件注入上下文
export const providerHoc = (reducer: CountReducer, initialState: StateData) => (
  Com: React.FC<any>
) => {
  return () => {
    const [state, dispatch] = useReducer<CountReducer>(reducer, initialState)
    return (
      <ProviderContext.Provider value={{ state, dispatch }}>
        <Com />
      </ProviderContext.Provider>
    )
  }
}

function Test(): JSX.Element {
  // 通过ProviderContext这个上下文实例获取到 value，dispatch方法
  const { state, dispatch } = useContext(ProviderContext)

  console.log(state)
  return (
    <React.Fragment>
      <h2>{state.count}</h2>
      {/*使用dispatch分发action，触发reducer返回新的state*/}
      <button onClick={() => dispatch && dispatch({ type: ADD_COUNTER })}>
        ++
      </button>
    </React.Fragment>
  )
}
export const HOCWithTest = providerHoc(reducer, initialState)(Test)