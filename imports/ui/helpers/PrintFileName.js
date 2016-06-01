const PrintFileName = function() {
    // console.log((new Error).stack.split("\n")[0].split("[")[1].split("]")[0]);
    return console.log((new Error).stack.split("\n")[1].split("[")[1].split("]")[0]);;
};

export default PrintFileName;
