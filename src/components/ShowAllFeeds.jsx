
import { useNavigate } from "react-router-dom";

export default function ShowAllFeeds({feed}){

    let navigate = useNavigate();

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






        console.log("Data",feed.userid);
     
        const user = JSON.parse(localStorage.getItem('userInfo'));
         let  userid ;
         let matched; 
         let m =  user.filter((u) => {
                return  feed.userid === u.id
          })

            let username ; 
           m.forEach((e) =>{
               username = e.username
           })
           


        
           let userId ;
           let currentUser = JSON.parse(localStorage.getItem('currentUser'));
              if(currentUser){ currentUser?.forEach((user) => {
                        user?.forEach((currentUser) => {
                        //   username = currentUser.username
                          userId = currentUser.id
                        })
               })}else{
                        navigate('/login');       
               }

            let currentUserFeed = JSON.parse(localStorage.getItem('feeds'));
            console.log("currentuserFeed",  currentUserFeed);
            let availFeed  = currentUserFeed.filter((f) =>  f.userid === userId);
            console.log("available_feed",availFeed);

             let logginuser_id; 
            let LoggedInId = availFeed.map((LoggedInUserID) => {
                    console.log(userId + " | | " + LoggedInUserID.userid)
                     logginuser_id =  LoggedInUserID.userid
            });

            console.log("Logged_User", logginuser_id);
           
        //   console.log("userid" , userid);
        // if(feed.userid  === userid ){
        //        console.log("MAtched",userid);
        // }  


        const getFeed = JSON.parse(localStorage.getItem('feeds'));
        console.log(getFeed);

      return (
          <> 
             {feed.userid !== userId ? (
                  <>
                     
                       <div className="card">
                      <div className="info">
                        <h2 className="para2">{feed.feed}</h2>
                        <p className="para3">Date:{feed.Date}</p>
                        <p className="para2">Created By : {username}</p>
                      </div>
                    </div>
                  </>
             ) : (<>
                    <div className="notfound">
                    <h1>No Feeds Yet !</h1>
                    </div>
             </>)} 
          </>
      )
}