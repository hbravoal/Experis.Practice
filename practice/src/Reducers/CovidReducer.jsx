import {LOADING,PROGRESS,COVID_LIST,RESET_LIST,ERROR} from 'Types';

export const CovidReducer = (actualState, action)=>{
    switch (action.type){
      case LOADING:
      return {
        ...actualState,
        Loading:action.data
      }
      case PROGRESS:
      return {
        ...actualState,
        Progress:action.data
      }
      case ERROR:
      return {
        ...actualState,
        Errors:action.data
      }
      
      case COVID_LIST:
        return {
          ...actualState,
          
          Countries:action.data,
          Errors:{HaveError:false}
        }
        case RESET_LIST:
          return {
            ...actualState,
            Data:[],
            Errors:{HaveError:false}
          }
        
  
      default:
        return actualState;
    }
    
  
  }

  