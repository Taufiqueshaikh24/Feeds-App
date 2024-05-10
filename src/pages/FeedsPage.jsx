import {  useNavigate , useLocation } from "react-router-dom"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { useContext } from "react";
import { toast } from "react-toastify";


import StateContext from "../Context/ContextApi";

export default function FeedsPage(){

        

      const { handleUpdate } = useContext(StateContext);
       let location = useLocation();
         const { FeedData } = location.state ||  {};
           console.log("Feed Data ",FeedData);
       let navigate = useNavigate();
       const [fields , setFields] = useState({
                feeds:'',
       });
       

       const handleChange = (e) => {
         const { name  , value } = e.target;
            console.log(name , value)
            setFields(prev => ({
             ...prev ,
            [name]:value
             }))
       }

       const handleSubmit = (e) => {
        e.preventDefault();
                  let date = new Date();
                 let Ddate = date.toLocaleDateString();
       


      //   Getting the current user for the local storage 
      let username ; 

   let userId ; 
  let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      currentUser.forEach((user) => {
               user.forEach((currentUser) => {
                 username = currentUser.username
                 userId  =  currentUser.id 
               })
      })

      const postFeeds = {
            userid : userId,
            id: uuidv4(),
            feed:fields.feeds, 
            Date : Ddate, 
  
      }

      // handleUpdate(postFeeds.feed);


      let checkLocalStorage ; 
      if(localStorage.getItem('userInfo') === null) {
            checkLocalStorage = []
      }else{
           checkLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
      }


            let userfeed ;
      checkLocalStorage.forEach((user) => {
            if(userId === user.id){
                  console.log("current id" + userId + "Local id" + user.id );
                  //  user.feeds.push(JSON.stringify(postFeeds));
                  
                  

            }
            // userfeed.push(JSON.stringify(postFeeds));
      
  });
        
            // Admin localstorage
      let adminStorage ; 
      if(localStorage.getItem('userStore') === null ){
              adminStorage = [];
      }else{
            adminStorage = JSON.parse(localStorage.getItem('userStore'));
      }

         adminStorage.push(postFeeds);

         localStorage.setItem('userStore' , JSON.stringify(adminStorage));

            toast.success('Sent Request to Admin')
             
            setFields((prev) => ({
                    feeds:"",
            }))

      //       // Feeds Local Storage
      //   let dataFromLocalStorage ; 
      //   if(localStorage.getItem('feeds') === null){
      //         dataFromLocalStorage = [];
      //   }else{
      //       dataFromLocalStorage = JSON.parse(localStorage.getItem('feeds'))
      //   }


      
      //   // Add new item to array
      //   dataFromLocalStorage.push(postFeeds);
      
      //   // Convert to JSON string and set to local storage
      //   localStorage.setItem('feeds', JSON.stringify(dataFromLocalStorage));

     

      //     location.reload();
    }
      return (
         <>
         <div className="center">

        <div className="form">
         <h2 className="header">Feeds Page</h2>
            <form onSubmit={handleSubmit}  >
            <div className="form-group">
                <label htmlFor="name">Enter Your Feed</label><br/>
                <input type="text" 
                id="name"
                name="feeds"
                placeholder="Enter your feeds"
                required
                value={fields.feeds}
                onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn">Create Post</button>
            <button  className="btn" onClick={() => navigate('/myposts')} >View My Posts</button>
            <button className="btn" onClick={() => navigate('/')} >View Other User Posts</button>
            </form>
        </div>
    </div>
         </>
      )
}

