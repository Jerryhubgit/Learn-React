## export and export.default()

Using the `export` requires you to import using braces `{ variable }` so the variable can't change its name when importing
unlike `export default` which allow you to change it since is just the `varaible`

## Why JSX is important
Creating elements without our typical `.jsx` is a mess.
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

## JSX rules

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

## React keys

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

## Styling React Component

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

## Css Module

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

## Event Handling

Event handling is how react responds to change i.e clicked a button, pressed a key .
We have three things `Event`, `Event object` and `Event handler`

- `Event` - this is the action happend i.e clicked a button, pressed a key, so the `onClick`, `onChange`, `onSubmit` are called `event types`
- `Even object` - is the changes that would result from what you did. You could set you event object to `console.log(...)` or something else. What will happen when that event object is triggered is the `event object` and it's usually declared in the function which `handles`

- `Event handler` - is the function that calls the `event object`

what are their differences

- `{ handleClick }`
- `{ handleClick()}`
- `{ () => handleClick }`
- `{ () => handleClick() }`

Responding to events is a two-step process

1. Define the function to be executed when event occurs
2. Then you assign the function to a special `prop` that starts with `on` e.g `onClick()`, `onChange()`

- So handling events is all about passing function to special props like `onClick`
- Remeber not to call it you just pass it unlike HTML

```HTML
<button onclick="handleClick()">Click me</button>
```

There are other event handler you can try out like: `onSubmit` - forms, `onMouseEnter`, `onMouseLeave`, `onKeyDown`, `onKeyUp`, `onFocus` - input receives focus, `onBlur` - input loses focus

## Event handlers as props

We might want to reuse a component in multiple places, for example: a button might be used as `contact button` and `subscribe button` but you'd want them to perform different actions

Each component receives the `event handler` as a prop and decides what `event object` should be produced when we click

We do this:

```javascript
export const ActionButton = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};
```

So what happend here is when you click on the button `onClick={onClick}` the second `onClick` is the function which is `event handler`

The `event hanlder` was passed into the `event` as an argument to be handled differrently by each component, since they would produce differrent result

I handled place we used the `Event handler` as prop was here

### Menu 
```javascript
import { MenuItem } from "./MenuItem"
export const Menu = () => {
     const handleOrder = (itemName, itemPrice) => {
        console.log(`You bought ${itemName} for $${itemPrice}`)
    }
    return (
        <div>
            <h2>Menu</h2>
            <MenuItem name = "Pizza" price={23.22} onOrder={handleOrder}/>
            <MenuItem name = "Spring rolls" price={45.20} onOrder={handleOrder}/>
            <MenuItem name = "Turkey" price={123.22} onOrder={handleOrder}/>
        </div>
    )
}
```
### MenuItems
```javascript

export const MenuItem = ({name, price, onOrder}) => {
   
    return(
        <div>
            <span style={{margin: "30px"}}>{name} - ${price}</span>
            <button onClick={() => onOrder(name, price)} style={{padding: "5px 10px"}}>order</button>
        </div>
    )
}
```
- We created a `Menu` and passed the `Menu items` into the menu 
- The main part is where we trigger the `onClick` the parent `Menu` calls the `handleOrder` function


## State - useState 
State is a component's memory, it's a special data that
- Triggers a re-render when it changes (solving our screen update problem)
- Presists between renders (solveing our reset problem)
because react renders from top to bottom on every render variable could be reinitialized instead of being persistent

the `[currentvalue, setterFunction] = useState(initialValue)`

Lazy initialization - to initialize on when you need it 
it's used when 
- reading values from localStorage
- Feting from API
you might have created a variable for it but you only want to intialize it when you receive it

```javascript
import {useState } from "react"

export const LoginCard = () => {
    const [message, setMessage] = useState()
   
    const handleChange = (e) => {
        setMessage(e.target.value)
    }
    return (
        <>
            <div>
                <h2>{!message ? "Text displays Here" : message}</h2>
                <input type="text" placeholder="Enter your message..." value={message} onChange={handleChange}/>
            </div>
        </>
    )
}
```
- first note the `input` has parameter called `value` 
- you set the initial value of `message` to it
- you use the `handleChange` to change the `message` and with what's in the input
- which in turn updates the screen

### Summary useState
- it returns two items and we do use array destructuring to received them `[currentValue, setterFunction]` 
- We can have multiple state variable each managing its own data 

## Question

1. why was css module invented
2. how was it implemented
3. Why do value not update naturally in react and we always have to use the useState hook to update values
4. What's the essence of strictmode
5. What are hooks 
6. in the counter project why does `++count` behave differently from `count++`
