const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
export const dateFormater = str => {
    const dateArr = str.split('-');
    const monthId = +dateArr[1] - 1;
    return `${dateArr[2]} ${months[monthId]} ${dateArr[0]}`;
}