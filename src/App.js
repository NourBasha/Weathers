import React from 'react';
import Routes from './router/routes';
import Context from './utils/context';
const App = () => {

  return(
      <div>
          <Context.Provider 
                value={{

                }}>
                  
               <Routes />
          </Context.Provider>
         
      </div>
  )

}

export default App;