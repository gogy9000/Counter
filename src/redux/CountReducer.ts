import {InferActionsTypes} from "./Store";

export type initStateType= typeof initState
const initState = {
    startValue:0,
    maxValue:0,
    count:0,
    isMaxValue:false


}
type actionsType=InferActionsTypes<typeof actions>
export const CountReducer = (state: initStateType = initState, action: actionsType):initStateType => {
    switch (action.type) {
        case "SET-MAX-VALUE":
            return {...state,maxValue:action.maxValue}
        case "SET-START-VALUE":
            return {...state,startValue: action.startValue}
        case "CHANGE-COUNTER-VALUE":
            return {...state,count: action.newValue}
        case "TOGGLE-IS-MAX-VALUE":
            return {...state,isMaxValue:action.IsMaxValue}
        default:
            return state
    }
}

export const actions={
    setStartValue:(startValue:number)=>({type:'SET-START-VALUE',startValue}as const),
    setMaxValue:(maxValue:number)=>({type:'SET-MAX-VALUE',maxValue}as const),
    changeCounterValue:(newValue:number)=>({type:'CHANGE-COUNTER-VALUE',newValue}as const),
    toggleIsMaxValue:(IsMaxValue:boolean)=>({type:'TOGGLE-IS-MAX-VALUE',IsMaxValue}as const)
}