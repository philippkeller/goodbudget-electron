Standalone goodbudget app for OS X that starts goodbudget into the account view ![Goodbudget in App Switcher](https://goo.gl/qPdvCO)

Keyboard shortcuts:

- cmd-shift-a: add transaction
- cmd-shift-i: import bank transactions
- cmd-shift-s: select all (useful when reconciling)

## Installation (Mac only for now)

Download and install from [latest binary](https://github.com/philippkeller/goodbudget-electron/releases/latest)

## Installation from source

If you are on Windows/Linux you need to install from source. 

Prerequisits:

- git
- node/npm

### Start the app with electron

```
npm install -g electron-prebuilt
npm install
npm start
```

### Package it into a native OS X app:

```
npm install electron-packager -g
electron-packager ./ goodbudget --overwrite --platform=darwin --arch=x64 --icon goodbudget.png.icns
mv goodbudget-darwin-x64/goodbudget.app /Applications/
```

### Package it for redistribution (mostly note to self)

```
npm i electron-installer-dmg -g
electron-installer-dmg goodbudget-darwin-x64/goodbudget.app goodbudget
```
