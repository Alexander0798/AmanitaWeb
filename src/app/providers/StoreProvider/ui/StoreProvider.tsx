import { FC, ReactNode } from "react";
import { StateSchema } from "../config/StateSchema";
import { createReduxStore } from "../config/store";
import { Provider } from "react-redux";
import { ReducersMapObject } from "@reduxjs/toolkit";

interface StoreProviderProps {
    children: ReactNode;
    initialState?: Partial<StateSchema>;
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { children, initialState, asyncReducers } = props;
    const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>);
    return <Provider store={store}>{children}</Provider>;
};
