import ShowAllFeeds from "../components/ShowAllFeeds";

export default function Main(){

    const feeds = JSON.parse(localStorage.getItem('feeds'));
    const feeds2 = JSON.parse(localStorage.getItem('feeds'));
    const user = JSON.parse(localStorage.getItem('userInfo'));
    console.log("This is feed 2",feeds2)
    let userid
    if(user){
         user?.map((u)=> {
              userid = u.id
         })
    }
        let feedid ;
       feeds?.forEach((f) =>{
              return f.userid !== user.id
       })
         
       feeds2?.forEach((f) =>{
        return f.userid !== user.id
 })  
        // console.log("Feeds2 Length ", feeds2.length)

    return ( 
        <>
           { feeds2 && feeds2?.length && feeds2?.length === 0 || feeds2 === null || feeds2 === undefined  ? (
               <>
                      <h1>No Feeds Yet!</h1>
               </>
           ) : (
              <>
                
                {feeds && feeds?.map((feed) => {
                 return <ShowAllFeeds key={feed.id} feed={feed} />
            })}
              </>
           )  }
           
        </>
    )
}