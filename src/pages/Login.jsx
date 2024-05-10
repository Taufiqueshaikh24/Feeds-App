// import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AdminPage from "./AdminPage";

export default function Login(){


    let navigate = useNavigate();

    const [fields , setFields] = useState({
            username : '', 
            password : ''
    })

    const handleChange = (e) => {
        const { name  , value } = e.target;
        console.log(name , value)
        setFields(prev => ({
            ...prev ,
            [name]:value
        }))
    };

    const handleSubmit = (e) => {
          e.preventDefault();

          const userLogin = {
                username : fields.username, 
                password : fields.password
          }


          let dataFromLocalStorage ; 
          if(localStorage.getItem('userInfo') === null){
                dataFromLocalStorage = [];
          }else{
              dataFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
          }

             let data =    dataFromLocalStorage?.map((data)=>{
                       if(data.username === userLogin.username && data.password === userLogin.password){
                              navigate('/createFeeds');
                              if(data.username === userLogin.username && data.password === userLogin.password && data.roles === "admin"  ){
                                navigate('/admin');
                                toast.success('LoggedIn successfully');
                            }
                              toast.success('LoggedIn SuccessFully')
                                
                              let currentUser = dataFromLocalStorage.filter((currentUser) => {
                                     return currentUser.username === userLogin.username && currentUser.password === userLogin.password;
                              })


                              let currentUserData;
                              if(localStorage.getItem('currentUser') === null){
                                    currentUserData = [];
                              }else{
                                  currentUserData = JSON.parse(localStorage.getItem('currentUser'))
                              }
                              
                              currentUserData.push(currentUser);

                              localStorage.setItem('currentUser', JSON.stringify(currentUserData));



                       }else if(!data.username === userLogin.username && !data.password === userLogin.password){
                            return (
                                <><div>{toast.error('Invalid username or password')}</div></>
                            )
                       }
                })

               
    }


    return (
         <>

         <div className="center">

         <div className="form-container">

        <div className="form">
         <h2 className="header">Login</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="username">Name</label><br/>
                <input type="text" 
                id="username" 
                name="username"
                required
                placeholder="Enter your Name" 
                value={fields.username}
                onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label><br/>
                <input type="password" 
                id="password" 
                name="password"
                placeholder="Enter your Password" 
                value={fields.password}
                required
                onChange={handleChange}/>
            </div>
            <button type="submit" className="btn">Login</button>
            {/* <p className="para">Don't have an Account ? <Link to='/register'>Register</Link></p> */}
            </form>
        </div>
    </div>
</div>
         </>
    )
}