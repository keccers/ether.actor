import {
  CacheInterceptor,
  CacheTTL,
  Controller,
  Get,
  Param,
  Req,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
// @UseInterceptors(CacheInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHomepage(): string {
    return `
<!DOCTYPE HTML>
<html>
<head>
<title>ether.actor</title>
<meta name="description" content="Super simple Ethereum to HTTP bridge for fetching contract information. Powered by Etherscan for ABIs and Cloudflare for Ethereum endpoints.">

<!-- OpenGraph Meta Tags -->
<meta property="og:url" content="https://ether.actor/">
<meta property="og:type" content="website">
<meta property="og:title" content="ether.actor">
<meta property="og:description" content="Super simple Ethereum to HTTP bridge for fetching contract information. Powered by Etherscan for ABIs and Cloudflare for Ethereum endpoints.">

<!-- Twitter Meta Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta property="twitter:domain" content="ether.actor">
<meta property="twitter:url" content="https://ether.actor/">
<meta name="twitter:title" content="ether.actor">
<meta name="twitter:description" content="Super simple Ethereum to HTTP bridge for fetching contract information. Powered by Etherscan for ABIs and Cloudflare for Ethereum endpoints.">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.3/gh-fork-ribbon.min.css" />
<style>
body {
  font-family: helvetica;
  max-width: 500px;
  margin: 10vh auto;
  color: #333;
}
li {
  margin-bottom: 20px;
}
</style>
</head>
<body>
<h2>super simple ethereum -> http bridge for fetching contract info</h2>
<a class="github-fork-ribbon" href="https://github.com/iainnash/ether.actor" data-ribbon="Fork me on GitHub" title="Fork me on GitHub">Fork me on GitHub</a>
<p>powered by etherscan for ABIs and cloudflare for ethereum endpoints<p>
<br />
<p>try it:</p>
<ul>
<li><a href="/0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63.json">/0xcontract</a><br />
returns the ABI of the given contract (in human-readable and raw abi format)</li>

<li><sup>new</sup> the abi returned for un-verified contracts is a best-guess given the ERC165 spec and common conventions. working to improve these matches soon. you can read from unverified ERC20 and ERC721 tokens</li>

<li><a href="/0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63/tokenURI/23">/0xcontract/methodName/arg0</a><br />
returns the result of the given function call</li>

<li><a href="/0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63/tokenSvgDataOf/233">/0xcontract/methodName/arg0</a><br />
returns the result of the given function call (works for media too)</li>

<li><a href="/0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63/isApprovedForAll/0x18C8dF1fb7FB44549F90d1C2BB1DC8b690CD0559/0xd2d5cb7545685019a85601a0d279b24df019ec5e">/0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63/isApprovedForAll/0xADDRESS0/0xADDRESS1</a>
<br />works with booleans and multiple arguments.
</ul>

<div style="margin-top: 20vh">
  <a href="https://twitter.com/isiain">a project by iain</a>
  <br />
  <br />
  <a href="https://github.com/iainnash/ether.actor">source code</a>
</div>

</body>
</html>
    `;
  }
}
