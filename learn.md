### export and export.default()

Using the `export` requires you to import using braces `{ variable }` so the variable can't change its name when importing
unlike `export default` which allow you to change it since is just the `varaible`

- Creating elements with our typical `.jsx` is a mess.
  Example: To create, an element with the JSX syntax, you'd have to do

```javascript
React.createElement(div, { id: "container" }, "hello jerry");
```

#### without JSX

```javascript
import React from "react";

export const CardWithoutJsx = () => {
  return React.createElement(
    "div",
    { id: "card" },
    React.createElement("h2", null, "Welcome"),
    React.createElement("p", null, "This is a paragraph with text"),
    React.createElement("button", null, "without JSX"),
  );
};
```

### JSX rules

- All jsx code must closed. we can't have

```javascript
<input type="email">
```

The correct way is

```javascript
<input type="email" />
```

What does the web do when it see react fragments that causes to disappear

`<>
</>`

- every single tags in `JSX` is always closed
- What is the mechanism used to transform JSX back to HTML
- Do all componet already have a prop immediately they are created

when reusing a props is better to used the spread operator `...` than reassingig them

````javascript
<UserInfo name={name} age={age} city={city} email={email}  />


// Do this instead

<UserInfo {...props}  />

### Props Pattern

```javascript
  <CardWrapper title="Nesting Items inside props" >
        <p>Designing files </p>
        <button>inside props</button>
    </CardWrapper>
````

the above is possible since the `p` and `button` tag get appended into children props, which is used to append children

```javascript
export const CardWrapper = ({ title, children }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <div className="card-content">
        Nested Content goes here
        {children}
      </div>
    </div>
  );
};
```

- can we use `forEach` to render items in React

- why should every child class have a unique key

```
installHook.js:1 Each child in a list should have a unique "key" prop.
```

Conditional Rendering- is how we make our components show different content based on differrent conditions

Ways of doing conditional rendering

- use of if statement
- use of ternary operators
- AND (&&) logic
- use of varaibles for complex logic
- Activity component (React 19.2)

key is a special prop react uses internally, it's used when rendering list to tell different list apart

```
Example: if react already sees this
key=1 → Laptop
key=2 → Phone
key=3 → Mouse

and it gets  updated, to avoid rebuilding it from scractch
key=1 → Laptop
key=4 → Keyboard
key=2 → Phone
key=3 → Mouse
```

react uses key to tell know which element was newly added to the list and which already exists
So if item was added, removed or reordered

### Without keys

Image we have a list

```html
<ul>
  <li>David</li>
  <li>backend</li>
  <li>clean code</li>
  <ul></ul>
</ul>
```

it needs to be updated to

```html
<ul>
  <li>David</li>
  <li>Samuel</li>
  <li>backend</li>
  <li>clean code</li>
  <ul></ul>
</ul>
```

without keys, `React` thinks every item there is new i.e

```
David updates to  David
backend updates to  samuel
cleancode updates to  backend
---- updates to clean code
```

with keys `React` compares the previous items with the new ones and updates only updates the new ones reducing work.

```
Example: there 4976 list items and i want to add 1 more item, without keys i would have to update it 4977 times as opposed to once with keys
```

### Styling React Component

How do we style components in react
the `{}` in `style={}` is to for javscript
and the `{{}}` in `style={{}}` is for javascript objects which looks like css but has to be modified in terms of syntax (camelCase)

```javascript
export const Alert = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "hsl(0,100%,20%)",
        border: "1px solid red",
      }}
    >
      {children}
    </div>
  );
};
```

There are several methods for styling

- inline - which become inefficient as the app grows
- external styling - results to naming conflicts as a the `.css` file is reuseable anywhere in the project
- Css Modules - you'd have to rename your file from `file.css` to `file.module.css` and its importation shifts from `import './Alert.css'
` to `import styles from './Alert.module.css'
`
  We understand styling well because we've used in the typical `.css`

### Css Module

Helps prevent naming conflicts. 

if you have two buttons in the same file `button1` and `button2` to style them differently, you'd have to have different classNames for them in the same CSS file.

You could style the first one as `.button1` and `.button2` but if there are 45 diffent shades of button it becomes messy coz, your `CSS` now contains 45 different styles for button.

The best thing is to create a `.module.css` file and keep just a single class name `.button` accross your buttons. That single module file has the styles for the different types of button you might have `alert`, `failed`, `successful`, `default` etc, they would be difined in one file. 

Once the styles are applied they are scoped into that button, and you can move them around without having them overwritten 

The default way is

```javascript
import styles from 'filename.module.css`
```

i noticed something crazy that happen when i used the External styling. 

I created a button on two different files they use same `.button` name and one style `overwrote` the other 

I have a `.login.css` which i where is wrote the button and created another button in `.dashboard.css` and they both have same name, since they are both global, one overwrote the other. 

So i made `.login.css` become `.login.module.css` so the style feels embeded into it and so the global style cannot sit on it now