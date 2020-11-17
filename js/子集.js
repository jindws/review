/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
	const t = [];
	const ans = [];
	const dfs = function(cur){
		if (cur === nums.length) {
			ans.push([...t]);
			return;
		}
		t.push(nums[cur]);
		dfs(cur + 1);//1    12/1      123/12/13/1
		t.pop();
		dfs(cur + 1);// 1x
	}
	dfs(0);
	return ans;
};

console.log(subsets([1,2,3]))
