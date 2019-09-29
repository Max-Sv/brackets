module.exports = function check(str, bracketsConfig) {
    // your solution
    let arr = str.split('');
    let strArr = [];
    strArr[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if ((arr[i] == "(") || (arr[i] == "{") || (arr[i] == "[") || (arr[i] == "<")) {
            strArr.push(arr[i])
            continue;
        };
        if ((arr[i] == ")") && (strArr[strArr.length - 1] == "(")) {
            strArr.pop();
        } else if ((arr[i] !== "}") && (arr[i] !== "]" && (arr[i] !== "|") && (arr[i] !== ">"))) {
            strArr.push(arr[i])
        };
        if ((arr[i] == "}") && (strArr[strArr.length - 1] == "{")) {
            strArr.pop();
        } else if ((arr[i] !== ")") && (arr[i] !== "]") && (arr[i] !== "|") && (arr[i] !== ">")) {
            strArr.push(arr[i])
        };
        if ((arr[i] == "]") && (strArr[strArr.length - 1] == "[")) {
            strArr.pop();
        } else if ((arr[i] !== "}") && (arr[i] !== ")") && (arr[i] !== "|") && (arr[i] !== ">")) {
            strArr.push(arr[i])
        };
        if ((arr[i] == ">") && (strArr[strArr.length - 1] == "<")) {
            strArr.pop();
        } else if ((arr[i] !== "}") && (arr[i] !== ")") && (arr[i] !== "|") && (arr[i] !== "]")) {
            strArr.push(arr[i])
        };
        if ((arr[i] == "|") && (strArr[strArr.length - 1] !== "|")) strArr.push(arr[i]);
        if ((arr[i] == "|") && (strArr[strArr.length - 1] == "|")) strArr.pop();


    }
    return !strArr[0];
}
