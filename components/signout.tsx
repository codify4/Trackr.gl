import { signOut } from "../auth"
 
export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit" className="bg-red-800 hover:bg-red-700 px-5 py-3 rounded-xl">Sign Out</button>
    </form>
  )
}