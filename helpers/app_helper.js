const timeago = require('timeago.js');

exports.dateFormat = (date) => timeago().format(date);
// exports.getUserDetails = (user, key) => JSON.parse(JSON.stringify(user[0]))[key];
// exports.getJobDetails = (job, key) => JSON.parse(JSON.stringify(job[0]))[key];
exports.checkEquality = (tag, query) => tag && query ? tag.toLowerCase() === query.toLowerCase() : false;
exports.getFirstCharIfNoImage = (path, name) => path ? '' : name.charAt(0); 
exports.getMatchTitle = function(hash, type) {
    let str = ''
    switch (hash.mn) {
        case '1':
            str = '1st';
            break;
        case '2':
            str = '2nd';
            break;
        case '3':
            str = '3rd';
            break;
        case 'Only':
            str = 'Only';
            break;
        default:
            str = `${hash.mn}th`;
            break;
    }
    str += ` ${type}, ${hash.t1} v ${hash.t2} in ${hash.vn} at ${getDate(hash.dt)}`
    return str
}
function getDate(d) {
    return new Date(d)
}