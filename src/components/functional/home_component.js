import React from 'react';
import './home_component.scss';
import * as DATA  from '../../utils/data';
import axios from 'axios';

const Home = () => {

    
   async function handleCityChange(event){
         
        await axios.get(DATA.BASE_URL+'q='+event.target.value+'&appid='+DATA.API_KEY)
        .then(res =>{
            if(res.data){
                console.log(res);
            }
        }).catch(err => {
            console.log(' error is : ' +err);
        })
    }

        return(
            <div className="container-fluid home" >

                <div className="top row "> 
                  
                        <div className="col query d-flex justify-content-center ">
                                   
                                    <input className="input" type="text" placeholder="Enter city" onChange={handleCityChange} />
                                    <button className="btn btn-primary">
                                            test
                                    </button>
                        </div>
                    
                </div>

              

            </div>
        )
    

}


export default Home;