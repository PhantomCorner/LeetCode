/**
 * 将字符串按Z字行排列 并且横向重新输出
 * @param {s} string
 * @param {numRows} int
 * @returns 
 */


// var convert = function(s, numRows) {
//     if(numRows == 1)
//         return s;

//     const len = Math.min(s.length, numRows);
//     const rows = [];
//     for(let i = 0; i< len; i++) rows[i] = "";
//     let loc = 0;
//     let down = false;

//     for(const c of s) {
//         rows[loc] += c;
//         if(loc == 0 || loc == numRows - 1)
//             down = !down;
//         loc += down ? 1 : -1;
//     }

//     let ans = "";
//     for(const row of rows) {
//         ans += row;
//     }
//     return ans;
// };
//console.log(convert('LEETCODE',3))
var Zconvert = function(s, numRows) {
    if (numRows === 1) 
        return s;
    //创建一个以numRows为长度的array
    let array=new Array(numRows).fill('');
    const n=2*numRows-2;
    for(let i=0;i<s.length;i++){
        const x= i%n;
        array[Math.min(x,n-x)]+=s[i];
    }
    //把数组中的所有元素放入一个字符串。
    return array.join('')
};
console.log(Zconvert('LEETCODE',3))