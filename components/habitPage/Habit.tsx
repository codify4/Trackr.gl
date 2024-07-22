'use client';
/* Next */
import { useState, useEffect } from "react";

/* Components */
import { 
    Card, 
    CardHeader, 
    CardTitle,
    CardContent, 
    CardFooter 
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import EditHabit from "./EditHabit";
import DeleteHabit from "./DeleteHabit";

/* Icons */
import { FaCheck } from "react-icons/fa"

/* Types */
import type { SelectHabitLogs } from "@/db/schema/HabitsSchema";

/* Actions */
import { getHabitLogs, logHabit } from "@/actions/actions";

const Habit = ({ id, name }: { id: number, name: string }) => {
    const [habitLogs, setHabitLogs] = useState<SelectHabitLogs[]>([]);
    const currentDate = new Date();

    useEffect(() => {
      getHabitLogs(id).then(logs => {
          const logsWithDateObjects = logs.map(log => ({
              ...log,
              date: new Date(log.date)
          }));
          setHabitLogs(logsWithDateObjects);
      });
    }, [id]);

    const handleCheck = async () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const existingLog = habitLogs.find(log => 
          log.date.toDateString() === today.toDateString() && log.habitId === id
      );
  
      try {
          if (existingLog) {
              const [updatedLog] = await logHabit(id, today, !existingLog.completed);
              if (updatedLog) {
                  setHabitLogs(logs => logs.map(log => 
                      log.id === updatedLog.id ? updatedLog : log
                  ));
              }
          } else {
              const [newLog] = await logHabit(id, today, true);
              if (newLog) {
                  setHabitLogs(logs => [...logs, newLog]);
              }
          }
      } catch (error) {
          console.error("Error updating habit log:", error);
      }
    };

    const renderSquares = () => {
      const squares = [];
      const monthStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      const monthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
  
      for (let i = 1; i <= monthEnd.getDate(); i++) {
          const date = new Date(monthStart);
          date.setDate(i);
          const isCompleted = habitLogs.some(log => 
              log.date.toDateString() === date.toDateString() && log.completed
          );
          const isToday = date.toDateString() === today.toDateString();
  
          squares.push(
              <div
                  key={i}
                  className={`w-5 h-5 rounded-sm ${
                      isCompleted ? "bg-square-green" : "bg-square-gray"
                  } ${isToday ? "border-2 border-white" : ""}`}
                  title={`${date.toDateString()}${isCompleted ? ' - Completed' : ''}`}
              />
          );
      }
      return squares;
    };
    
    return (
        <Card className="bg-card-gray text-white border-0 rounded-2xl">
            <CardHeader>
              <CardTitle>{name ?? "My Habit"}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-7 gap-1.5">
                  {renderSquares()}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center justify-center gap-14">
                <Button onClick={handleCheck} variant="default" className="flex items-center gap-1 border-0 text-white bg-square-green rounded-lg hover:bg-[#00D115]">
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