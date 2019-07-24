# ![fridge](https://i.imgur.com/jOpSJ9pt.jpg) myFridge
Single Page Application that enables authenticated and authorized user access to their groceries resource database through CRUD actions.

[Frontend repo](https://github.com/ekmy318/myfridge_frontend) :apple: [Backend repo](https://github.com/ekmy318/myfridge_backend)

[Client deploy](https://ekmy318.github.io/myfridge_frontend/) :green_apple: [Heroku deploy](https://thawing-beyond-81012.herokuapp.com/)

## Technologies Used

| Frontend      | Backend |
| ------------- |---------|
| :watermelon: Javascript | :pineapple: Ruby     |
| :fried_shrimp: HTML     | :stew: Ruby on Rails |
| :strawberry: jQuery     | :banana: PostgreSQL  |
| :pizza: CSS/SCSS        |
| :lemon: Bootstrap       |


## The Development
Admittedly, I do not keep a mental list of every item in my fridge and its expiration date in my head. The number of times I've found myself with 3 ![](https://i.imgur.com/YtX0WSz.jpg) bottles ![](https://i.imgur.com/YtX0WSz.jpg) of ![](https://i.imgur.com/YtX0WSz.jpg) ketchup is quite embarrassing.

**Cue myFridge!**

![](https://i.imgur.com/jOpSJ9p.jpg)

myFridge is a single page application that allows a user to log their groceries and keep track of the expiration date through a one-to-many relationship. The user is able to sign up, sign in, change password and sign out. The grocery resource can be created, read, updated and destroyed.

![ERD](https://i.imgur.com/Y5BbEzf.jpg)

The frontend styling was heavily dependent on Bootstrap's dropdown menu, model and form components, as well as Handlebar Helpers for view rendering. To minimize rewriting and reformating code, the frontend and backend were developed simultaneously for the most part.

![wireframe](https://i.imgur.com/aDMmPpK.jpg)

As always, the best problem-strategy is to:
1. :question: Break down the problem to simple blocks - What specifically am I trying to achieve?
2. :books: Still stuck? Research previous issues.
3. :outbox_tray: Still stuck? Submit an issue to the instructional team.
4. :two_women_holding_hands: Still stuck? Talk with a fellow dev to a get different perspective.

Most importantly, follow the golden rule: :mega: **CONSOLE LOG EVERYTHING.** :mega:


## User Stories
- As a user, I want to create a new account.
- As a user, I want to sign into my account.
- As a user, I want to change the password of my account.
- As a user, I want to log out of my account.
- As a user, I want to, on my account, view all groceries.
- As a user, I want to, on my account, create a grocery with a name, expiration and price.
- As a user, I want to, on my account, edit a grocery's name, expiration and price.
- As a user, I want to, on my account, delete a grocery.

## Future Iterations
- Develop a "roommate" mode where two different authenticated users have access to the same "fridge"
- Another resource for freezer items
