
import {GET} from './apiService';
import {COVID_LIST,PROGRESS,LOADING} from 'Types';


export const GetCovidList = async(dispatch) => {
    // dispatch({type:RESET_LIST});
    dispatch({type:LOADING,data:true});
    let dataResult =await GET(process.env.API_URL,process.env.ACTION_SUMMARY, {
      headers: {
        
      }
     });
        
        if(dataResult.Error){
           
          // dispatch({type:ERROR,data:{HaveError:true,Message:dataResult.ErrorMessage}});
          // dispatch({type:RESET_FORM});
          return false;
        }
        console.log(dataResult);
        if(!dataResult.Error || !dataResult.Data){
          
          dispatch({type:COVID_LIST,data:dataResult.Data.Countries});
          dispatch({type:PROGRESS,data:100});
          dispatch({type:LOADING,data:false});
          return true;
        }else{
            return false;
        }        
        return true;
}