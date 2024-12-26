# Task Reminder System

A Node.js-based task management system that handles scheduling and reminders asynchronously.

## Features

- Task management with priority levels
- Automated reminders based on due times
- Priority-based task sorting
- Timeframe-based task filtering
- Error handling for invalid inputs

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm init -y
```
3. Add `"type": "module"` to package.json

## File Structure

```
project/
├── package.json
├── tasks.js     # Core functionality
└── index.js     # Usage example
```

## Usage

### Creating Tasks

```javascript
addTask({
    title: "Complete Report",
    dueTime: 30,    // minutes from now
    priority: "High" // High, Medium, Low
});
```

### Running the System

```bash
npm start
```

## API Reference

### Functions

- `addTask(task)`: Adds new task with validation
- `sortTasksByPriority()`: Sorts tasks by priority level
- `getTasksDueWithin(minutes)`: Returns tasks due within specified timeframe
- `scheduleReminders()`: Sets up automated reminders
- `deleteTask(title)`: Removes task by title

### Task Object Structure

```javascript
{
    title: String,    // Required
    dueTime: Number,  // Required, in minutes
    priority: String  // Required: "High", "Medium", "Low"
}
```

## Error Handling

The system validates:
- Required fields
- Valid priority levels
- Positive due times

## License

MIT
