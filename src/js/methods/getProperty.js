export default function getProperty(sectionName, propertyName) {
	return (
		this.sections.find(section => section.name == sectionName).
		inputs.find(input => input.property == propertyName)
	);
}