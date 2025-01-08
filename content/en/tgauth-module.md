---
title: "Telegram authentication | Nuxt Module"
description: "Utility components, functions and server utilities for managing Teelgram based authenticatio in Nuxt 3"
index: 2
date: "June 24, 2024"
image: "/_images/tgauth-module/cover.png"
---

## The motivation

While working on a project I wanted to integrate with the [Telegram login widget](https://core.telegram.org/widgets/login).

There was no module that handled this well in the ecosystem at the time, which pushed me to create my own.

### What value does it bring today?

At the time of the writing of this article, I have not seen a better solution to this problem, even in fresh releases:
- [vue-tg](https://vue-tg.deptyped.com/widgets.html#login-widget)
- [nuxt-telegram-auth](https://nuxt.com/modules/nuxt-telegram-auth)

### What makes the module uniquely valuable?

It's quite simple: validation in server handlers.

Since the authenticity of user data and the existance of a telegram account associeated with a request can be validated by computing a hash (as described [here](https://core.telegram.org/widgets/login#checking-authorization)), this module can, in my understanding, act as a full-fledged authentication system (assuming you have a simple app and your goal is to recieve 'proof of work' associated with registering a telegram account via phone number).

[Check out the module](https://nuxt.com/modules/tgauth)