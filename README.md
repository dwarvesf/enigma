# DF Engima

## Source 

https://www.dcode.fr/xor-cipher

## Rule

### What is the XOR cipher? (Definition)

**XOR** Encryption uses the **XOR** operator (**Exclusive Or, symbol: ⊕**) with the plain text and the key as operand (that should be binary encoded).

### How to encrypt using XOR cipher?

**XOR** is applied on binary data, a conversion (ASCII or Unicode) must be carried out on a non-binary text.

**Example: The plain message is 1001 and the key is 10**

**Take the first bit (0 or 1) of the plain text and the first bit of the key and multiply then using XOR operation to get the ciphered bit.**

**Example: 1 ⊕ 1 = 0**

**The operation is repeated with the second bit of the plaintext and the second bit of the key. At the end of the key, loop back to the first bit.**

**Example:**
```
Plain message
1001
Key (repeated)
1010
Encrypted message
0011
```

### How to decrypt XOR cipher?
**XOR** Decryption is identical to encryption because the XOR operation is symmetrical (**reverse** **XOR = XOR**).

Example: 
```
1001 ⊕ 1010 = 0011 and 0011 ⊕ 1010 = 1001
```

### How to convert a text into binary?
dCode uses the ASCII table encoding which associates with characters (including the letters of the alphabet) a number between 0 and 128, which is then converted to base 2 (binary). It is possible to use other methods to get binary encoded text.

### What is the truth table for XOR?
The truth table of the 2-parameter XOR logic function is:

| A | B | A XOR B|
|---|---|--------|
| 0 | 0 | 0      |
| 0 | 1 | 1      |
| 1 | 0 | 1      |
| 1 | 1 | 0      |


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

