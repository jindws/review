/**
 * 把n个骰子扔在地上，所有骰子朝上一面的点数之和为s。输入n，打印出s的所有可能的值出现的概率。

 你需要用一个浮点数数组返回答案，其中第 i 个元素代表这 n 个骰子所能掷出的点数集合中第 i 小的那个的概率。

 * @param n
 * @returns {unknown[]|*[]}
 */
var dicesProbability = function(n) {
    if (n < 1) {
        return [];
    }
    const res = [0, 1, 1, 1, 1, 1, 1];
    for (let i = 1; i < n; i++) {
        for (let j = 6 * n; j > 0; j--) {
            res[j] = res
                .slice(Math.max(0, j - 6), j)
                .reduce((acc, cur) => acc + cur, 0);
        }
    }
    return res.slice(1).map(num => num / 6 **n).filter(Boolean);
};

console.log(dicesProbability(2))