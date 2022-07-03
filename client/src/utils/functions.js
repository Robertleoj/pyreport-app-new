
function get_attachment_idx(src){
    let splitted = src.split('//');
    let idx = parseInt(splitted[splitted.length - 1]);
    return idx;
}


export default {
    get_attachment_idx
};