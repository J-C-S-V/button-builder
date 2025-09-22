# Button Builder Reference

## HTML Properties

HTML attributes are used to define the button's fundamental properties and behavior.

- **type**: Specifies the button's behavior. Common values are `submit` (to submit a form), `reset` (to reset a form), and `button` (a generic clickable button).
- **name**: Provides a name for the button when it's part of a form.
- **value**: Sets the initial value of the button, often used to send data in a form.
- **disabled**: Renders the button unusable and unclickable.
- **autofocus**: Automatically gives the button focus when the page loads.
- **form**: Associates the button with one or more forms.

## CSS Styles

CSS styles control the visual presentation of the button. These can be applied directly to the button element or using classes and IDs.

### Box Model Properties

Define the button's size and spacing.

- **width** and **height**: Set the dimensions of the button.
- **padding**: Creates space between the button's content and its border.
- **margin**: Creates space around the button, pushing it away from other elements.
- **border**: Defines the border around the button, including `border-width`, `border-style`, and `border-color`.
- **border-radius**: Rounds the corners of the button.

### Color and Background

Control the color scheme.

- **color**: Sets the text color.
- **background-color**: Sets the button's background color.
- **background-image**: Uses an image as the button's background.
- **opacity**: Sets the transparency level.

### Text and Font

Style the text inside the button.

- **font-family**: Sets the typeface.
- **font-size**: Adjusts the size of the text.
- **font-weight**: Makes the text bold or light.
- **text-align**: Aligns the text horizontally.
- **text-transform**: Converts the text to uppercase, lowercase, or capitalized.
- **letter-spacing**: Adds or removes space between letters.
- **line-height**: Adjusts the space between lines of text.

### Layout and Positioning

Control how the button is placed on the page.

- **display**: Defines the layout behavior, such as `block`, `inline`, or `flex`.
- **position**: Determines how the button is positioned (e.g., `relative`, `absolute`).

### Interactive States

Styles that change when a user interacts with the button.

- **:hover**: Styles for when the mouse pointer is over the button.
- **:active**: Styles for when the button is being clicked.
- **:focus**: Styles for when the button is selected (e.g., using the keyboard's Tab key).
- **:disabled**: Styles for when the button is in a disabled state.

### Other Styles

- **box-shadow**: Adds a shadow effect to the button.
- **cursor**: Changes the mouse cursor when it hovers over the button (e.g., `pointer`).
- **transition**: Creates smooth animations for style changes (e.g., on hover).
- **transform**: Allows for 2D or 3D transformations like rotating or scaling the button.
