@trenskow/fail-silently
----

A simple function wrapper for ignoring errors thrown.

# Usage

You wrap the function you want to ignore errors thrown from as the example below.

````javascript
const
	failSilently = require('@trenskow/fail-silently');

function myThrowingFunction(shouldThrow) {
    if (shouldThrow) throw new Error("This is my error.");
    return 'Hello, World!';
}

failSilently(myThrowingFunction)(false); // -> 'Hello, World!'
failSilently(myThrowingFunction)(true); // -> undefined
````

> It also works with `async` functions.

# LICENSE

See license in LICENSE

