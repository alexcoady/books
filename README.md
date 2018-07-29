# books react native app

## Caveats
This is time-boxed version of the code test (limited to 4 hours), as such the following applies:
- The app has been tested on iOS only
- There is no Express node server, code is loaded locally with a 500ms delay to show loading progress
- Book detail screen is very basic (listview demontrated already in inital screen)
- CI and delivery is not in scope
- README is terse, the assumption being anyone looking at this knows how to run a react native app for iOS using the command line
- No assets have been added (images, icons, etc)
- Only 1 native module is being used in this project (react native navigation: https://wix.github.io/react-native-navigation/#/installation-ios) - this should be configured correctly however the steps listed on this screen may need to be followed manually to ensure a working example

## App installation
- Extract the contents of the app into a directory on your machine
- Ensure react native is installed globally on your machine
- `cd to/the/directory`
- `npm install`
- `react-native run-ios`
