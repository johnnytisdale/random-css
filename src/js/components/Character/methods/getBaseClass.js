export default function getBaseClass() {

    //if applying inline style, no need to use classes
    if (this.props.unsafe) return;

    //font size in rem
    const size = this.props.size;

    //css class
    let className = 'random-css-character-' + size;

    if (size % 1 == 0) {
        className += '-0';
    }

    return className;
}