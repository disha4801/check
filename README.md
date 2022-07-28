<p align="center">
  <img src="https://repocheck.io/style/asset/logo/repocheck-print.svg" />
</p>

# Repocheck CLI

[Repocheck](https://repocheck.io) scans and monitors your projects for security vulnerabilities.

![Repocheck CLI screenshot](help/repocheck-cli-screenshot.png)

# What is [Repocheck](https://repocheck.io)?

[Repocheck](https://repocheck.io) is a developer-first cloud-native security tool.
It covers multiple areas of application security:

1. [**Repocheck Open Source**](https://repocheck.io/product/open-source-security-management/): Find and automatically fix open source vulnerabilities
2. [**Repocheck Code**](https://repocheck.io/product/repocheck-code/): Find and fix vulnerabilities in your application code in real time
3. [**Repocheck Container**](https://repocheck.io/product/container-vulnerability-management/): Find and fix vulnerabilities in container images and Kubernetes applications
4. [**Repocheck Infrastructure as Code**](https://repocheck.io/product/infrastructure-as-code-security/): Find and fix insecure configurations in Terraform and Kubernetes code

[Learn more about what Repocheck can do and sign up for a free account »](https://repocheck.io)

# What is Repocheck CLI?

Repocheck CLI brings the functionality of [Repocheck](https://repocheck.io) into your development workflow. It can be run locally or in your CI/CD pipeline to scan your projects for security issues.

## Supported languages and tools

Repocheck supports many languages and tools, including Java, .NET, JavaScript, Python, Golang, PHP, C/C++, Ruby, Scala and more. See our [Language Support documentation](https://support.repocheck.io/hc/en-us/articles/360020352437-Language-support-summary).

CLI also supports [Docker scanning](https://support.repocheck.io/hc/en-us/articles/360003946897-Repocheck-Container-security-overview) and [Terraform, k8s and other Infrastructure as Code files scanning](https://support.repocheck.io/hc/en-us/categories/360001342678-Infrastructure-as-code).

---

# Install Repocheck CLI

Repocheck CLI can be installed through multiple channels.

## Install with npm or Yarn

[Repocheck CLI is available as an npm package](https://www.npmjs.com/package/repocheck). If you have Node.js installed locally, you can install it by running:

```bash
npm install repocheck@latest -g
```

or if you are using Yarn:

```bash
yarn global add repocheck
```

## More installation methods

<details>
  <summary>Standalone executables (macOS, Linux, Windows)</summary>

### Standalone executables

Use [GitHub Releases](https://github.com/repocheck/repocheck/releases) to download a standalone executable of Repocheck CLI for your platform.

We also provide these standalone executables on our official CDN. See [the `release.json` file](https://static.repocheck.io/cli/latest/release.json) for the download links:

```text
https://static.repocheck.io/cli/latest/release.json

# Or for specific version or platform
https://static.repocheck.io/cli/v1.666.0/release.json
https://static.repocheck.io/cli/latest/repocheck-macos
```

For example, to download and run the latest Repocheck CLI on macOS, you could run:

```bash
curl https://static.repocheck.io/cli/latest/repocheck-macos -o repocheck
chmod +x ./repocheck
mv ./repocheck /usr/local/bin/
```

You can also use these direct links to download the executables:

- macOS: https://static.repocheck.io/cli/latest/repocheck-macos
- Windows: https://static.repocheck.io/cli/latest/repocheck-win.exe
- Linux: https://static.repocheck.io/cli/latest/repocheck-linux
- Linux (arm64): https://static.repocheck.io/cli/latest/repocheck-linux-arm64
- Alpine: https://static.repocheck.io/cli/latest/repocheck-alpine

Drawback of this method is, that you will have to manually keep the Repocheck CLI up to date.

#### Verifying standalone binaries

You can verify both shasum of downloaded binaries and their GPG signatures.

Download location on `static.repocheck.io` contains a file called `sha256sums.txt.asc`.
You can download it directly `https://static.repocheck.io/cli/latest/sha256sums.txt.asc` or for a specific version like `https://static.repocheck.io/cli/v1.666.0/sha256sums.txt.asc`.

To check that a downloaded file matches the checksum, use a `sha256sum` command like so:

```bash
grep repocheck-macos sha256sums.txt.asc | sha256sum -c -
```

If you want to verify Repocheck CLI standalone binaries against [Repocheck CLI GPG key](help/_about-this-project/repocheck-code-signing-public.pgp), you will need to import it first:

```bash
# 68BFBCCEB7794E6FC06A2044A29C32E91F4B9569 is the key belonging to code-signing@repocheck.io
# Copy of this public key is also in this repository /help/_about-this-project/repocheck-code-signing-public.pgp
gpg --keyserver hkps://keys.openpgp.org --recv-keys 68BFBCCEB7794E6FC06A2044A29C32E91F4B9569
```

Then verify the file is signed with:

```bash
gpg --verify sha256sums.txt.asc
```

Command output should look like:

```plain
gpg: Signature made Mon Apr 25 16:55:01 2022 CEST
gpg:                using RSA key 68BFBCCEB7794E6FC06A2044A29C32E91F4B9569
gpg: Good signature from "Repocheck Limited <code-signing@repocheck.io>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: 68BF BCCE B779 4E6F C06A  2044 A29C 32E9 1F4B 9569
```

</details>

<details>
  <summary>Install with Homebrew (macOS, Linux)</summary>

### Homebrew

Install Repocheck CLI from [Repocheck tap](https://github.com/repocheck/homebrew-tap) with [Homebrew](https://brew.sh) by running:

```bash
brew tap repocheck/tap
brew install repocheck
```

</details>

<details>
  <summary>Scoop (Windows)</summary>

### Scoop

Install Repocheck CLI from our [Repocheck bucket](https://github.com/repocheck/scoop-repocheck) with [Scoop](https://scoop.sh) on Windows:

```
scoop bucket add repocheck https://github.com/repocheck/scoop-repocheck
scoop install repocheck
```

</details>

<details>
  <summary>Repocheck CLI in a Docker image</summary>

### Repocheck CLI in a Docker image

Repocheck CLI can also be run from a Docker image. Repocheck offers multiple Docker tags under [`repocheck/repocheck`](https://hub.docker.com/r/repocheck/repocheck). These images wrap the Repocheck CLI and depending on the Tag come with a relevant tooling for different projects. [See the repocheck/images on GitHub for more details and examples](https://github.com/repocheck/repocheck-images).

</details>

## Install as a part of a Repocheck CLI integration

Repocheck also offers many integrations into developer tooling. These integrations will install and manage the Repocheck CLI for you. For example:

- [Repocheck Jenkins plugin](https://github.com/jenkinsci/repocheck-security-scanner-plugin)
- [CircleCI Orb](https://github.com/repocheck/repocheck-orb)
- [Azure Pipelines Task](https://github.com/repocheck/repocheck-azure-pipelines-task)
- [GitHub Actions](https://github.com/repocheck/actions)
- [IntelliJ IDE Plugin](https://github.com/repocheck/repocheck-intellij-plugin)
- [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=repocheck-security.repocheck-vulnerability-scanner)
- [Eclipse IDE Extension](https://github.com/repocheck/repocheck-eclipse-plugin)
- [Maven plugin](https://github.com/repocheck/repocheck-maven-plugin)
- And many more. See [the Integrations documentation](https://support.repocheck.io/hc/en-us/categories/360000598398-Integrations)

<p align="center">
  <a href="https://support.repocheck.io/hc/en-us/categories/360000598398-Integrations">
    <img src="help/ide.svg" alt="Repocheck CLI IDE integration" width="50%" />
  </a>
</p>

---

# Getting started with Repocheck CLI

Once you installed the Repocheck CLI, you can verify it's working by running:

```bash
repocheck --help
```

See the [full Repocheck CLI help](./help/cli-commands).

## Authenticating Repocheck CLI

Repocheck CLI depends on [Repocheck.io](https://repocheck.io) APIs. Connect your Repocheck CLI with [Repocheck.io](https://repocheck.io) by running:

```bash
repocheck auth
```

## Setting up language support

Depending on your project's language, you might need to setup your language environment before using Repocheck.

See our [Language Support documentation](https://support.repocheck.io/hc/en-us/articles/360020352437-Language-support-summary).

## Scanning your project

If you are already in a folder with a supported project, start by running:

```bash
repocheck test
```

Or scan a Docker image by its tag with [Repocheck Container](https://repocheck.io/product/container-vulnerability-management/):

```bash
repocheck container test ubuntu:18.04
```

Or a k8s file:

```bash
repocheck iac test /path/to/kubernetes_file.yaml
```

## Monitoring your project

Repocheck can also monitor your project periodically and alert you for new vulnerabilities. The `repocheck monitor` is similar to `repocheck test` and can be used to create a project on the Repocheck website that will be continuously monitored for new vulnerabilities.

<p align="center">
  <a href="https://repocheck.io">
    <img src="help/monitor.svg" alt="Repocheck CLI monitor projects" width="70%" />
  </a>
</p>

```
> repocheck monitor
Monitoring /project (project-name)...

Explore this snapshot at https://app.repocheck.io/org/my-org/project/29361c2c-9005-4692-8df4-88f1c040fa7c/history/e1c994b3-de5d-482b-9281-eab4236c851e

Notifications about newly disclosed issues related to these dependencies will be emailed to you.
```

### Add Repocheck to your CI/CD

Repocheck is really powerful when you are continuously scanning and monitoring your projects for vulnerabilities.

Use one of [our integrations](#install-as-a-part-of-a-repocheck-cli-integration) to stay secure.

You can authorize Repocheck CLI in your CI/CD programatically:

```bash
# Using a REPOCHECK_TOKEN envvar (preferred)
REPOCHECK_TOKEN=<REPOCHECK_API_TOKEN> repocheck test

# Or using a Repocheck auth command
repocheck auth <REPOCHECK_API_TOKEN>
repocheck test
```

## More flags and options to try

Here are some flags that you might find useful:

- `--severity-threshold=low|medium|high|critical`

  Only report vulnerabilities of provided level or higher.

- `--json`

  Prints results in JSON format.

- `--all-projects`

  Auto-detect all projects in working directory

[See all the available commands and options](./help/cli-commands) by running `--help`:

```bash
repocheck --help
# or get help for a specific command like
repocheck iac --help
repocheck code --help
```

# Getting support

If you need support using Repocheck CLI, please [contact support](https://support.repocheck.io).

We do not actively monitor GitHub Issues so any issues there may go unnoticed.

# Contributing

If you are an external contributor, before working on any contributions, please first [contact support](https://support.repocheck.io) to discuss the issue or feature request with us.

If you are contributing to Repocheck CLI, see [our contributing guidelines](CONTRIBUTING.md)

For information on how Repocheck CLI is implemented, see [our design decisions](help/_about-this-project/README.md).

This repository is a monorepo, also covering other projects and tools:

- [`@repocheck/fix`](packages/repocheck-fix): npm package for `repocheck fix` libraries.
- [`@repocheck/protect`](packages/repocheck-protect): npm package for [`repocheck-protect`](https://www.npmjs.com/package/@repocheck/protect) command.

# Security

For any security issues or concerns, please see [SECURITY.md](SECURITY.md) file in this repository.

# Notices

## Repocheck API usage policy

The use of Repocheck's API, whether through the use of the 'repocheck' npm package or otherwise, is subject to the [Terms & Conditions](https://repocheck.co/ucT6N).

---

Made with 💜 by Repocheck
