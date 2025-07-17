import React from 'react';
import HomePage from "./pages/HomePage.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";

const App = () => {
    return (
       <>
          <HomePage/>
           <LoadingSpinner/>
       </>
    );
};

export default App;