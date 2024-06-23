// get the list of common subdomains
// requires dns resolver for resolving the full domain
// if resolved ==> found else not found

const dns = require("dns").promises;

const findSubdomains = async (domain) => {
  const subdomains = ["blog", "ftp", "admin", "accounts", "support", "console"];
  const foundSubdomains = [];

  for (let subdomain of subdomains) {
    let fullDomain = `${subdomain}.${domain}`;
    try {
      let found = await dns.resolve(fullDomain);

      foundSubdomains.push({ subdomain: fullDomain, found });
    } catch (err) {
      if (foundSubdomains.length == 0) console.log(`${subdomain} not found`);
    }
  }

  return foundSubdomains;
};

(async () => {
  const domain = "google.com";
  const result = await findSubdomains(domain);

  console.log(result);
})();

// create an array containing a list of subdomains eg: ftp, support, dev, jenkins.
// we willl resolve that fulldomain using dns(subdomain  + domain)
// check whether length of the response is greater than 0 or not
// if <0 ==> true else false
