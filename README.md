# CHECKPOINT 3

## Disclaimer

It's no big deal if you don't do everything before the deadline (as far as you finish it before next week !). 

Do your best, and most importantly HAVE FUN 😃

# The checkpoint itself 🔥

## :zero: Setup | 30sec

Before starting anything technical, your first mission is to clone this project, then create a branch with your lastname and firstname like so : `lastname_firstname`

## :one: Quizz | 5 min

Go to [this link](https://wild-quizz.jsrover.wilders.dev/play/js-checkpoint-3-en). You will need to login with Github in order to access it.  
Once you have validated it, you can check your answers on your [profile page](https://wild-quizz.jsrover.wilders.dev/profile)

## :two: Database modeling | 20-25 min

We want to build a website that allows users to discover and share cooking recipes. Your mission here is to provide a **logical data model** that meets the following constraints for the application :

- Users must be able to identify themselves on the application with a username and password.
- Several recipes can exist for a specific dish. Each dish is defined by his name and his type (starter, main course or dessert)
- Each recipe is defined by : a title, an author, a date of creation, a list of ingredients and an ordered list of steps. A recipe is always related to a dish.
- For each recipe, we should be able to find the steps of the recipe as well as the order in which they need to be done.
- For a given recipe, for each ingredient we should be able to find the quantity and the unit (eg: 200g of flour -> unit: g, quantity: 200).
- Finally, each user must be able to add a recipe to his favorites.

### To properly model your database :

- Start by identifying **entities** and defining their **relationships** (with cardinalities) through a **conceptual data model**. Use paper/pencil to draft this first model.
- On the basis of the previous model, design the **logical data model**
  by adding attributes, foreign keys and/or junction tables.

You can use the tool of your choice to produce the database model :

- ✏️ Paper and pencil 

- 🛠️ Any diagram drawing applications like [Workbench](https://www.mysql.com/fr/products/workbench/), [Draw.io](https://app.diagrams.net/), [Google Drawings](https://chrome.google.com/webstore/detail/google-drawings/mkaakpdehdafacodkgkpghoibnmamcme/related?hl=fr), or [This VSCode extention](https://marketplace.visualstudio.com/items?itemName=dineug.vuerd-vscode)...

<a href="https://www.loom.com/share/b612c56d806040ac97b3645d72e359c2"> <p>How to use VSCode to model a database</p> <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/b612c56d806040ac97b3645d72e359c2-with-play.gif"> </a>

Once you're satisfied with your data model, take a picture, a screenshot or export as an image and commit it to your branch.

## :three: Node / SQL | 3h30

![](https://camo.githubusercontent.com/fff9dcda39624d1d9f89f23cb2c6dc54dae750a52700b930afbd2af7b0d1e293/68747470733a2f2f6c61756768696e6773717569642e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031332f30352f676976656c6966656261636b746f6d75736963352e676966)

### Getting started

The goal of this checkpoint is to implement a REST API backed by a SQL database. 
#### Database

You can use whatever SQL database you like (MySQL, SQLite, Postgresql, ...). 
Here is the schema of the database you need to create beforehand. 

![](https://camo.githubusercontent.com/3c19127eade9d784c0060d3e2a4e7838e653a50bd576b9c7a0c4a7b0a0d8373d/68747470733a2f2f692e696d6775722e636f6d2f5a33444b5643542e706e67)
![](https://camo.githubusercontent.com/947c593bda05ee3591b2a5c387865e3b94f45f2eef165ff62bea9311e46dbfa6/68747470733a2f2f692e696d6775722e636f6d2f504473536f45432e706e67)

#### Server

You can use any NodeJS backend framework (Express, NextJS, ...) to implement the HTTP server.

### Your mission
 
Here are the user stories that you need to implement. 
As a user, I need to be able to : 
- create a new album
- retrieve the full list of albums
- retrieve one album by its ID
- update an album
- delete an album
- create a new track
- retrieve the full list of tracks
- retrieve the track list of one album
- retrieve one track by its ID
- update a track
- delete a track
#### Rules

- Don't forget to make _short commits with explicit messages_ :pray:
- Follow REST best practices ([here's a reminder](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/))
- You are free to use an ORM (like [Prisma](https://www.prisma.io/), or other) if you feel like it. BUT, you have to show your instructor that you can write raw SQL. So if you decide to go with an ORM, comment at least 4 DB requests made through the ORM with the equivalent raw SQL. 
- Leave a trace of your database structure (migration files or a SQL dump of your entire database)
- Test your work ! Using either a REST client (Insomnia, Postman, ...) or by writing automated tests (ex: jest + supertest) if you're confortable with them. If you use a REST client to test your API, export all your requests in a file at the root of the repo. Commit and push this file so that your instructor can import it back and see how you tested your work.

<a href="https://www.loom.com/share/ff9b55493cc0401c8c2be47996f3717f"> <p>How to create a request collection and export it in Insomnia</p> <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/ff9b55493cc0401c8c2be47996f3717f-with-play.gif"> </a>

---



## Bonus

If you have some time left, try to :

- Clean and lint your code (Prettier + ESLint)
- Implement pagination, search and sorting on a route that returns a list.
- If you haven't done it, refactor your code with an "MVC-like" architecture.
- write a few tests with jest and supertest 
- Implement a simple user system with registration and login features.
- Implement roles and permissions, for example : unlogged  users shouldn't be able to access the album or tracks routes, and only users with the role 'artist' should be able to perform write operations on albums and tracks.

## It's done ! Congrats !

![](https://i.giphy.com/media/RkKf9xU0QjpwwM3YfL/giphy.webp)  

You can now chill :beers:

