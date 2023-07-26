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
intro
    - I started working with C# and there we had so many different patterns that was hard to get started
    - When I first saw JavaScript, everyone was using global variables, single file applications and a lot of problems
    - It turned out people are still struggling to manage projects in long term
    - So I brough all my knowledge from C# to JavaScript and adapted to use in JavaScript

    - to make things more interesting I wanted to bring real world examples for you to learn how to apply those patterns I'm gonna show you today.
    - My goal is to get a simple application and refactor it adding those patterns and business requirements so it'd be easier for you to come back and check out the examples.

initial code
    - a simple code that uses commonjs
    - consumes a Web API
    - can perform search in memory

identifying problems
    - single file application
    - global variables

solving
    - The first step is Single Responsibility
    - Even if you don't know any design pattern the best thing is to split your program into different files
    - Use ESM for using native modules in the browser

    - #1 - N-Layers
        view
        service
        controller
    - #2 - Dependency Injection
        - While working with software everything should be written thinking on how to test it

    - #3 - Factory
        factory - instance manager

breaking news: new requirement from the PM
    - now the application should work on desktop with similar features
    - JavaScript is the best because with the same code you can write both back and frontend apps - Use ESM - Isomorphic JS

    - #4 - Abstract Factory
        - benefit: shared layer
        - all platforms export a view with the same signature
            .configureOnClearClick
            .configureOnSearchClick
            .render
    - #5 - Builder
        create complex objects in different steps
            this.#components = layout
                .setScreen({ title: 'Design Patterns with Erick Wendel' })
                .setLayoutComponent()
                .setSearchComponent(this.#onSearch)
                .setTable(template)
                .build()
    - #6 - FluentAPI
        fluent API is similar and you may have seen it on ORMs
            - print ORM
    - #7 - Test Data Builder
        Design patterns for testing

    Some of the tests you probably is using
    - #8 - Observer - EventEmitter
        browsers don't have the eventEmitter class
        eventEmitter is a observer
        don't call me I call you
        observers
            - whos gonna be notified when an event happens
        subject
            - what context (EventEmitter but as the browser doesnt have it I implemented)
    - #9 - Decorator
        - usually used by APMs
        - @Decorator
        - not available yet in JavaScript but is x years been working
        - decorator is a pattern, @ is just a syntax sugar

    - #10
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
[Performance](https://developer.mozilla.org/en-US/docs/Web/API/Performance)
[Title](https://mdx-talk.developermode.com/31)
[Title](https://componentsasdata.lukeherrington.com/6)
[Title](https://github.com/infiniteluke/components-as-data-presentation/tree/master)
[Title](https://www.loginradius.com/blog/engineering/guest-post/http-streaming-with-nodejs-and-fetch-api/)