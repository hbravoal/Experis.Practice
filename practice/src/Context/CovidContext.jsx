import React,{createContext,useState,useEffect,useReducer} from 'react';

import {POST} from 'Services/apiService';
import {LOADING,CATALOG,SEGMENT,CLIENT_INFO,ERROR,CLIENT_INFO_REFRESH,SEGMENT_REFRESH,CLIENT_ATTRIBUTES,CLIENT_ATTRIBUTES_REFRESH} from 'Types';
import CovidData from 'Data/CovidData';
import {CovidReducer} from 'Reducers/CovidReducer';

export const CovidContext = createContext();

  
const CovidContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(CovidReducer,CovidData);    
   
    return (
        <CovidContext.Provider
        value = {
            {
                dispatch,state
            }
        }
        >
                {children}
        </CovidContext.Provider>
    )
}
 
export default CovidContextProvider;