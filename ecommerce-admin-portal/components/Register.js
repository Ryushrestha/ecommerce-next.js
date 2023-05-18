import React, {useState} from 'react'

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [number, setNumber] = useState()
    const [dob, setDOB] = useState("")



    const login ={}
    const submitHandler = async () =>{
        const data ={
            name:name,
            number:number,
            dob:dob,
            email:email,
            password:password
        }
        const response = await login(data)
        return response
    }

  return (
    <>
         <form className='w-1/3'>
            <div className="flex flex-col">
            <div className="flex flex-col gap-4">
                <label for="name" >Full Name</label>
                <input className="border-2 border-black-700" type="text" placeholder="Full Name" onChange={(e)=>setName(e.target.value)}/>
                </div>
                
                <div className="flex flex-col gap-4">
                <label for="Contact no" >Contact Number</label>
                <input className="border-2 border-black-700" type="number" placeholder="Contact No." onChange={(e)=>setNumber(e.target.value)}/>
                </div>

                <div className="flex flex-col gap-4">
                <label for="dob" >DOB</label>
                <input className="border-2 border-black-700" type="date" placeholder="Date of Birth" onChange={(e)=>setDOB(e.target.value)}/>
                </div>

                <div className="flex flex-col gap-4">
                <label for="email" >Email</label>
                <input className="border-2 border-black-700" type="email" placeholder="Enter your Email Adress" onChange={(e)=>setEmail(e.target.value)}/>
                </div>

                <div className="flex flex-col gap-4">
                <label for="password" >Password</label>
                <input className="border-2 border-black-700" type="Password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                <button className="rounded-full bg-sky-500 shadow hover:shadow-md" onClick={submitHandler}>Login</button>
            </div>
        </form>
    </>
  )
}

export default Register