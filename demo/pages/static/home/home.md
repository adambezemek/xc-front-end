# XCentium Component Library

Documentation for the XCentium Component Library

## Getting Started

- To build and run this project locally, clone the [repository](https://github.com/adambezemek/xc-front-end):

```
    git clone https://github.com/adambezemek/xc-front-end.git
```

<br>

- To install all dependencies - in the root of the main project directory run:

```
    npm install
```

## Prerequisites

- [Node.js](https://nodejs.org/en/)

## Build Tasks

- To runs the development server and allows you to develop locally

```
    npm start
```

<br>

- To build the distribution assets

```
    npm run build
```

## Common Build Errors

If you receive the build error `Expected indentation of 0 spaces` when building for the first time, you can fix with the following methods

- **VS Code**<br>
  In the bottom-right corner of the editor, click on CRLF and change to LF<br><br>

- **Visual Studio**<br>
  File > Save As > Click the dropdown arrow > Save with encoding.<br>
  Change the line endings from CRLF to LF<br><br>

- **Notepad++**<br>
  Do a find & replace of `\r\n` to `\n` in the offending files.<br><br>
