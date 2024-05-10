import { Link, useNavigate } from "react-router-dom";
import Login from "../pages/Login";

export default function Navbar(){


   
    let navigate = useNavigate();
   

      let username ; 
      let userId ;
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
         if(currentUser){ currentUser?.forEach((user) => {
                   user?.forEach((currentUser) => {
                     username = currentUser.username
                     userId = currentUser.id
                   })
          })}else{
                  <></>
          }
      console.log(currentUser);


      const handleClick = (e) => {
            e.preventDefault();
            // let currentUserData;
            // if(localStorage.getItem('currentUser') === null ){
            //      currentUserData = [];
            // }else{
            //     currentUserData = JSON.parse(localStorage.getItem('currentUser'));
            // }
            // currentUserData?.forEach((currentData) => {
            //       let storedData = currentData.findIndex((obj) => obj.id === userId);
                  
            //       if(storedData !== -1){
            //         currentData.splice(storedData ,  1 )
            //         localStorage.setItem('currentUser', JSON.stringify(storedData))
            //         // navigate('/login');
            //       }else{
            //            console.log(storedData,'Object not found in the array');
            //      }
                
            // })

 
            let currentUserFromLocalStorage; 
            if(localStorage.getItem('currentUser') === null ){
                 currentUserFromLocalStorage = [] ;  
            }else{
                 currentUserFromLocalStorage = JSON.parse(localStorage.getItem('currentUser'));
            }

            let sortedObj  = currentUserFromLocalStorage;
                
                console.log(sortedObj);

                sortedObj.forEach((e) => {
                       sortedObj.pop();
                })

                sortedObj.forEach((e) => {
                  sortedObj.pop();
           })



                  localStorage.setItem('currentUser' , JSON.stringify(sortedObj));
                  navigate('/login');
           



      };


        

  
      return (
          <nav className="navbar">
           <Link to='/' className="updateLink" ><h2>Feeds App</h2></Link>
            <ul className="nav-group">
          { currentUser &&  currentUser[0]?.length === 1  ? (<>
              { currentUser && currentUser[0][0].roles === 'admin' ? (
                 <>
                    <li><Link className="nav-links" to="/">Feeds</Link></li>
                 <li ><Link className="nav-links" to="/admin">Requests</Link></li>
                 <li ><Link className="nav-links" to="#" onClick={handleClick}>Logout</Link></li>
                 </>
              ) : (
                 <>
                    <li><Link className="nav-links" to="/createFeeds">Create Feeds</Link></li>
                 <li ><Link className="nav-links" to="/Myposts">My Posts</Link></li>
                 <li ><Link className="nav-links" to="#" onClick={handleClick}>Logout</Link></li>
                 </>
              ) }
            
                 
          </>)  : (
            <>
               
                 
               
                 <li ><Link className="nav-links" to="/">Feeds</Link></li>
                 <li ><Link className="nav-links" to="/login">Login</Link></li>
                 <li ><Link className="nav-links" to="/register">Register</Link></li> 

            </>
          )}
             
              </ul>
          </nav>
      )
}