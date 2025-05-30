# CHANGELOG

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org).

## [Unreleased]
### Added
* *Nothing*

### Changed
* Tests are now run in an actual browser via vitest browser mode and playwright.
* Add accessibility tests via axe-core.

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [2.5.0] - 2025-03-29
### Added
* *Nothing*

### Changed
* Start publishing package as ESM only.

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [2.4.0] - 2024-12-06
### Added
* Add support for React 19

### Changed
* Update to `@shlinkio/eslint-config-js-coding-standard` 3.0, and migrate to ESLint flat config.

### Deprecated
* *Nothing*

### Removed
* Drop support for React 17

### Fixed
* *Nothing*


## [2.3.1] - 2024-04-09
### Added
* *Nothing*

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* Fix incorrect publishing


## [2.3.0] - 2024-04-08
### Added
* *Nothing*

### Changed
* Update dependencies.
* Update coding standard.
* Migrate to shlink reusable workflows.

### Deprecated
* *Nothing*

### Removed
* Remove `version` field from package.json

### Fixed
* *Nothing*


## [2.2.0] - 2023-04-20
### Added
* *Nothing*

### Changed
* [#44](https://github.com/acelaya/react-external-link/issues/44) Migrate to vite for bundling.
* [#45](https://github.com/acelaya/react-external-link/issues/45) Migrate to vitest for testing.

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [2.1.0] - 2023-02-19
### Added
* *Nothing*

### Changed
* Update dependencies

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [2.0.1] - 2023-01-03
### Added
* *Nothing*

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* Ensured provided `rel` attribute does not overwrite `noopener noreferrer`, but it's appended instead.


## [2.0.0] - 2022-05-12
### Added
* *Nothing*

### Changed
* `ExternalLink` props now extend `AnchorHTMLAttributes<Element>`.
* Updated dependencies, including Jest 28.

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [1.3.0] - 2022-04-02
### Added
* Added support for React 18

### Changed
* Updated to shlink coding standard 2.0

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [1.2.2] - 2021-07-07
### Added
* *Nothing*

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* [#30](https://github.com/acelaya/react-external-link/issues/30) Fixed wrong generation of definition types before publishing.


## [1.2.1] - 2021-03-05
### Added
* *Nothing*

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* [#21](https://github.com/acelaya/react-external-link/issues/21) Fixed linting by updating to `@shlinkio/eslint-config-js-coding-standard` as the coding style.


## [1.2.0] - 2020-12-19
### Added
* *Nothing*

### Changed
* [#16](https://github.com/acelaya/react-external-link/issues/16) Migrated build to Github Actions.
* [#17](https://github.com/acelaya/react-external-link/issues/17) Migrated release publishing to Github Actions.
* [#18](https://github.com/acelaya/react-external-link/issues/18) Migrated to Codecov as coverage backend.
* [#19](https://github.com/acelaya/react-external-link/issues/19) Updated dependencies.

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [1.1.0] - 2019-09-03
### Added
* [#2](https://github.com/acelaya/react-external-link/issues/2) Added travis config and enabled project builds.
* [#1](https://github.com/acelaya/react-external-link/issues/1) Added tests which are run as part of the build.
* [#5](https://github.com/acelaya/react-external-link/issues/5) Project added to scrutinizer.
* [#3](https://github.com/acelaya/react-external-link/issues/3) Automated package releases.

### Changed
* [#6](https://github.com/acelaya/react-external-link/issues/6) Changed coding styles to adidas coding styles.

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*


## [1.0.1] - 2019-08-29
### Added
* *Nothing*

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* Fixed typescript interface not accepting any extra props in `ExternalLink`


## [1.0.0] - 2019-08-28
### Added
* First stable release

### Changed
* *Nothing*

### Deprecated
* *Nothing*

### Removed
* *Nothing*

### Fixed
* *Nothing*
