[![Build Status](https://secure.travis-ci.org/cujojs/meld.png)](http://travis-ci.org/cujojs/meld)

[Aspect Oriented Programming](http://en.wikipedia.org/wiki/Aspect-oriented_programming "Aspect-oriented programming - Wikipedia, the free encyclopedia") for Javascript.

## Changelog

### 0.7.2

* Fix for context when advising constructors: `this` is now the constructed instance in all advice functions.

### 0.7.1

* Fix for global name when using meld as a browser global. Thanks [@scothis](https://github.com/scothis)
* Update unit tests to run in browser using `buster server`, in addition to node. Thanks again, [@scothis](https://github.com/scothis) :)

### 0.7.0

* Advice can be applied directly to functions without a context.
* Advice can be applied to constructors.
* `joinpoint.proceed()` can be called multiple times. This makes it possible to implement "retry" types of advice.

### 0.6.0

* aop.js is now meld.js
* Use [Travis CI](http://travis-ci.org/cujojs/meld)

### 0.5.4

* Optimizations to run time advice invocation, especially around advice
* Fix for passing new args to `joinpoint.proceed()` in around advice
* Added `joinpoint.proceedApply(array)` for proceeding and supplying new arguments as an array
* Ported unit tests to [BusterJS](http://busterjs.org)

### 0.5.3

* First official release as part of [cujojs](http://github.com/cujojs)
* Minor doc and package.json tweaks

### 0.5.2

* Revert to larger, more builder-friendly module boilerplate.  No functional change.

### 0.5.1

* Minor corrections and updates to `package.json`

### 0.5.0

* Rewritten Advisor that allows entire aspects to be unwoven (removed) easily.

# Beers to:

* [AspectJ](http://www.eclipse.org/aspectj/) and [Spring Framework AOP](http://static.springsource.org/spring/docs/3.0.x/reference/aop.html) for inspiration and great docs
* Implementation ideas from @phiggins42's [uber.js AOP](https://github.com/phiggins42/uber.js/blob/master/lib/aop.js)
* API ideas from [jquery-aop](http://code.google.com/p/jquery-aop/)