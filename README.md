# react-flow-playground

A .NET Core SPA project for playing around with the react-flow diagramming library. My goal is just to generally come to grips with React and Material-UI, and then to play around a bit with react-flow because it looks like a pretty interesting diagramming tool. I'm coming at this with very little web/front-end experience, so I expect I'll be thrashing around quite a bit putting this all together. I chose to use .NET Core for the backend because C# is much more in my wheelhouse than Node/javascript.

## Goals

Since I'm using this project as a learning platform, I have a couple of basic things I want to implement/mess around with to get my feet wet with React (and web programming in general) before I really dive into exploring the react-flow library:

- Material-UI for styling, which (to my eye) looks more attractive/React-friendly than Bootstrap
- Basic login flow (nothing fancy, no user registration or anything)
- Browser local storage for remembering the user across sessions
- Routing, including public & private routes
  - A public landing page with a login button, that redirects if the user is already logged in
  - A login page (that also redirects if the user is already logged in)
  - A private page for the react-flow stuff

Once all that is in place, and I'm satisfied with it, my goal is to then implement some custom react-flow nodes, let the user construct diagrams out of them with save/load functionality. I don't have a purpose in mind for the diagrams, this is all about learning to use the library while picking up some React skills along the way, and nothing more.

## Help!

To anyone who happens across this repository: I'm very interested in knowing whether I'm doing any of this correctly. Teaching onesself modern web development seems to be frought with blind alleys and an almost paralyzing abundance of choices, approaches, libraries, etc. I'm pretty new to JS/ES, know almost nothing about CSS, and despite having been in the software development game for over 15 years I've managed (until recently) to remain basically ignorant of most of what goes on in web development. Even as an experienced developer, I'm finding it difficult to separate the good practices from the bad when it comes to web programming.
