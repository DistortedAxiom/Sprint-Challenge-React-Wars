# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a javascript library that allows us to create reusable components and manipulate the DOM by creating a virtual DOM that handle changes to the application,
such as user input, hooks and more. This allow it to create interactive UIs and applications

1. Describe component state.

State is an object that contains property values that belong to the component. It can store information that is changeable and re-render the component.

1. Describe props.

Props are properties that are passed into a child component that are not mutable

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Side effects are anything that happens outside the scope of the function, such as retrieving data from an API, logging or manually manipulating the DOM.
we utilize "useEffect" to make changes to the component after it has finished rendering.
