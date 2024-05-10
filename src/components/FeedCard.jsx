import { useNavigate , Link } from "react-router-dom";
import { useContext } from "react";
import StateContext from "../Context/ContextApi";

export default function FeedCard({data}){

  const { handleUpdate}  = useContext(StateContext);

  let navigate = useNavigate();

  let username ; 

   let userId ; 
  let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if(currentUser){currentUser?.forEach((user) => {
               user.forEach((currentUser) => {
                 username = currentUser.username
                 userId  =  currentUser.id 
               })
      })}else{
              navigate('/login');
      }
        



    const handleDelete = (e) => {
           e.preventDefault();
             if(userId === data.userid){
                  let local ; 
                  if(localStorage.getItem('feeds') === null){
                      local = [];
                  }else{
                      local = JSON.parse(localStorage.getItem('feeds'))
                  }
                    let update = local.filter((feed) => feed.id !== data.id);
                    
                    localStorage.setItem('feeds' , JSON.stringify(update));
             }

             location.reload();
    };


      const  handleEdit = (e) => {
              e.preventDefault();
             let FeedData = data ; 
              navigate(`/createFeeds/${data.id}`);
      }

       

    return (
  
         <div className="card">
            <div className="info">
              <h2 className="para2">{data.feed}</h2>
              <p className="para3">Date:{data.Date}</p>
              <p className="para2">Created By : {username}</p>
              <button className="btn2" onClick={handleDelete} >Delete</button>
              <button className="btn3" onClick={handleEdit}>Update</button>
            </div>
         </div>
    )
}