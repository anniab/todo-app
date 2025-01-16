# Test Cases for Todo App

## TC1 Add New Task
**Functionality:** Adding a task with a title and a status (*complete* or *incomplete*).

### Steps to execute:
1. Open the Todo App Page.
2. Click the **"Add Task"** button.
3. Enter text in the **"Title"** field (minimum 1 character).
4. Click the **"Add Task"** button.

### Validation criteria:
- A new task appears on the list with the correct title.
- The task status is **incomplete**.
- A success message **"Task added successfully"** appears.

---

## TC2 Edit Task Status
**Functionality:** Changing a task’s status  *complete* , *incomplete* using two different methods.

### Prerequisites:
- A task with the **incomplete** status exists on the list.
- The filter is set to **All**.

### Steps to execute:
1. Open the Todo App Page.
2. Click the checkbox next to the task's name.
3. Verify that the task's status changes to **complete**.
4. Click the **pencil icon** next to the task's name.
5. Open the dropdown list.
6. Select the status **incomplete** from the list.

### Validation criteria:
- The task's status changes to **complete**.
- The task's status changes back to **incomplete**.
- A success message **"Task Updated successfully"** appears.

---

## TC3 Edit Task Title
**Functionality:** Updating the title of an existing task.

### Prerequisites:
- A task exists on the list.
- The filter is set to **All**.

### Steps to execute:
1. Open the Todo App Page.
2. Click the **pencil icon** next to the task's name.
3. Update the task's title (field cannot be empty; minimum 1 character).
4. Click the **"Update Task"** button.

### Validation criteria:
- The task's title updates to the new value.
- A success message **"Task Updated successfully"** appears.

---

## TC4 Filter by Status
**Functionality:** Filtering tasks by status. Available options: **All** (default), **Incomplete**, **Complete**.

### Prerequisites:
- A task with the **incomplete** status exists on the list.

### Steps to execute:
1. Open the Todo App Page.
2. Open the dropdown list.
2. Change the filter to **Complete**.

### Validation criteria:
- The filter changes to **Complete**.
- No tasks appear, and the text **"No Todos"** is displayed (if no tasks match the selected status).

---

## TC5 Delete Task
**Functionality:** Deleting a task with any status (*complete* or *incomplete*).

### Prerequisites:
- There is exactly one task on the list.
- The filter is set to **All**.

### Steps to execute:
1. Open the Todo App Page.
2. Click the **trash icon** next to the task's name.

### Validation criteria:
- A success message **"Todo Deleted Successfully"** appears.
- No tasks appear, and the text **"No Todos"** is displayed (if all tasks are deleted).
