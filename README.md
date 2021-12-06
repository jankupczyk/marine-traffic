<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/jkbkupczyk/marine-traffic">
    🛳
  </a>

  <h3 align="center">Marine Traffic - Frontend</h3>

  <p align="center">
    MarineTraffic is an app, which provides real-time information on the movements of ships around Norway
    <br />
    <div align="center" style="text-align: center">
        <a href="https://github.com/jkbkupczyk/marine-traffic">Frontend</a>
        -
        <a href="https://github.com/jkbkupczyk/marine-traffic-api">Backend</a>
    </div>
    <br />
    <a href="https://github.com/jkbkupczyk/marine-traffic"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="">View Demo</a>
    ·
    <a href="https://github.com/jkbkupczyk/marine-traffic/issues">Report Bug</a>
    ·
    <a href="https://github.com/jkbkupczyk/marine-traffic/issues">Request Feature</a>
  </p>
</div>



## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Todo](#todo)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

# [Marine Traffic - Presentation (Video)](https://youtu.be/Tr3lZXfPwG4)

## About The Project

**MarineTraffic is an app, which provides real-time information on the movements of ships around Norway.
_MarineTraffic_ is a contribution for the programming competition, organized by [CTM](https://ctm.gdynia.pl/en/)
and held by [Przemysław Bykowski](https://bykowski.pl/)**

*This repo contains **[frontend](https://github.com/jkbkupczyk/marine-traffic)** part of project, you can find **backend** part [here](https://github.com/jkbkupczyk/marine-traffic-api)*

### Some screenshots to help you visualize final product

<a align="center" href="https://marine-traffic.netlify.app/">
    <img align="center" src="https://github.com/jkbkupczyk/marine-traffic/blob/master/gifs/app-presentation.gif"></img>
</a>

#### You can switch between different layers

<a align="center" href="https://marine-traffic.netlify.app/">
    <img align="center" src="https://github.com/jkbkupczyk/marine-traffic/blob/master/gifs/layers-sm.gif"></img>
</a>

#### You can change languages (English, Polish, Norwegian)

<a align="center" href="https://marine-traffic.netlify.app/">
    <img align="center" src="https://github.com/jkbkupczyk/marine-traffic/blob/master/gifs/lang.gif"></img>
</a>

#### In the left bottom corner you'll find cursor-indicator

<a align="center" href="https://marine-traffic.netlify.app/">
    <img align="center" src="https://github.com/jkbkupczyk/marine-traffic/blob/master/gifs/cursor-indicator.gif"></img>
</a>

#### You can toggle markers on/off

<a align="center" href="https://marine-traffic.netlify.app/">
    <img align="center" src="https://github.com/jkbkupczyk/marine-traffic/blob/master/gifs/toggle-markers.gif"></img>
</a>

#### User position detection

<a align="center" href="https://marine-traffic.netlify.app/">
    <img align="center" src="https://github.com/jkbkupczyk/marine-traffic/blob/master/gifs/position.PNG"></img>
</a>

### Built With

<a href="https://svelte.dev/">
    <img src="https://simpleicons.org/icons/svelte.svg" alt="Java logo" width="16" height="16">
    Svelte
</a>

<a href="https://www.typescriptlang.org/">
    <img src="https://simpleicons.org/icons/typescript.svg" alt="Svelte Logo" width="16" height="16">
    Typescript
</a>

<br />

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.


<!-- USAGE EXAMPLES -->
## Usage

You can view **API** documentation [here](https://github.com/jkbkupczyk/marine-traffic/blob/master/DOC.md)

_For more examples, please refer to the [Swagger Documentation](https://marine-traffic.herokuapp.com/swagger) 
or use [OpenAPI docs](https://marine-traffic.herokuapp.com/api-docs)_


<!-- ROADMAP -->
## Roadmap


See the [open issues](https://github.com/jkbkupczyk/marine-traffic/issues) for a list of proposed features (and known issues).


<!-- TODO -->
## Todo

* add more languages support
* auto refresh vessels position
* add more screens
* consume more APIs

<!-- CONTRIBUTING -->
## Contributing


1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

The code in this repository _is covered by the included license_.

However, if you run this code, it may call on the [BarentsWatchAPI](https://www.barentswatch.no/bwapi/), which are covered by BarentsWatchAPI's Developer licenses. You can learn more about BarentsWatch licensing at this [link](https://www.barentswatch.no/en/about/open-data-via-barentswatch/)


<!-- CONTACT -->
## Contact
Through Github: [https://github.com/jkbkupczyk](https://github.com/jkbkupczyk)

Project Link: [https://github.com/jkbkupczyk/marine-traffic](https://github.com/jkbkupczyk/marine-traffic)


[contributors-shield]: https://img.shields.io/github/contributors/jkbkupczyk/marine-traffic.svg?style=flat-square
[contributors-url]: https://github.com/jkbkupczyk/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jkbkupczyk/marine-traffic.svg?style=flat-square
[forks-url]: https://github.com/jkbkupczyk/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/jkbkupczyk/marine-traffic.svg?style=flat-square
[stars-url]: https://github.com/jkbkupczyk/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/jkbkupczyk/marine-traffic.svg?style=flat-square
[issues-url]: https://github.com/jkbkupczyk/repo/issues
[license-shield]: https://img.shields.io/github/license/jkbkupczyk/marine-traffic.svg?style=flat-square
[license-url]: https://github.com/jkbkupczyk/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/jkbkupczyk
[product-screenshot]: images/screenshot.png
