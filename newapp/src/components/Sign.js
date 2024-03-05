// import React from 'react'
// import Email from './Email'
// import { useState } from 'react'
// import Mobile from './Mobile'

// export default function Sign() {
//   let [c,d]=useState("EMAIL")
//   var [email,setEmail]=useState('')
//   var [message,setMessage]=useState('')
//   var [pass,setPass]=useState('')
//   const navigate=useNavigate()


//   const togglePassword = useRef("")
//   const password = useRef("")
//   const [e,s]=useState(0)
//   const Toggle=()=>
//   {
//     // toggle the type attribute
//     const type = password.current.type === 'password' ? 'text' : 'password';
//     password.current.type=type;
//     // toggle the eye slash icon
//     if(e===0)
//     {
//       s(1)
//     togglePassword.current.className='bi-eye';
//     }
//     else{
//       s(0)
//       togglePassword.current.className='bi bi-eye-slash';
//     }
// };
//   let click=async (b)=>
//   {
//     if(pass===""&&email==="")
//   {
//     setMessage("Enter UserMail & Password")
//   }
//   else{

//     const response=await fetch(`${process.env.REACT_APP_API_URL}/login/${email}/${pass}/user`);
//     console.log(response)
//     if(response.status===401)
//     {
//       setMessage("! Bad Email Password Combination")
//     }
//   else if(response.status===200)
//   {
//     const data = await response.json();
//     setdata(data);
//     console.log(data)
//     //sessionStorage.setItem("mail", name);
//     dispatch(mail(email))
//     //localStorage.setItem("token",data.token)
//     cookie.set("token",data.token)
//     try{
//       //const token = localStorage.getItem("token");
//       const token=cookie.get("token")
//     if (token) {
//       // Make an asynchronous request to validate the token
      
//       const response=await fetch(`${process.env.REACT_APP_API_URL}/protected-route`,
//       {
//         withCredentials: 'true',
//         method: 'GET',
//         headers:
//         {
//           'Authorization':`Bearer ${token}`,
//         },
//       })
//       console.log(response)

//       if (response.status === 200) {
//         // Token is valid
//         userAuth(true);
//         //localStorage.setItem("tokenauth","true")
//         cookie.set("tokenauth","true")
//         cookie.set("project",data.project)
//       } else {
//         // Token is not valid
//         userAuth(false);
//       }
//     } else {
//       // No token found
//       userAuth(false);
//     }
//   } catch (error) {
//     // Handle errors, e.g., network issues
//     console.error("Token validation failed:", error);
//   }
//   try {
   
//     if(location==="/v1/jim/homepage" || location==="/v1/jim_user_login")
//     {
//       navigate("/v1/jim/create_ticket")
//     }
//     else{
//    navigate(`${location}`);  
//     }
//     } catch (error) {
//       navigate("/error", { state: { message: "Failed to submit form" } }); // Pass optional second argument
//     }
//   }
//   else if(response.status===404)
//   {
//    setMessage("! Bad Email Password Combination")
//   }
// }
  
// };

//   const handlKeyPress=(event)=>
//   {
//     if(event.key==='Enter')
//     {
//       clicks(event)
//     }
//   }
  
//   return (
//     <>
   
//     <div data-cy="mutation-sensor" style={{"border": "3px solid gray",
//     "width": "509.33334px",
//     "marginLeft": "350px"}}>
//     <div data-cy="login-panel" class="sc-AxgMl mXdik fade-in-enter-done">
//     <div data-cy="login-form" class="sc-AxgMl gfGIVK">
//     <div data-cy="login-panel-title" class="sc-AxgMl drXva">
//       <h3 class="sc-fzqyvX kJWwZs kite-js-Typography ">
//     Sign in</h3>
//     <div class="sc-AxgMl cbTNjv">
//     <h6 class="sc-fzqyvX gRJRPM kite-js-Typography ">For security, please sign in to access your information</h6>
//     </div>
//     </div>
//     <div class="sc-AxgMl bdRmbW">
//     <div spacing="XL" class="sc-AxhUy jtMJCi"><div class="sc-AxhCb jIcqRC">
//     <div class="sc-pzMyG flrnRv">
//     <ul class="sc-fzoCCn fyVkRs">
//     <li class="sc-fzoPby jfwpXD" >
//     <div class="sc-AxgMl eUtsRt">
//     <span data-cy="email_tab" class="sc-fznZeY dAxUxB" style={{"color": "rgb(83, 146, 249)"}} >EMAIL</span>
//     </div></li></ul></div></div>
//     <div class="sc-AxhCb jIcqRC">
//     <form data-cy="email-login-form">
//     <div spacing="XL" class="sc-AxhUy iIozRy">
//     <div class="sc-AxhCb jIcqRC">
//       <div class="sc-AxgMl daSMuo">
//         <span class="sc-fznZeY dzZFTs">Email</span>
//         </div>
//         <div class="sc-AxhUy dNxtde">
//           <div class="sc-fznLxA jgYloo">
//             <input id="email" data-cy="email" name="email" type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" class="sc-AxmLO iksYDU sc-qZtCU bnePEP" defaultValue=""/></div>
//             </div>
//             </div>
//     <div class="sc-AxhCb jIcqRC"><div class="sc-AxgMl daSMuo"><span class="sc-fznZeY dzZFTs">Password</span></div>
//     <div class="sc-AxhUy dNxtde">
//     <div class="sc-fznLxA jgYloo">
//     <input id="password" data-cy="password" onKeyDown={handlKeyPress} ref={password}  placeholder="Password" onChange={(e)=>setPass(e.target.value)} name="password" type="password" class="sc-AxmLO iksYDU sc-qZtCU bnePEP" defaultValue=""/>
//     <i className="bi-eye-slash"  ref={togglePassword} onClick={Toggle} id="togglePassword" style={{marginLeft: "-30px", cursor: "pointer"}}></i>
//     </div></div></div>
//     <div class="sc-AxhCb jIcqRC">
//     <button radius="S" data-cy="signin-button" data-element-name="universal-login-signin-email-button" type="submit" color="primary" class="sc-fzoiQi hsJTpM">
//     <div class="sc-fznWqX clGFVP">
//     <div class="sc-AxgMl gfGIVK">
//     <span class="sc-fznZeY dAxUxB" onClick={click}>Sign in</span>
//     </div></div></button></div></div>
//     <div data-cy="footer-link-container" class="sc-AxgMl bOirrJ"><a href="/signup" data-cy="signup-email" data-element-name="universal-login-signup-link" class="sc-fzoyTs qPKjW">
//     <span class="sc-fznZeY dzZFTs">Create account</span>
//     </a><a data-cy="email-forget-password" data-element-name="universal-login-forgot-password-link" class="sc-fzoyTs qPKjW">
//     <div class="sc-AxgMl jWIkjO" style={{"vertical-align": "middle"}}>
//     <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sc-fzoyAV jwemYc"><path d="M5.286 9.143V6.388A6.388 6.388 0 0 1 11.673 0h1.167a6.388 6.388 0 0 1 6.388 6.388 1 1 0 0 1-2 0A4.388 4.388 0 0 0 12.84 2h-1.167a4.388 4.388 0 0 0-4.387 4.388v2.755H19a2 2 0 0 1 2 2v10.714a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V11.143a2 2 0 0 1 2-2h.286zM13 17.829a3.001 3.001 0 1 0-2 0v2.15a1 1 0 1 0 2 0v-2.15zM11 15a1 1 0 1 1 2 0 1 1 0 0 1-2 0z"></path></svg></div>
//     <span class="sc-fznZeY dzZFTs">Forgot password?</span></a></div></form></div></div></div>
//    </div>
// </div>
// </div>
//   </>
//   )
// }
