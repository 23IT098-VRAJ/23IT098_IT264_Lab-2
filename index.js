import { addTask, sortTasksByPriority, getTasksDueWithin, scheduleReminders, deleteTask } from './task.js';

try {
    addTask({ title: "Complete Report", dueTime: 5, priority: "High" });
    addTask({ title: "Team Meeting", dueTime: 15, priority: "Medium" });
    addTask({ title: "Code Review", dueTime: 10, priority: "High" });

    console.log("Sorted tasks:", sortTasksByPriority());

    console.log("Tasks due in 10 minutes:", getTasksDueWithin(10));

    const reminders = scheduleReminders();

    process.on('SIGINT', () => {
        reminders.forEach(reminder => clearTimeout(reminder));
        process.exit(0);
    });

} catch (error) {
    console.error("Error:", error.message);
}