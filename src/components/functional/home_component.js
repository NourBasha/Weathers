import React, {useState} from 'react';
import './home_component.scss';
import * as DATA  from '../../utils/data';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Home = () => {

        const [city_name, setCityName] = useState('');
        const [temp, setTemp] = useState('');
        const [feels_like, setFeelsLike] = useState('');
        const [overall, setOverAll] = useState('');
        const [iconUrl, serIconUrl] = useState('');
        const[celicus, setCelicus] = useState(true);

    
    const  handleCityChange =  (event) => {
                setCityName(event.target.value);
    }

     async function handleSubmit  (event)  {
         event.preventDefault();
        console.log("inside handle submit ");

        await axios.get(DATA.BASE_URL+'q='+event.target.cityName.value+'&appid='+DATA.API_KEY)
        .then(res =>{
            if(res.data){
                console.log( res.data);
               setTemp(res.data.main.temp);
               setFeelsLike(res.data.main.feels_like);
               setOverAll(res.data.weather[0].description) ;
               console.log(res.data.weather[0].icon);
               setIcon(res.data.weather[0].icon);
            }
        }).catch(err => {
            console.log(' error is : ' +err);
        })
    }

     const setIcon = (id) => {
          serIconUrl("http://openweathermap.org/img/wn/"+ id+"@4x.png");
    }

//    const changeDegreeMeasuremnet = (event) => {
//        event.preventDefault();
//               console.log(event.target.value);
//    }

const toCelicus = (tem) => {
     
    return (
       Math.round(tem - 273.15)
    )
    
}
        return(
            <div className="container-fluid home" >

                <div className="row top "> 
                        <div className="col query d-flex justify-content-center ">
                                   
                                   <form onSubmit={handleSubmit}>
                                    <input id="cityName" className="input" type="text" placeholder="Enter city" onChange={handleCityChange} />
                                        <button type="submit" className="btn btn-primary">
                                                test
                                        </button>
                                   </form>
                                   
                        </div>  
                </div>

                <div className="row  data m-0 mt-3"> 
                    
                        <div className="col-4 colName d-flex justify-content-end align-content-center">
                            {
                                city_name
                                ?  <h3 className="align-self-center" > {city_name.charAt(0).toUpperCase()+city_name.slice(1)} </h3>
                                : <p className="align-self-center" >  </p>
                            }
                        </div>
                        <div className="col-3 colIcon d-flex justify-content-center ">
                              <div className="container">
                              <div className="row">
                               {
                                   city_name
                                   ?
                                    <img className="img-fluid " id="iconId"  src={iconUrl} />
                                    : <p className="align-self-center">   </p>
                               }
                                
                               </div>

                               <div className="row d-flex justify-content-center">
                                    { overall
                                    ?  <p className="justify-self-center"> {overall} </p> 
                                    : <p>  </p>
                                    }
                               </div>
                              </div>
                        </div>
                        <div className="col-5 colData  d-flex justify-content-start  ">
                               <div className="align-self-center">
                                   

                                    {temp 
                                    ?   celicus 
                                        ?  <h2> {toCelicus(temp)}&deg; C</h2> 
                                        : <h2> {temp}</h2>

                                    : <p>  </p>
                                    }
                                        {feels_like 
                                    ?   celicus
                                        ?  <p>Feels like {toCelicus(feels_like)} C&deg;</p> 
                                        : <p> {feels_like}</p>
                                    : <p>  </p>
                                    }
                               
                               </div>
                        </div>  
                 </div>

                    

            </div>
        )
    

}


export default Home;