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

## How I Got Here

To get this project up and running, this is what I did:

- ran `dotnet new react` to scaffold the .NET Core SPA project
- deleted the contents of the ClientApp folder (because I didn't like the template's react app)
- renamed ClientApp to client-app (and made necessary changes in C#), to make it more friendly for what follows
- ran `npx create-react-app client-app` to create a new React app from scratch
- set up some task & launch scripts for Visual Studio Code so that I could run & debug using the excellent Chrome debugging extension (full C# & JS step debugging in VSCode FTW!)
  - BEWARE: I develop exclusively on Windows, and I don't do any other work which uses/requires Nodejs, so the `.NET Core + Chrome` VSCode launch script is set up to terminate all running Node processes indiscriminately when debugging is stopped!

## Help!

To anyone who happens across this repository: I'm very interested in knowing whether I'm doing any of this correctly. Teaching onesself modern web development seems to be frought with blind alleys and an almost paralyzing abundance of choices, approaches, libraries, etc. I'm pretty new to JS/ES, know almost nothing about CSS, and despite having been in the software development game for over 15 years I've managed (until recently) to remain basically ignorant of most of what goes on in web development. Even as an experienced developer, I'm finding it difficult to separate the good practices from the bad when it comes to web programming.
