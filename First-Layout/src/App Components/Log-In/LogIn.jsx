import "../Log-In/LogIn.css"
export default function LogIn({Login, setLogin, setSignin}){

    return (
        <>
            <div className={Login == true ? "LogInWrapper" : "hideLoginBox"}>
                 <button className="closeButt" onClick={()=>setLogin(false)}>⬅</button>
                <div className="LeftSide">
                    <h1>
                        Log In Tab
                    </h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa unde totam esse velit qui quod sint, libero minus eum voluptas. Officiis impedit vitae temporibus excepturi commodi ipsa repudiandae ea fuga!
                    </p>
                </div>
                <div className="LogInBox">
                    
                    <h1 className="LogInTitle">Log-In</h1>
                    <p className="Label">Username:</p>
                    <input type="text" name="" id="" />
                    <p className="Label">Password:</p>
                    <input type="text" name="" id="" />
                    <div className="options">
                        <p id="Forgot">Forgot Password</p> <label htmlFor="ShowPassword" id="showPass"><input type="checkbox" id="ShowPassword" />Show Password</label>
                    </div>
                    <button className="LoginButt">Log In</button>
                    <p className="Suggestion">Doesn't have an account? <u onClick={()=>{setSignin(true), setLogin(false)}}>SignUp</u></p>
                </div>
            </div>
            

            
        </>
    )
}