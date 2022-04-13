import _ from "lodash";


console.log(_.unionWith([{a:1},{b:1,c:{b:[1]}}], [{a:1},{c:{b:[1]},b:1}], _.isEqual))