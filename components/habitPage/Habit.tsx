/* Components */
import { 
    Card, 
    CardHeader, 
    CardTitle,
    CardContent, 
    CardFooter 
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

/* Icons */
import { FaCheck } from "react-icons/fa";

/* Utils */
import EditHabit from "./EditHabit";
import DeleteHabit from "./DeleteHabit";

const Habit = ({ id, name }: { id: number, name: string }) => {
    return (
        <Card className="bg-card-gray text-white border-0 rounded-2xl">
            <CardHeader>
              <CardTitle>{name ?? "My Habit"}</CardTitle>
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
                    <DeleteHabit id={id} />
                    <EditHabit id={id} />
                </div>
              </div>
            </CardFooter>
        </Card>
    )
}

export default Habit