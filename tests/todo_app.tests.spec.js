const { test, expect } = require('@playwright/test');


async function addTask(page, title) {
  await page.locator('button:has-text("Add Task")').click();
  await page.locator('#title').fill(title);
  await page.locator('button[type="submit"]').click();
}

async function verifySuccessMessage(page, message) {
  await expect(page.locator(`text=${message}`)).toBeVisible({ timeout: 2000 });
}

// Tests
test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/anniab/todo-ap');
  await addTask(page, 'My Playwright Task');
});

test('#TC1 Add New Task', async ({ page }) => {
  await verifySuccessMessage(page, 'Task added successfully');
  const todoText = page.locator('p.todoItem_todoText__9GxQd');
  await expect(todoText).toHaveClass(/false/);
  await expect(todoText).toHaveText('My Playwright Task');
});
test('#TC2 Edit Task Status', async ({ page }) => {

    const svgBox = page.locator('div.todoItem_svgBox__WJaic');
    await svgBox.click();
    const element = await page.locator('p', { hasText: 'My Playwright Task' });
    await expect(element).toHaveClass(/todoItem_todoText--completed/);
    const iconButton = page.locator('.todoItem_icon__bzA4K').nth(1).click();
    await page.locator('#type').selectOption('incomplete'); 
    await page.locator('button[type="submit"]').click();
    await expect(element).toHaveClass(/false/);
    await verifySuccessMessage(page, 'Task Updated successfully');
  
    

   
  });
  test('#TC3 Edit Task Title', async ({ page }) => {

    
    const iconButton = page.locator('.todoItem_icon__bzA4K').nth(1).click();
    const titleInput = page.locator('#title');
    await titleInput.waitFor({ state: 'visible', timeout: 2000 }); 
    await titleInput.waitFor({ state: 'attached' }); 
    await expect(titleInput).toBeVisible(); 
    await expect(titleInput).toBeEnabled(); 
    await titleInput.click();
    await titleInput.fill('My Playwright Updated Task');
    await page.locator('button[type="submit"]').click();
    await verifySuccessMessage(page, 'Task Updated successfully');

   
  });

  test('#TC4 Filter by status', async ({ page }) => {

    const selectElement = page.locator('#status');
    await selectElement.click();
    const completeOption = page.locator('option[value="complete"]'); 
    await page.selectOption('#status', { value: 'complete' });
    const selectedValue = await page.locator('#status').inputValue();
    await expect(selectedValue).toBe('complete');
    const noTodosText = page.locator('p.app_emptyText__rjAar');
    await expect(noTodosText).toBeVisible();
    await expect(noTodosText).toHaveText('No Todos');
   
  });

  test('#TC5 Delete task', async ({ page }) => {

    const iconButtonDelete = page.locator('.todoItem_icon__bzA4K').nth(0);
    await iconButtonDelete.waitFor();
    await iconButtonDelete.click();
    await verifySuccessMessage(page, 'Todo Deleted Successfully');
    const noTodosText = page.locator('p.app_emptyText__rjAar');
    await expect(noTodosText).toBeVisible();
    await expect(noTodosText).toHaveText('No Todos');
   
  });