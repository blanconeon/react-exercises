// number one. The first method is adding a defaultProps static property to the component:

function Example(props) {
  return <h1>{props.text}</h1>
}

Example.defaultProps = {
  text: 'This is default text',
};

// number two, You can also specify the default value directly in the function definition:

function Example({text='This is default text'}) {
   return <h1>{text}</h1>
}


// number three. Lastly, you can also set the default value in the function body:


function Example(props) {
  const {text = 'This is default text'} = props;
  return <h1>{text}</h1>
}



/* 
That’s right! When you set a default value using destructuring in the function parameter, like this:

```js
function Example({ text = 'Default text' }) {
  return <h1>{text}</h1>
}
```

You use `{text}` inside the component, not `props.text`. If `App` does not pass a `text` prop, `text` will use the default value you set. If `App` does pass a `text` prop, it will use that value instead. So, you do not need to use `props.text` in this case.Correct! When you use a default value in the function parameter, like this:

```js
function Example({ text = 'Default text' }) {
  return <h1>{text}</h1>
}
```

You just use `{text}`. If `App` does not pass a `text` prop, the default is used. If `App` does pass a `text` prop, that value is used. No need to use `props.text` in this case. */
