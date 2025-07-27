---
title: "Rewrote my school's website"
description: "Using Supabase, Nuxt & Docker"
index: 9
date: "July 27, 2025"
image: "/_images/school-550/cover.png"
---

## Introduction

A while back I started rewriting my school's website, since it was using technologies so old that most people reading this have not even heart of.
After two years of learning about databases, DevOps, containerization and improving my frontend skills, I released it.

## About the thing

I wrote a custom CMS within PostgreSQL (which is what Supabase is based on). The CMS is built on Markdown & [@nuxtjs/mdc](https://github.com/nuxt-modules/mdc).

The website is self-hosted within multiple docker containers, using docker compose. The images are built in a CI/CD pipeline using GitHub Actions.

## Results

It's far from perfect, and post-factum I would have done so many things differently, it's done and it is useful to somebody, and that's what matters.

Of-course, today I might opt for GitLab CI, Kubernetes, and maybe Terraform. But that can be for a future project.

The primary goals of this were to deliver something functional, and learn as many best practices as possible along the way.

You can check out the monstrosity [here](https://portal.ort.spb.ru).
