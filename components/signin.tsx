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
        <Card className="flex flex-col items-center w-full max-w-sm bg-[#171717] text-white border-0">
          <CardHeader className="flex flex-col items-center justify-center">
            <CardTitle className="text-2xl">Sign In</CardTitle>
            <CardDescription className="text-center">Connect with your Google account to sign in.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <form 
              action={async () => {
                "use server"
                await signIn("google")
              }} 
            >
              <Button variant="ghost" className="bg-btn-gray hover:bg-square-gray border-0">
                <FcGoogle size={30} className="mr-1"/>
                Sign in with Google
              </Button>
            </form>
          </CardContent>
        </Card>
      </>
    );
  }