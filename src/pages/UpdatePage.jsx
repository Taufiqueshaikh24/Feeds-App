import { useParams , Link , useNavigate } from "react-router-dom"; 
import { useState } from "react";
import { toast } from "react-toastify";


export default function UpdatePage(){

       

          const { id } = useParams();
          const navigate = useNavigate();

          const feeds = JSON.parse(localStorage.getItem('feeds'));
                    let compareFeedId =   feeds?.filter((e) => {
                              return e.id === id 
                    })
                         
                        let d = compareFeedId?.map((e) => {
                                     return e.feed
                        });
                        console.log(d[0]);   

                    const [fields , setFields ]  = useState({
                        feeds : d[0],
              })      

                  const newFeed = {
                        feed: fields.feeds,
                  }
       
          const handleChange = (e)  => {
                    e.preventDefault();
                    const { name  , value } = e.target;
                    console.log(name , value)
                    setFields(prev => ({
                    ...prev ,
                    [name]:value
             }))
                    
          }

          const handleEdit = (e) => {
                   e.preventDefault();
                   let updateTheFeed; 
                if(localStorage.getItem('feeds') === null){
                     updateTheFeed = [];
                }else {
                    updateTheFeed = JSON.parse(localStorage.getItem('feeds'));
                }
                let updateId ; 
                // Find the index from the feed and the current id
                // so we got the index stored in the update variable
                  const update = updateTheFeed?.findIndex((e) => {
                        //     updateId = e.id 
                        //    let   object = e.id === id;
                        //    return object;

                              return e.id === id ; 
                         
                  } )
                    console.log(update)

                  if(update !== -1){
                        //  from the local storage
                        updateTheFeed[update].feed = newFeed.feed
                        localStorage.setItem('feeds', JSON.stringify(updateTheFeed));
                        toast.success('Feed Updated SuccessFully')
                        setTimeout(() => { navigate('/myposts') },1000)
                        
                        

                  }else{
                       toast.error('Something went Wrong');
                  }
                    // console.log("UpdatetheFeed__", updateId  , id );
                    //   let obj = update?.map((e) => console.log(e))
                    //   console.log(update);
                    
                      

                //   localStorage.setItem('feeds' , JSON.stringify(update))




          }

        return (
            <>
            <div className="center">

            <div className="form">
             <h2 className="header">Update Page</h2>
                <form onSubmit={handleEdit}>
                <div className="form-group">
                    <label htmlFor="name">Enter Your Feed</label><br/>
                    <input type="text" 
                    id="name"
                    name="feeds"
                    value={fields.feeds}
                    placeholder="Enter your feeds"
                    required
                    onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn">Update Feed</button>
                <Link to='/myposts' className="updateLink" ><button  className="btn">Cancel</button></Link>
                {/* <button className="btn" onClick={() => navigate('/')} >View Other User Posts</button> */}
                </form>
            </div>
        </div>
             </>
        )
}