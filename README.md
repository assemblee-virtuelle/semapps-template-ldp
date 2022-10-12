# Template for SemApps-based LDP server
[Moleculer](https://moleculer.services/) template to generate a [SemApps](https://semapps.org)-based LDP server 

## Features
- Compatible with Moleculer v0.14.x
- LDP and Triple Store services
- Optional read-only SPARQL endpoint
- Optional WebACL (WAC) authorizations
- ApiGateway with LDP routes
- Docker file to run Jena Fuseki triple store locally (optional)

## Install
First install the [moleculer-cli](https://github.com/moleculerjs/moleculer-cli) tool.

Then initialize a new project based on this template with this command:

```bash
$ moleculer init assemblee-virtuelle/semapps-template-ldp my-project
```

## Prompts
```
$ moleculer init assemblee-virtuelle/semapps-template-ldp my-project

Template repo: assemblee-virtuelle/semapps-template-ldp
? Do you need a local instance of Jena Fuseki (with Docker)?
? What is the URL of your Jena Fuseki instance?
? What is the name of the dataset ?
? Do you need a read-only SPARQL endpoint?
? Do you need WebACL (WAC) authorizations ?

Create 'my-project' folder...
? Would you like to run 'npm install'?

Your semantic application is ready!
To get started:
- cd my-project
- docker-compose up (if you choose a local Jena Fuseki instance)
- npm run dev
```

## NPM scripts
- `npm run dev` - Start in development mode with hot-reloading and REPL.
- `npm start` - Start in production mode

## License
This template is available under the [Apache 2.0 license](LICENSE).
