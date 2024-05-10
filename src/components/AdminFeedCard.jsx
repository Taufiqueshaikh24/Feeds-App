import { toast } from "react-toastify";


export default function AdminFeedCard({data}){
     
        const user  = JSON.parse(localStorage.getItem('userInfo'));
        let userId ;
        let getUser = user?.filter((e) => {
                   userId = e.id 
                 return e.id === data.userid
            
        })

        const feeds  = JSON.parse(localStorage.getItem('feeds'));
        let getFeed  =  feeds?.filter((e) => {
                return  userId  === e.userid;
        })
        console.log("get",getFeed);

        console.log(data.userid);

        let username ; 
        console.log(getUser.map((e) => {
                username = e.username
        }));
          

        const  handleDelete = (e) =>{
               e.preventDefault();
               if(getUser){
                  let local ; 
               if(localStorage.getItem('userStore') === null){
                   local = [];
               }else{
                   local = JSON.parse(localStorage.getItem('userStore'))
               }
                 let update = local?.filter((feed) => feed.id !== data.id);
                 
                 localStorage.setItem('userStore' , JSON.stringify(update));
                }
                toast.success('Feed Has Been Deleted')
               setTimeout(() => {
                      location.reload();
               }, 2000 )
        }


        const handleApprove  = (e) => {
                  e.preventDefault();
                  if(data){
                      let pushToFeed ; 
                      if(localStorage.getItem('feeds') === null){
                           pushToFeed = [];
                      }else{
                          pushToFeed = JSON.parse(localStorage.getItem('feeds'));
                      }
                       pushToFeed.push(data);

                       localStorage.setItem('feeds' , JSON.stringify(pushToFeed));
                       let local ; 
                       if(localStorage.getItem('userStore') === null){
                           local = [];
                       }else{
                           local = JSON.parse(localStorage.getItem('userStore'))
                       }
                           local.pop();
                         
                         localStorage.setItem('userStore' , JSON.stringify(local));
                     }
                     toast.success('Feed Has Been Approved')
                     setTimeout(() => {
                        location.reload();
                        }, 2000 )
                  }
                  
        console.log(data)

       

     return (
        <>
            <div className="card">
            <div className="info">
              <h2 className="para2">{data.feed}</h2>
              <p className="para3">Date:{data.Date}</p>
              <p className="para2">Created By:{username}</p>
              <button className="btn2" onClick={handleDelete} >Delete</button>
              <button className="btn3" onClick={handleApprove}  >Approve</button>
            </div>
         </div>
        </>      
     )
}