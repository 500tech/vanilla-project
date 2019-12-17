# vanilla-project

## Setup

- clone this repo
- run `./run` in the terminal
- visit http://localhost:8000
- Ta Da!

## Project

The cureent given project is incomplete. Please complete it according (or as close as you can get) to the designs and the spec.

- Clicking an item of the list should mark it as done (visually, it should be strikken through by a line)
- Clicking an item _while holding the CMD (⌘) key_ will delete an item, regardless of its state
- Underneath the list, create a _Controls Section_:
  - It should have one button that reads: "Mark all as done". Clicking it will mark all tasks as done.
  - It should have one button that reads: "Delete all done". Clicking it will delete from the list all tasks marked as done.
- Above the list, create a new section for adding new items. It should have a form with an input and an add button.
  - The button should be disabled as long as the form is not considered valid
  - The form is not considered valid while there's no text in the input
  - On submitting the form, no refresh should occur! The text should become a new todo item on the list, at its top.
  - When a new item is added, the form should reset.

### Bonus Points

- Expand the width of the input to 500px when the input is focused OR when there's text in it. Animate the expansion.
- Make the todo items accessible via using the TAB key. When an item is thus focused, it should have an empty circle at its start, and an unterline for the text (there should be a design for that).
  - Pressing `SPACE` when focused on an element should toggle its "done" state. Pressing `BACKSPACE` should delete it.
  - A focused and done item should be both _undelined_ AND _stricken_.

### Extra Special Bonus Points!

- Use the GET API `https://jsonplaceholder.typicode.com/todos` to get the list of initial Todo items.
- Use the other API methods (POST/PATCH/PUT/DELETE) by the REST convention on that server for every other action you're making (e.g. make a `DELETE https://jsonplaceholder.typicode.com/todos/100` request when deleting the item with ID 100)
