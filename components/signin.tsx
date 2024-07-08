import { FcGoogle } from "react-icons/fc";
import { signIn } from "@/auth";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button";


export default function SignInForm(){
    return (
      <>
        <Card className="w-full max-w-sm bg-[#171717] text-white border-0">
          <CardHeader>
            <CardTitle className="text-2xl">Sign In</CardTitle>
            <CardDescription>Connect with your Google account to sign in.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <form 
              action={async () => {
                "use server"
                await signIn("google")
              }} 
            >
              <Button variant="outline" className="bg-neutral-800 border-0">
                <FcGoogle size={30}/>
                Sign in with Google
              </Button>
            </form>
          </CardContent>
        </Card>
      </>
    );
  }