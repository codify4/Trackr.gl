import { 
    Card, 
    CardHeader, 
    CardTitle,
    CardContent, 
    CardFooter 
} from "@/components/ui/card"
import { Button } from "../ui/button"
import { LuTrash2 } from "react-icons/lu";
import { FiEdit2 } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";

const Habit = () => {
    return (
        <Card className="bg-card-gray text-white border-0 rounded-2xl">
            <CardHeader>
              <CardTitle>100 Push Ups</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-6 gap-1.5">
                  {Array.from({ length: 30 }).map((_, index) => (
                    <div key={index} className={`w-5 h-5 rounded-sm ${index < 3 ? "bg-square-green" : "bg-square-green"}`} /> 
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center justify-center gap-14">
                <Button variant="default" className="flex items-center gap-1 border-0 text-white bg-square-green rounded-lg hover:bg-[#00D115]">
                    <FaCheck size={20}/>
                    <span>Check</span>
                </Button>
                <div className="flex gap-3">
                    <Button variant="default" size="icon" className="text-white bg-square-red rounded-lg hover:bg-[#E60000]">
                    <LuTrash2 size={20}/>
                    </Button>
                    <Button variant="default" size="icon" className="text-white bg-square-gray rounded-lg hover:bg-[#4E4E4E]">
                        <FiEdit2 size={20}/>
                    </Button>
                </div>
              </div>
            </CardFooter>
        </Card>
    )
}

export default Habit