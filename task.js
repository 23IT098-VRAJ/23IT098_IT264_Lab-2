// tasks.js
export const tasks = [];

export function addTask(task) {
    try {
        if (!task.title || !task.dueTime || !task.priority) {
            throw new Error("Task must have title, dueTime, and priority");
        }
        if (!["High", "Medium", "Low"].includes(task.priority)) {
            throw new Error("Priority must be High, Medium, or Low");
        }
        if (typeof task.dueTime !== 'number' || task.dueTime <= 0) {
            throw new Error("dueTime must be a positive number");
        }
        tasks.push({
            ...task,
            createdAt: Date.now()
        });
        return true;
    } catch (error) {
        console.error("Error adding task:", error.message);
        return false;
    }
}

export function sortTasksByPriority() {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
}

export function getTasksDueWithin(minutes) {
    const now = Date.now();
    return tasks.filter(task => {
        const dueTime = task.createdAt + (task.dueTime * 60000);
        return (dueTime - now) <= minutes * 60000;
    });
}

export function scheduleReminders() {
    const reminders = new Map();
    
    tasks.forEach(task => {
        const reminder = setTimeout(() => {
            console.log(`⏰ Reminder: "${task.title}" (${task.priority} priority) is due now!`);
            reminders.delete(task.title);
        }, task.dueTime * 60000);
        
        reminders.set(task.title, reminder);
    });

    return reminders;
}

export function deleteTask(title) {
    const index = tasks.findIndex(task => task.title === title);
    if (index !== -1) {
        tasks.splice(index, 1);
        return true;
    }
    return false;
}