import Layout from "@/components/Layout";
import Login from "@/components/Login";
import { useSession,signIn,signOut } from "next-auth/react"

export default function Component() {
const {data : session} = useSession();

// if (session){
//   return (
//     <>
//     Signed in as {session.user.email}<br></br>
//     <button onClick={()=>signOut()}>Sign Out</button>
//     </>
//   )
// }
// return (
//   <>
//   Signed Out
//   <br></br>
//   <button onClick={()=>signIn()}>Sign In</button>
//   </>
// )

return (
    <Layout>
      <div className="text-blue-800 flex justify-between">
        <h2>Hello, {session?.user?.name}</h2>
        <div className="flex bg-gray-400 flex-col">
          <img src={session?.user?.image}/>
          <span>{session?.user?.email}</span>
        </div>
      </div>
    </Layout>
    
   
)
}

