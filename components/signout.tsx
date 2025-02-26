import { signOut } from "../auth"
import { Button } from "./ui/button"
 
export default function SignOut() {
  return (
    <form
      action={async () => {
        'use server'
        await signOut()
      }}
    >
      <Button type="submit" variant="default" className="flex items-center justify-center w-full text-center bg-square-red border-0 rounded-lg hover:bg-[#E60000]">
        Sign out
      </Button>
    </form>
  )
}