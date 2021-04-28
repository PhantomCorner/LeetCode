/**
 * 
 * @param {string} s 
 */
var length=function(s){
    if(s==null) return;
    let start=0,end=0;
    const dic={};
    let max=1;
    while(end!==s.length){
        const currWord=s.charAt(end);
        if(dic[currWord]==undefined||dic[currWord]<start){
            dic[currWord]=end;
            max=Math.max(max,end-start+1);
        }else{
            start=dic[currWord]+1;
            dic[currWord]=end
        }
        end++
    }
    return max;
    

}
console.log(length('aaabef'))