import React from 'react'
import Student from './Student'
import StateHandling from './StateHandling'
import UseEffectWork from './useEffectWork'
import Login from './Login'
import Registration from './Registration'
//import ImageManipulation from './ImageManipulation'
                                       //part of businees logic
function App() {
   
  // const studentdata=[{
  
  //   image:photo,
  //   name:"Saurabh Yadav",
  //   roll:"145",
  //   college:"ABES"
  // },
  //   {
  //     image:photo,
  //   name:"Sachin Yadav",
  //   roll:"146",
  //   college:"ABES"
  //   },
    

  //  { image:photo,  
  //   name:"Gaurav Yadav",
  //   roll:"147",
  //   college:"ABES"  
  //  }
  

  // ]
  return(
    <div>
      <div>
        <h2 style={{color:'blue'}}>Hello React JS</h2>
        <Login/>
        <br />
        <h2>Registration Form</h2>
        <Registration/>
             <div>
             {/* {
               {
                studentdata.map((ele)=>{
                  return(
                     <Student data ={ele}/>
                  )
                })
                 }
                } */}
            {/* //  < Student data={studentdata}/> */}
            {/* <UseEffectWork/> */}
              </div>  
              {/* <div>
                <ImageManipulation/>
              </div> */}


              {/* Here Start StateHandling */}
              <div>
                {/* <StateHandling/> */}
              </div>
           
          <div>
           {/* <Student image={<img src={photo} height={100} width={100} />} name="Saurabh"  roll="145"  college="ABESEC"/>          way to use component */}
        </div>
      </div>
    </div>
  )
}

export default App