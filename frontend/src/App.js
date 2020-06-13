// import React, { useEffect } from 'react';
// import BaseRouter from './routes'
// import 'materialize-css/dist/css/materialize.min.css'
// import M from 'materialize-css/dist/js/materialize.min.js'
// import { BrowserRouter as Router } from 'react-router-dom'

// function App() {

//   useEffect(() => {
//     M.AutoInit()
//   })

//   return (
//     <div style={{ backgroundColor: '#F1F2F9' }}>
//       <Router>
//         < link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" ></link>
//         <BaseRouter />
//       </Router>
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import LP from './components/landingPage/LP'

function App() {

  useEffect(() => {
    M.AutoInit()
  })

  return (
    <div style={{ backgroundColor: '#F1F2F9' }}>
      < link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" ></link>
      <LP />
    </div>
  );
}

export default App;

