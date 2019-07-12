![WiM](wimlogo.png)


# LIQWIDS

---About---

### Prerequisites

 - npm

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

Clone the repo and install it with npm
```
git clone https://github.com/USGS-WiM/LIQWIDS.git
cd /LIQWIDS
npm install
```

## Building and testing

Serve files with hot module replacement (live reload)
```
npm run live
```
Basic server with
```
npm run start
```

To build a production version of the app:
```
ng build --prod --base-href
```
If you want to update the version numbers in the package.json and code.json AND build:

`npm run patch` or

`npm run minor` or

`npm run major`

To reset version in files:

`bump {version number} package.json code.json`

## Deployment

Add additional notes about how to deploy this on a live system. **Do not include any credentials, IP addresses, or other sensitive information**

## Built With

* [Angular](https://angular.io/) - The main web framework used
* [NPM](https://www.npmjs.com/) - Dependency Management

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on the process for submitting pull requests to us. Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details on adhering by the [USGS Code of Scientific Conduct](https://www2.usgs.gov/fsp/fsp_code_of_scientific_conduct.asp).

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](../../tags). 

Advance the version when adding features, fixing bugs or making minor enhancement. Follow semver principles. To add tag in git, type git tag v{major}.{minor}.{patch}. Example: git tag v2.0.5

To push tags to remote origin: `git push origin --tags`

*Note that your alias for the remote origin may differ.

## Authors

* **[Martyn Smith](https://www.usgs.gov/staff-profiles/martyn-smith)**  - *Developer* - [USGS Web Informatics & Mapping](https://wim.usgs.gov/)
* **[Jeremy Newson](https://www.usgs.gov/staff-profiles/jeremy-k-newson)** - *Developer* -  [USGS Web Informatics & Mapping](https://wim.usgs.gov/)

See also the list of [contributors](../../graphs/contributors) who participated in this project.

## License

This project is licensed under the Creative Commons CC0 1.0 Universal License - see the [LICENSE.md](LICENSE.md) file for details

## Suggested Citation
In the spirit of open source, please cite any re-use of the source code stored in this repository. Below is the suggested citation:

`This project contains code produced by the Web Informatics and Mapping (WIM) team at the United States Geological Survey (USGS). As a work of the United States Government, this project is in the public domain within the United States. https://wim.usgs.gov`


## Acknowledgments

---Acknowledgements---

## About WIM
* This project authored by the [USGS WIM team](https://wim.usgs.gov)
* WIM is a team of developers and technologists who build and manage tools, software, web services, and databases to support USGS science and other federal government cooperators.
* WIM is a part of the [Upper Midwest Water Science Center](https://www.usgs.gov/centers/wisconsin-water-science-center).
