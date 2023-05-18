import React, {useState} from 'react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login ={}
    const submitHandler = async () =>{
        const data ={
            email:email,
            password:password
        }
        const response = await login(data)
        return response
    }
  return (
    <>
        <form className='w-1/3'>
            <div className="flex flex-col gap-3 ">
                <div className="flex flex-col">
                <label for="email" >Email</label>
                <input className="border-2 border-black-700"type="email" placeholder="Enter your Email Adress" onChange={(e)=>setEmail(e.target.value)}/>
                </div>

                <div className="flex flex-col">
                <label for="password" >Password</label>
                <input className="border-2 border-black-700" type="Password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                <span><button className="rounded-full bg-sky-500 shadow hover:shadow-md" onClick={submitHandler}>Login</button></span>
            </div>
        </form>
    </>
  )
}

export default Login