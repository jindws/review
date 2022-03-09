/**
 * @desc 允许重复
 * @param nums
 * @returns {[]}
 */
const permuteUnique = function (nums) {
    const list = [],
        lock = []

    function fun(list, temp) {
        if (temp.length === nums.length) {
            return list.push([...temp]);
        }

        for (let i = 0; i < nums.length; i++) {
            if (lock[i] || (i > 0 && lock[i - 1] && nums[i] === nums[i - 1])) {
                continue;
            }
            lock[i] = true;
            temp.push(nums[i]);
            fun(list, temp);
            lock[i] = false;
            temp.pop();
        }
    }

    fun(list, []);

    return list;
};

console.log(permuteUnique([1, 1, 1, 3]));
