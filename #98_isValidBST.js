/**给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
示例 1:

输入:
    2
   / \
  1   3
输出: true
示例 2:

输入:
    5
   / \
  1   4
     / \
    3   6
输出: false
解释: 输入为: [5,1,4,null,null,3,6]。
     根节点的值为 5 ，但是其右子节点值为 4 。

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {
     let inOrderList=[];
    //中序遍历
    function inOrder(node){
        //如果当前node不存在或到达终点
        if(!node)return;
        //检查左节点
        inOrder(node.left)
        //push当前节点值进入inOrderList
        inOrderList.push(node.val);
        //检查右节点
        inOrder(node.right);
    }
    //对输入进行检查
    inOrder(root);
    //循环到最后一项
    for(let i=0;i<inOrderList.length-1;i++){
        //[1,2,3,4,5]
        //如果当前项大于后面一项，证明不是平衡二叉树（数组不是有序排列）
        if(inOrderList[i]>=inOrderList[i+1]){
            return false;
        }
    }
    return true
};