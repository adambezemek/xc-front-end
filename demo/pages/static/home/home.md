# XCentium Component Library

Documentation for the XCentium Component Library

## Getting Started

To build and run this project locally, clone the repository from: [need repo]

In the main project directory, run `npm install` to install all dependencies

## Prerequisites
* NodeJS

## Build Tasks

* `gulp dev`  
Runs the development server and allows you to develop locally

* `gulp demo-prod`  
Builds the demo application distribution assets

* `gulp prod`  
Builds the production website distribution assets

## Common Build Errors

If you receive the build error `Expected indentation of 0 spaces` when building for the first time, you can fix with the following methods

 * **VS Code**  
In the bottom-right corner of the editor, click on CRLF and change to LF

* **Visual Studio**  
File > Save As > Click the dropdown arrow > Save with encoding.  
Change the line endings from CRLF to LF

* **Notepad++**  
Do a find &amp; replace of `\r\n` to `\n` in the offending files.
