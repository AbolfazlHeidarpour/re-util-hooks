# React Util Hooks!

Custom React hooks for better development.

Includes utility hooks to work more efficiency with Material UI components,
hooks to work easier with string and number states and much more!...

Fully written in TypeScript.

## Example

### useTextFields
Custom React hook for working with MUI TextField and Input components.
Suitable for forms with multiple inputs.

Also works with standard input element.

````tsx
const {
    getTextFieldProps,
    getInputProps,
  } = useTextFields({
    initialValues: {
      username: '',
      password: ''
    },
    initialHelperTexts: {
      username: 'Enter user name',
      password: 'Enter password',
    },
    options: {
      textFieldProps: {
        password: {
          type: 'password',
          variant: 'filled',
        }
      }
    }
  });

  return (
    <>
      <Input {...getInputProps && getInputProps('username')} />
      <TextField {...getTextFieldProps('password')} />
    </>
  );
````

### useNumber
Useful React hook whenever you needed to work with number states!

```tsx
  const counter = useNumber();

  return (
    <>
      <button onClick={() => counter.increaseBy(2)} >Increase me by 2!</button>
      <button onClick={() => counter.decreaseBy(1)} >Decrease me by 1!</button>
      <button onClick={() => counter.update(10)}>Update me to 10</button>
      <button onClick={() => counter.update(20)}>Update me to 20</button>
      <button onClick={() => counter.reset()}>Reset me to initial value</button>
      Change me!
      <input type={'number'} value={counter.state} onChange={counter.onChange} />
      <Typography variant={'h4'}>{counter.state}</Typography>
    </>
  );
```

### useString
You need to work with string state? No worries! import and use useString!
```tsx
  const text = useString('Frank');

  return (
    <>
      <button onClick={() => text.update('This is new string')} >Update me!</button>
      <button onClick={() => text.reset()}>Reset me to initial value</button>
      Change me!
      <input type={'text'} value={text.state} onChange={text.onChange} />
      <Typography variant={'h4'}>{text.state}</Typography>
    </>
  );
```

### useBoolean
Custom React hook for working with boolean states.
For example opening a dialog, Hiding and showing an element and much more!...

```tsx
  const dialog = useBoolean();

  return (
    <>
      <Button onClick={() => dialog.set()}>Open dialog</Button>
      <Dialog open={dialog.state} onClose={() => dialog.reset()}>
        <DialogTitle>This is a dialog!</DialogTitle>
        <DialogContent>
          <DialogContentText>Click outside of dialog or on Close button to see how useBoolean works!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dialog.reset()}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
```
