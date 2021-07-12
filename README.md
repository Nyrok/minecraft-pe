# minecraft-pe [![](https://img.shields.io/badge/Made%20with-%F0%9F%92%96-red)](https://www.npmjs.com/package/discord-memoji)
> **A package using minecraftpocket-servers.com API that allow users to easily manage their minecraft bedrock servers.**
# Usage 
#### Initialization
*This structure is necessary in order for the package to work.*
```js
const Minecraft = require('minecraft-pe');
const server = new Minecraft("YOUR_SERVER_API_KEY");
```
> **You can get your `SERVER_API_KEY` [here](https://minecraftpocket-servers.com/servers/manage/) by clicking in the gear button** <br>
(You must have registered a minecraft server before btw) <br>
![image](https://user-images.githubusercontent.com/47859726/125235503-da6d1400-e2e2-11eb-8e4e-0e4f93126ca7.png) <br>
**And It'll be like this** <br>
![image](https://user-images.githubusercontent.com/47859726/125235370-a560c180-e2e2-11eb-9b6c-e181d112fe90.png))

#### Get Informations from your Minecraft Server
###### Code
```js
server.getInformations().then(data => {
    console.log(data);
    const id = data.id;
    const name = data.name;
    const address = data.address;
    const port = data.port;
    const hostname = data.hostname;
    const players = data.players;
    const version = data.version;
    const url = data.url;
});
```
> ⚠ You can't set data from getInformations() function as a super global variable at the moment (Sorry). ⚠
###### Expected Output (example)
```js
{
  id: '111746',
  name: 'Exodus',
  address: 'play.exodus.ovh.mine.fun',
  port: '25565',
  private: '1',
  password: '0',
  location: 'France',
  hostname: 'Exodus UHC',
  is_online: '1',
  players: '3',
  maxplayers: '100',
  version: '1.17.0',
  platform: null,
  uptime: '100',
  score: '2',
  rank: '1004',
  votes: '0',
  favorited: '0',
  comments: '0',
  url: 'https://minecraftpocket-servers.com/server/111746/',
  last_check: 'July 11th, 2021 04:01 PM EST',
  last_online: 'July 11th, 2021 04:01 PM EST'
}
```
#### All of above (Full Example)
```js
const Minecraft = require('minecraft-pe');
const server = new Minecraft("YOUR_SERVER_API_KEY");

server.getInformations().then(data => console.log(data));
```
# Install
`npm install minecraft-pe`
# Changelog
> ## **1.0.0**
>    * First Publish
>    * Adding getInformations() function according to the new Connect(server_api_key) Class.
>    * Adding [colors](https://www.npmjs.com/package/colors) and [fetch](https://www.npmjs.com/package/node-fetch) packages.
# Credits
* Nyrok :
  - [Github](https://github.com/Nyrok) ![GitHub followers](https://img.shields.io/github/followers/Nyrok?style=social)
  - [Twitter](https://twitter.com/@Nyrok10) ![Twitter Follow](https://img.shields.io/twitter/follow/Nyrok10?style=social)
> Don't forget to Star this open-source repo ! ![GitHub Repo stars](https://img.shields.io/github/stars/Nyrok/minecraft-pe?style=social)
# License
Apache-2.0
