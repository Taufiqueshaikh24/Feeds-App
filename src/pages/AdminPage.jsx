
import AdminFeedCard from "../components/AdminFeedCard";



export default function AdminPage(){

  let Admin = JSON.parse(localStorage.getItem('userStore'));
  let currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
       
       
           
        

      return(
        <>
          
           { Admin && Admin?.length !== 0  || Admin?.length === null || Admin === undefined ?  (
             <>
         {Admin && Admin.map((feed) => {
           return <AdminFeedCard key={feed.id} data={feed} />
          })}
        </>
        ) : (
          <>
          
               <div className="notfound">

            <h1 className="requests">No Request  Yet !</h1>
               </div>
           </>
        )}
        </>
      )
}