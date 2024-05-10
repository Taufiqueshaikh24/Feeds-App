import FeedCard from "../components/FeedCard";


export default function Myposts(){


    // current user data from local storage to connect the feedUser id and current user id 
    let username ; 

  let userId ; 
 let currentUser = JSON.parse(localStorage.getItem('currentUser'));
     currentUser?.forEach((user) => {
              user?.forEach((currentUser) => {
                username = currentUser.username
                userId  =  currentUser.id 
              })
     })




    //  Feeds data from localstorage 
   
    // let dataFromLocalStorage = JSON.parse(localStorage.getItem('feeds'))
    //   newData =    dataFromLocalStorage?.map((data) => { 
    //        if(userId === data.userid){
    //               return data;
    //        }
    //   });

        let f = JSON.parse(localStorage.getItem('feeds'));
        let feedf = JSON.parse(localStorage.getItem('feeds'));
          let ff = f?.filter((filter) => userId === filter?.userid )
          console.log(ff); 

          let filterFeed = ff?.forEach((f) => {
                    console.log(f);
          })
            
          
          console.log(f);

      
      
        
        

      return (
        <>  
           { ff &&  ff?.length === 0 || ff === null || ff === undefined  ? (
               <>
                         <div className="notfound">
                        <h1>No Posts Yet !</h1>
                         </div>
               </>
           ) : (
                <>
                    {ff && ff?.map((data) => {
                   return <FeedCard key={data?.id} data={data}  />
            })}
                </>
           )  }
          
        </>
      )
}