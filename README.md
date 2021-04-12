# Startup Generator
Translate words into startups.

## About
This project is inspired by [this episode](https://gimletmedia.com/shows/startup/emhw6d) of Alex Bloomberg's Startup Podcast, where he's struggling to come up with a name for his company. At one point, he and his cofounder begin throwing words at Google Translate, ending up with words like "Orelo", which is Esperanto for the word "ear".

Out of curiosity, I tried out various words & languages, and found a handful that work quite well. So, I built a tool that makes those translations, and randomly generates some branding for each translation.

## Technologies Used
This repository contains only the client-side, which is built with Vue 3. Aside from the Firebase Client SDK, and the typical Vue tooling, the project is pretty light on dependencies.

On the server-side, I'm using Firebase. Most notably, I'm using the [translate text extension](https://firebase.google.com/products/extensions/firestore-translate-text), which makes translations a breeze.

## Live Demo
You can try the project out [here](https://startup-generator.netlify.app/).

## License, Contribution, and Use

License is [MIT](https://opensource.org/licenses/MIT), so feel free to use the source code for your own purposes.

I'm always open to collaboration. Please be aware that if you want to run this project locally, you'll need to configure a backend for it. You can reach out to me through my [website](https://www.johnbauer.me/contact) if you'd like to chat more about it.