import React,{Fragment, useState,useEffect} from 'react';
import Home from './Components/Home/Home';


function App() {
  //Citas en el Local Storage

  //   let  quoteInitials = JSON.parse(localStorage.getItem('quotes'));
  //   if(!quoteInitials){
  //     quoteInitials = [];
  //   }

  // const [quotes,SetQuotes] = useState(quoteInitials);
  //Función que tome las citas actuales y agrega la nueva

  //Use Efec para realizar ciertas acciones cuando el state cambia

  return (
    <Fragment>
      <div className="container">        
         <Header>

         </Header>
         <Home>
           
         </Home>
      

      </div>
    </Fragment>
  );
}

export default App;
