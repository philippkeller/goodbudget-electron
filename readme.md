standalone goodbudget app for OS X that starts goodbudget into the account view

Keyboard shortcuts:

- cmd-a: add transaction
- cmd-i: import bank transactions

## installation

There are no binaries yet for OS X, you need to "compile from source":

To start the app with electron

```
npm install -g electron-prebuilt
npm start
```

To package it into a native OS X app:

```
npm install electron-packager -g
electron-packager ./ goodbudget --platform=darwin --arch=x64 --icon ./goodbudget.png.icns
```

the app will be saved into `goodbudget-darwsin-x64/goodbudget.app`