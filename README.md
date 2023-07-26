Description
In this talk, attendees will learn 5 useful design patterns that might be applied to both OOP and Functional programming paradigms to improve their codebase. I'll show useful use-case scenarios to reuse and create powerful and maintainable code.

Outline

Did you know that there're design patterns to help you write better tests? There're even other patterns made to help you write reusable code abusing of best practices and code abstraction to keep it easy to maintain. This talk will teach you powerful design patterns with good real-life examples.

This talk will cover the following topics:
- Factory
- Builder and Fluent Interface
- Dependency Injection
- Test Data Builder & Object Mother - Design Patterns for Testing
- Strategy

#call4papers


---
- I started working with C# and there we had so many different patterns that was hard to get started
- When I first saw JavaScript, everyone was using global variables, single file applications and a lot of problems
- It turned out people are still struggling to manage projects in long term
- So I brough all my knowledge from C# to JavaScript and adapted to use in JavaScript

- The first step is Single Responsibility
- Even if you don't know any design pattern the best thing is to split your program into different files
- While working with software everything should be written thinking on how to test it
- This talk was thought on how to link all patterns refactoring code

- show all code into a single file (frontend)


    split responsibilities into different files
    Tip #1 - N-Layers
        problem 1: how to test it? we have window, filesystem and timers

    Tip #2 - Depency Injection

    Tip #3 - Factory

    Top #4 - Abstract Factory
        - Use ESM - Isomorphic JS

    Tip #5 - Builder
        - ORMs

    Tip #6 - FluentAPI
        - when order matters

    Tip #7 Test Data Builder & Object Mother
        Design patterns for testing

    Some of the tests you probably is using
    Tip #8 - Observer - RxJS + EventEmitter
        browsers don't have the eventEmitter class
        eventEmitter is a observer

    Decorator
    Tip #9 - TypeScript Decorators or APMs

    Tip #10 - Async Iterator - on demand processing

- How to choose a design pattern?

End :)


Projeto
    - Problem
        - You have a working program that is a CLI and now should work also on Web

    - front and backend (Abstract Factory, DI, Factory)
    - tests (Test Data Builder & Object Mother)
    - click on a button (blessed), send analytics (Observer)
    - query data on demand (Async Iterator + Fluent API)
    - log execution time and send analytics (Decorator)

[javascript-performance-api-in-10-minutes-10b5883b7e79](https://javascript.plainenglish.io/javascript-performance-api-in-10-minutes-10b5883b7e79)
[js-performance-api](https://www.digitalocean.com/community/tutorials/js-js-performance-api)