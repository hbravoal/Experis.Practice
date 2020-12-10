import React,{useEffect,Fragment,useState,useContext} from 'react';
import {POST} from 'Services/apiService';
import {CovidContext} from 'Context/CovidContext';
import {GetCovidList} from 'Services/consumeService';
const Home = () => {
    const {state: {Countries,Progress,Loading},dispatch} = useContext(CovidContext);


    useEffect(() => {
        GetCovidList(dispatch);
        console.log(Countries)
        return () => {
            
        };
    }, []);
    return (
        <Fragment>
            <section className="home-main ">           
            <div className="main">
            <h1 className="color-white">Covid Report</h1>
            <p className="color-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium expedita unde inventore ex! Officia corrupti quisquam itaque soluta est, corporis mollitia culpa iusto. In laudantium aliquid quaerat. Rem, culpa placeat?</p>
            </div>
            <h1 className>Details</h1>
            {
                    Loading && <h3>Cargando...</h3>
            }
            <div className="cards container">
             
                {
            Countries.map((item,index)=>{
            return (
                <div className="card">
                <div className="card-title">
                    <h1>{item.Country}</h1>
                </div>
                <div className="card-container">
                    <p>Date: {item.Date}</p>
                    <p className="new">NewConfirmed: {item.NewConfirmed}</p>
                    <p className="newRecovered">NewRecovered: {item.NewRecovered}</p>
                    <p className="newDeaths">NewDeaths: {item.NewDeaths}</p>
                    
                </div>
                <div className="card-footer">

                </div>
            </div>
            )
            })
            }
            </div>
           
                </section>
        </Fragment>


      );
}
 
export default Home;