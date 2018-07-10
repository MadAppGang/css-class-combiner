# CSS class combiner


### What is it?
It is a super small utility that comes in handy when you have to compose a css class name out of multiple variables. The useful part is in being able to chain combinations and apply combinations based on boolean conditions.

It can really increase your code readability as template strings can turn in hell when you got loads of css classes to compose a single class name of.

### Real-life example

Let's imagine that we have an interactive element, that has different stylings for different states.

```js
...
return <a className={className}>Hello world!</a>
```

So, when rendering, we have a couple of boolean variables telling us whether the element should have an additional class name.

```js
const isHovered = true;
const isFocused = false;
...
```

If order to compose a final css class name we have to write a some condition statements:

```js
let className = 'baseClassName';

if (isHovered) {
  className += 'hoverClassName';
}

if (isFocused) {
  className += 'focusClassName';
}

return <a className={className}>Hello world!</a>
```

First off, the class name is a mutable variable, second - this does not look compact at all.

What we could use instead would look something like this:

```js
 const className = new Combiner('baseClassName')
   .combineIf(isHovered, 'hoverClassName')
   .combineIf(isFocused, 'focusClassName');
   
  return <a className={className}>Hello world!</a>
```

This way the code looks nice, it's shorter and semanticly perfect.

### How to install it?
It is available on npm, just run the following command:
```bash
npm install --save css-class-combiner
```

### How to use it?
You just import the combiner
```javascript
import Combiner from 'css-class-combiner';
```

Combiner is a constructor that accepts an initial class name as a first argument.
```javascript
const className = new Combiner(baseClassName);
```

You then can combine that initial class name with any other ones:
```javascript
const className = new Combiner(baseClassName).combine(additionalClassName)
```

Feel free to chain combine calls to achieve a better readability:
```javascript
const className = new Combiner(baseClassName)
  .combine(anotherClassName)
  .combine(yetAnotherClassName)
```

It also works if you pass all additional classNames as a set of arguments into one combine call:

```javascript
const className = new Combiner(baseClassName)
  .combine(anotherClassName, yetAnotherClassName)
```

Sometimes you have a class name but it has to be applied only under certain conditions, so you have an ability to specify those:

```javascript
const className = new Combiner(baseClassName)
  .combineIf(isHovered, hoverClassName)
  .combineIf(isFocused, focusClassName)
  .combine(commonClassName, someOtherClassName);
```

You can pass multiple classes to `combineIf` as well, so use it as you like.

### How it works?
As you noticed the constructor creates an instance of combiner that holds the API methods, so you might be thinking how does it become an actual css class string?

The answer is very simple, the combiner gets transformed in a class string when it gets explicitly casted to `String` as it has a custom implementation of the `toString` method.

### Contribute
If you discovered some features that hasn't been implemented yet, but would be very useful to have - we would be happy to see your pull requests. Anyway, thanks for visiting!