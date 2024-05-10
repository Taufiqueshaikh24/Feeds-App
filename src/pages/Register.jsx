import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getItemsFromStorage  } from "../utils/localStorage"; 
import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-toastify";


export default function Register(){


           const navigate = useNavigate();

            const [fields , setFields] = useState({
                  username: '', 
                  password: '', 
                  email : '', 
                  phoneno:  '', 
                  roles:'user'
            })

            const handleChange = (e) => {
                const {name, value } = e.target;
                console.log(name, value);
                      setFields((prev) => ({
                              ...prev, 
                              [name]:value
                      }))
                
        };

        const handleSubmit = (e) => {
              e.preventDefault();
             const user = {
                  id: uuidv4(),
                  username : fields.username , 
                  password: fields.password,
                  email: fields.email ,
                  phoneno: fields.phoneno, 
                  roles: fields.roles,
                  feeds : []


             }
             

             
             let dataFromLocalStorage ; 
             if(localStorage.getItem('userInfo') === null){
                   dataFromLocalStorage = [];
             }else{
                 dataFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
             }

             let data =   dataFromLocalStorage.map((data) => {
                    if(data.username === user.username  ){
                          toast.error('username Already Exist')
                    }else  if(data.email === user.email){
                         toast.error('Email Already Exists')
                    }
               })
            
              
                // const userFromStorage = getItemsFromStorage();


                       // Add new item to array
                    dataFromLocalStorage.push(user);
              
                // Convert to JSON string and set to local storage
                     localStorage.setItem('userInfo', JSON.stringify(dataFromLocalStorage));
                
                    navigate('/login');
            
  
             

                  
               

            
        }

    return (
        <>
          <div className="center">

             <div className="form" >
                <h2 className="header">Register</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="username">Username</label><br/>
                <input type="text" 
                 id="username" 
                 name="username"
                 placeholder="Enter your Username"
                 required
                 value={fields.username}
                 onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label><br/>
                <input type="password" 
                id="password"
                name="password" 
                placeholder="Enter your Password"
                required
                value={fields.password}
                onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label><br/>
                <input type="email"
                 id="email" 
                 name="email" 
                 placeholder="Enter your Email"
                 required
                 value={fields.email}
                 onChange={handleChange} />
            </div>

            <div className="form-group">
                <label htmlFor="phone">Phone No</label><br/>
                <input type="number" 
                id="phone" 
                name="phoneno" 
                placeholder="Enter your Phone no" 
                required
                value={fields.phoneno}
                onChange={handleChange} />
            </div>

            <div className="form-group">
                <label htmlFor="roles">Select Role</label><br/>
                <select
                id="roles"
                name="roles"
                className="role"
                required
                value={fields.roles}
                onChange={handleChange}
                >
                <option value="user">User</option>
              </select>
            </div>

             
            <button type="submit" className="btn">Register</button>
            <p className="para">Already have an Account ? <Link to='/login'>Login</Link></p>
            </form>
        </div>
                  </div>
        </>
    )
}