# EthExplorer with Azure Active Directory

[![dependencies Status](https://david-dm.org/EthereumEx/aad-ethereum-explorer/status.svg)](https://david-dm.org/EthereumEx/aad-ethereum-explorer)
[![devDependencies Status](https://david-dm.org/EthereumEx/aad-ethereum-explorer/dev-status.svg)](https://david-dm.org/EthereumEx/aad-ethereum-explorer?type=dev)

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
![EthExplorer Screenshot](http://i.imgur.com/NHFYq0x.png)

## Getting Started
###Dependencies
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Node](http://nodejs.org)
* [Npm](https://www.npmjs.com)
* [Gulp](http://gulpjs.com/)
* [Go-ethereum](https://github.com/ethereum/go-ethereum/wiki/geth)

### Set up geth
* TODO

```bash
geth <your options> --rpc
```

### Set up AAD
* TODO

###Installation

```bash
git clone https://github.com/EthereumEx/aad-ethereum-explorer.git && cd aad-ethereum-explorer
npm install && bower install
```

## Development
* First set the env variables in the `config/env.local.js`. Note this file is not tracked by git and **should never** be committed.
* Navigate to the `aad-ethereum-explorer` directory and run `gulp`

```bash
gulp
```

* Gulp automatically injects the env variables into the program and refreshes the node app upon changes.

##Execution
Set the following environment variables

``` bash
export EXPRESS_SECRET="<just a random string>"
export WEBSITE_HOSTNAME="<hostname>:<port>"
export AD_SECRET=""
export AD_TENENT_ID=""
export AD_CLIENT_ID=""
export RPC_HOST="optional (default http://localhost)"
export RPC_PORT="optional (default 8545)"
```

and run

```bash
npm start
```


##License
[GPL license](https://opensource.org/licenses/GPL)
