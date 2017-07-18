# Nafnster
> Finding a name for your kid that both of you like has never been easier!
## Running locally

### Prerequisites
1. Install `Xcode` from App Store.
2. Install the command line tools via Xcode

    You will also need to install the Xcode Command Line Tools. Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.

2. Install `node` and `watchman`

```sh
$ brew install node
$ brew install watchman
```

3. Install the React Native CLI

```sh
$ npm install -g react-native-cli
```

4. Navigate to the project folder and do

```sh
$ npm install
```

### Running with iOS simulator

```sh
$ npm run ios
```

and wait for the simulator to boot up.

### Developing locally with Storybook

```sh
$ npm run storybook
```
and then in another terminal tab do:

```sh
$ npm run ios
```

and finally navigate to `localhost:7007` and choose a story which will load it on the simulator.
