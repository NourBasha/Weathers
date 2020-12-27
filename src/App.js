import React from 'react';
import Routes from './router/routes';
import Context from './utils/context';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSun,faCloud } from '@fortawesome/free-solid-svg-icons'


library.add(fab ,faSun,faCloud);

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