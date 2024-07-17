'use client'

import { signout } from "@/actions/signout";
import { Button } from "./ui/button"
 
export default function SignOut() {
  return (
    <form
      action={signout}
    >
      <Button type="submit" variant="default" className="bg-square-red border-0 rounded-lg hover:bg-[#E60000]">
        Sign out
      </Button>
    </form>
  )
}