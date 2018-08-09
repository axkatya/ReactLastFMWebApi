/**
 * Defines the React 16 Adapter for Enzyme. 
 *
 * @link http://airbnb.io/enzyme/docs/installation/#working-with-react-16
 * @copyright 2017 Airbnb, Inc.
 */

var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-15');

enzyme.configure({ adapter: new Adapter() });