public class Solution {
    public TreeNode LowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        TreeNode current = root;
        
        while (current != null)
        {
            if (q.val < current.val && p.val < current.val) 
            {
                current = current.left;
            } else if (q.val > current.val && p.val > current.val)
            {
                current = current.right;
            } else {
                return current;
            }
        }
        return null;
    }
}