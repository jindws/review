//完成 deepGet 函数，给它传入一个对象和字符串，字符串表示对象深层属性的获取路径，可以深层次获取对象内容：

const deepGet = (obj, prop, num) => {
  // TODO: 在此处完善代码
  if (typeof prop === "string") {
    prop = prop.split(".");
  }
  if (prop.length) {
    if (num) {
      const next = obj[num.replace(/[\[\]]/g, "")];
      if (next === undefined) return next;
      return deepGet(next, prop);
    }
    let name = prop.shift();
    num = name.match(/\[\d]/)?.[0];
    if (num) {
      //数组
      name = name.replace(/\[\d]/, "");
    }
    const next = obj[name];
    if (next === undefined) return next;

    return deepGet(next, prop, num);
  } else return obj;
};

/** 以下为测试代码 */
console.log(
  deepGet(
    {
      school: {
        student: { name: "Tomy" },
      },
    },
    "school.student.name"
  )
);
// => 'Tomy'

console.log(
  deepGet(
    {
      school: {
        students: [{ name: "Tomy" }, { name: "Lucy" }],
      },
    },
    "school.students[1].name"
  )
); // => 'Lucy'

// 对于不存在的属性，返回 undefined
console.log(deepGet({ user: { name: "Tomy" } }, "user.age")); // => undefined
console.log(deepGet({ user: { name: "Tomy" } }, "school.user.age")); // => undefined
