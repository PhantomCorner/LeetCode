/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

//比较两个字符串的长度，取最小的长度，然后依次取出两个字符串的字符，拼接到一起
//再把长度差的部分取出来，拼接到一起

var mergeAlternately = function (word1, word2) {
  let res = "";
  let extraStr = getExtraCharacters(word1, word2);
  let length = Math.min(word1.length, word2.length);
  for (i = 0; i < length; i++) {
    res += word1[i] + word2[i];
  }
  return `${res}${extraStr}`;
};

function getExtraCharacters(str1, str2) {
  return str1.length > str2.length
    ? str1.slice(str2.length)
    : str2.slice(str1.length);
}
