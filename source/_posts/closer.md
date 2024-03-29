---
title: 明明1句话就能理解「闭包」
date: 2017-12-28
categories:
 - coding
 - frontEnd
tags:
 - 闭包
 - 函数
---
<!-- 
## 讲人话:

**「 一个函数 + 这个函数的外部环境   =   闭包 」**

所以，这类看似不负责的说法都是正确的：

> 一个函数就是一个闭包

> A clouser is nothing but a function with scope.

> A Closure is nothing but a function inside a function.

我感觉闭包已经讲完了，但是这样你们肯定想揍我。

## 讲专业:

### 先瞅瞅wiki
> In programming languages, a closure, also lexical closure or function closure, is a technique for implementing lexically scoped name binding in a language with first-class functions. Operationally, a closure is a record storing a function together with an environment. The environment is a mapping associating each free variable of the function (variables that are used locally, but defined in an enclosing scope) with the value or reference to which the name was bound when the closure was created. Unlike a plain function, a closure allows the function to access those captured variables through the closure's copies of their values or references, even when the function is invoked outside their scope.

大概意思是：闭包（也称为词汇闭包或函数闭包）是一种在具有一级函数的语言中实现词汇范围名称绑定的技术。从操作上讲，闭包是一个记录，它将一个函数与一个环境一起存储。 环境是一种映射，将函数的每个自由变量（本地使用但在封闭范围内定义的变量）与创建闭包时名称绑定到的值或引用相关联。 与普通函数不同，闭包允许函数通过闭包的值或引用副本访问这些捕获的变量，即使函数在其作用域之外被调用。

### 再瞅瞅MDN对JavaScript中闭包的描述
> 一个函数和对其周围状态（lexical environment，词法环境）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是闭包（closure）。也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。

### 我来总结：

我觉得MDN说的好。 -->


