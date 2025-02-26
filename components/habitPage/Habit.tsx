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

const getMonthName = () => {
    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[new Date().getMonth()];
}

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
    
        const daysOfWeek = ['Mon', '', 'Wed', '', 'Fri', '', 'Sun'];
        
        // Add day labels
        for (let i = 0; i < 7; i++) {
            squares.push(
                <div key={`day-${i}`} className="w-5 h-5 text-xs flex items-center justify-center text-input-text">
                    {daysOfWeek[i]}
                </div>
            );
        }
    
        // Add squares for each day of the month
        for (let i = 1; i <= monthEnd.getDate(); i++) {
            const date = new Date(monthStart);
            date.setDate(i);
            const isCompleted = habitLogs.some(log => 
                log.date.toDateString() === date.toDateString() && log.completed
            );
            const isToday = date.toDateString() === today.toDateString();
            const isPast = date < today;

            let bgColor = "bg-square-gray";
            if (isCompleted) {
                bgColor = "bg-square-green";
            } else if (isPast) {
                bgColor = "bg-square-red";
            }
    
            squares.push(
                <div
                    key={i}
                    className={`w-5 h-5 rounded-sm ${bgColor} ${isToday ? "border-2 border-white" : ""}`}
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
            <CardContent className="flex flex-col items-center justify-center pl-0 mr-1">
                <div className="flex flex-row items-center justify-center">
                    <span className="-rotate-90 h-5 text-input-text text-xs mr-1">{getMonthName()}</span>
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