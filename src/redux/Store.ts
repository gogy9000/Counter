import {combineReducers, legacy_createStore as createStore} from "redux";
import {CountReducer} from "./CountReducer";
import {loadState, saveState} from "../utils/LocalStorageUtils";

type rootReducerType = typeof rootReducer
export type AppStateType=ReturnType<rootReducerType>
export type InferActionsTypes <T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
const rootReducer=combineReducers({CountReducer:CountReducer})

export const store=createStore(rootReducer,loadState())

store.subscribe(() => {
    saveState({CountReducer:store.getState().CountReducer});
});
// @ts-ignore
window.store = store