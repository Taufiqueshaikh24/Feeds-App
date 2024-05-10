import { createContext , useState } from "react";
import Navbar from "../components/Navbar";

const StateContext = createContext();

export const StateProvider = ({children}) => {


  // let username ; 
  // let userId ;
  // let currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //    if(currentUser){ currentUser?.forEach((user) => {
  //              user?.forEach((currentUser) => {
  //                username = currentUser.username
  //                userId = currentUser.id
  //              })
  //     })}else{
  //            return (<>
  //                  {/* <Navbar /> */}
  //            </>);
  //     }



  //        const handleUpdate = ({ feed }) => {
  //      if(userId === data.userid){
  //        let local ; 
  //        if(localStorage.getItem('feeds') === null){
  //          local = [];
  //         }else{
  //           local = JSON.parse(localStorage.getItem('feeds'))
  //         }
  //         let update = local.filter((feed) => feed.id === data.id);
             
  //           // local.feeds = feed;

  //           // const updatedFeed = JSON.stringify(local)

  //           // localStorage.setItem('feeds' , updatedFeed);
            
            
  //          console.log(update);
          

          
  //         // localStorage.setItem('feeds' , JSON.stringify(update));
  //  }


  //    }

    return (
        <StateContext.Provider value={{
                // handleUpdate,
        }}>
            {children}
        </StateContext.Provider>
    )
};

export default StateContext;