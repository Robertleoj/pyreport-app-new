
function get_attachment_idx(src){
    let splitted = src.split('//');
    let idx = parseInt(splitted[splitted.length - 1]);
    return idx;
}

function addScript(scriptScr){
    let script = document.createElement('script')
    script.onload = () => {
        resolve(import(someComponent))
    }
    script.async = true
    script.src = scriptScr;
    document.head.appendChild(script)
}


export default {
    get_attachment_idx,
    addScript
};