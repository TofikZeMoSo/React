
import React, { useState } from 'react';

import MyLibraryTitle from './components/atoms/MylibraryTitle/MyLibraryTitle';
import MyTabs from './components/atoms/Tabs/MyTabs';
import MyAppBar from './components/organisms/AppBar/MyAppBar';
import AppBarWithCategories from './components/organisms/AppBarWithCategories/AppBarWithCategories';
import { Footer } from './components/organisms/Footer/Footer';



function App() {

   const [value,setValue]=useState(0);
   const [searchTerm,setSearchTerm]=useState('');

   const handleChange=(e:React.MouseEventHandler<SVGSVGElement>,newValue: number)=>{
    setValue(newValue);
    
  }
  const handleSearchTerm= (e:React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>,newValue:string)=>
  {
     setSearchTerm(newValue);
  }

  const closeSearch = ()=>
  {
    setSearchTerm('');
  }

  
   

  return (
    
<>     
    <div id="appbar">
       
    { value===1 &&  <AppBarWithCategories handleChange={handleChange}/> }
    {value===0 && <MyAppBar handleChange={handleChange}
    handleSearchTerm={handleSearchTerm}  closeSearch={closeSearch}/>  }

  <div id="librarytitle" style={{paddingLeft: '900px',marginTop:'89px'}}>
    <MyLibraryTitle />
    </div>

    <div id="mytabs" style={{paddingLeft: '450px'}}>
    <MyTabs searchTerm={searchTerm} />
    </div>

       </div>    

    <Footer />





    </>




   
   
  );
}



export default App;
