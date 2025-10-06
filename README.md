# Namaste food

/**
 * Header 
 *  - logo
 *  - nav items
 * Body
 * - search bar
 * - restaurant container
 *  - restaurant card
 *      -image
 *     -Name of Restaurant,Start Rating, Cusines, Delivery time
 * Footer   
 * -Copyright
 * - links
 * - address
 * - contact
 * 
 */

 #Redux Toolkit
 -install @reduxjs/toolkit and react-redux

 # NPM
npm install @reduxjs/toolkit
npm i react-redux
 -Build our store
 - Connect our store to our app
 -Slice (cartSlice)
 -Dispatch(action)
 -Selector
 
# Yarn
yarn add @reduxjs/toolkit

# Types of testing 
-Unit Testing
- Integration Testing
- End to End Testing -e2e testing
#setting up testing in our app
- Installed react testing lib
npm i -D @testing-library/react
-Installed jest
npm i -D jest
-Installed Babel dependencies 
npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
-Configure Bebel- babel.config.js
module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', {runtime: 'automatic'}],
  ],
};
- Configure Pracel config file to Disable parcel transformer(transpilation) babel 
create a file .pracelrc

 {
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}
- Jest configuration
npx create-jest
- Need to install JSDom library(If you're using Jest 28 or later, jest-environment-jsdom package now must be installed separately.)
npm install --save-dev jest-environment-jsdom
now we have succesfully created a jest.config.js file.

-test run cmd
npm run test
- Install jsdom library 
- Install @babel/present-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
-npm install --save-dev @testing-library/react @testing-library/jest-dom

