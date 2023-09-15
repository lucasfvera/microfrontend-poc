# Micro Frontend application

This repository stores three different clients that work as a single app.\
It's a proof of concept for a microservice architecture application.


It was created by following the ["Micro Frontend"](https://martinfowler.com/articles/micro-frontends.html)
by Cam Jackson article in https://martinfowler.com page.


It has 3 independent applications:
- Container app\
  It's the main frontend application that serves the other apps. It has common
  components like the Navigation Bar and the Header of the application that's
  shared across the other apps (or pages).
- Home app\
  It's a page under the "/" path that's rendered inside the Container app with a
  count button.
- About app\
  It's a page under the "/about" path rendered inside the Container app with a
  summary of the application.


## Tech Stack
Each client was built with `Vite` + `React`. It also uses `react-router-dom` 
as a router to navigate across the subpages.