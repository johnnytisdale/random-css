import {leet}     		from '../properties/leet';
import {unicode}  		from '../properties/unicode';
import cssProperties from '../properties/cssProperties.json';

export default function setProperties() {

	//css properties
	this.cssProperties = cssProperties;

	//leetspeak variations of each letter of the alphabet
	this.leet = leet;

	//unicode variations of each letter of the alphabet
	this.unicode = unicode;
}