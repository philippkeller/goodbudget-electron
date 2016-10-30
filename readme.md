standalone goodbudget app for OS X that starts goodbudget into the account view

Keyboard shortcuts:

- cmd-shift-a: add transaction
- cmd-shift-i: import bank transactions
- cmd-shift-s: select all (useful when reconciling)

## installation

There are no binaries yet for OS X, you need to "compile from source":

To start the app with electron

```
npm install -g electron-prebuilt
npm install
npm start
```

To package it into a native OS X app:

```
npm install electron-packager -g
electron-packager ./ goodbudget --overwrite --platform=darwin --arch=x64 --icon goodbudget.png.icns
mv goodbudget-darwin-x64/goodbudget.app /Applications/
```

## to package it for redistribution (mostly note to self)

```
npm i electron-installer-dmg -g
electron-installer-dmg goodbudget-darwin-x64/goodbudget.app goodbudget
```

