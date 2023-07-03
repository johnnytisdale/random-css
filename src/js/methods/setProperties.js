import {leet}     from '../properties/leet';
import {sections} from '../properties/sections';
import {unicode}  from '../properties/unicode';

export default function setProperties() {

	//sections of the form (randomcss.org)
	this.sections = sections;

	//leetspeak variations of each letter of the alphabet
	this.leet = leet;

	//unicode variations of each letter of the alphabet
	this.unicode = unicode;
}