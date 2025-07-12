const emp1 = {
  name: "emp1 Name",
  empID: "E101",
  dept: {
    deptId: "D101",
    deptName: "dept1",
  },
  greet() {
    console.log(`Hello I'm ${this.name}`);
  },
};
// const emp1 = null;
// const { name: employeeName, dept } = emp1;
// const empDept = emp1.dept;

const obj1 = { name: "abcd" };
const obj2 = { name: "abcd" };

// console.log(obj1 === obj2)
// console.log(empDept === emp1.dept)
// let deptName = emp1.dept.deptName;
// deptName = 1234;
// // console.log("🚀 ~ emp1.dept.deptName:", emp1.dept.deptName);
// // console.log("🚀 ~ deptName:", deptName);

// const { dept } = emp1;
// // const { deptName, deptId } = dept;
// let {
//     dept: { deptName: newVarName, deptId },
// } = emp1;
// // console.log("🚀 ~ newVarName:", newVarName)
// // console.log("🚀 ~ deptId:", deptId);
// newVarName = 'xyz';
// const manager = emp1.manager || "No manager exists";
const { manager = "No manager exists" } = emp1 || {}; // providing the fallback value incase, the `key` manager doesn't exists
// console.log("🚀 ~ manager:", manager);

const accNum = emp1?.bankDetails?.accNum;
// const { bankDetails : { accNum } = {} } = emp1 || {};
// const accNum = emp1.bankDetails?.accNum;
// console.log("🚀 ~ accNum:", accNum);

// // `this` , ES6 classes
const emp2 = {
  name: "emp2Name",
  empID: "E102",
  dept: {
    deptId: "D101",
    deptName: "dept1",
  },
  greet: function () {
    // console.log("🚀 ~ greet ~ this:", this);
    // console.log(`Hello I'm ${this.name}`);
    return () => {
      // take `this` from enclosing parent fn;
      console.log("🚀 ~ arrow fn enclosed within Function:", this);
      console.log(`Hello I'm ${this.name}`);
    };
  },

  greetMethod() {
    console.log("🚀 ~ greetMethod ~ this:", this);
    console.log(`Hello I'm ${this.name}`);
  },

  greetArrowFn: () => {
    console.log("🚀 ~ greetArrowFn ~ this:", this);
    console.log(`Hello I'm ${this.name}`);
  },
};

// emp2.greet()();

// emp2.greetMethod()  // implicit binding
// const { greetMethod, greet } = emp2;
// greetMethod();  // global node obj

// greet()();  // glo

// call, apply, bind  // explicitply pass this binding
// greetMethod.call(emp2);   // explicit binding   emp2.greetMethod()
// greetMethod.call(emp1);   // explicit binding   emp1.greetMethod()
// emp2.greetMethod();
// emp2.greetArrowFn();

// Arrow fn do not have their own `this`binding, it depends on where its defined;\
// In arrow fn, `this` binding depends on enclosing function (normal), otherwise Global/undefined,

// Normal fn/methods `this` depends on how its invoked rather than where its defined;
// if no obj is invoking the function, then consider its as global execution
// implicit binding
// explicit binding

const arrowFnOutside = () => {
  console.log("🚀 ~ arrowFnOutside ~ arrowFnOutside:", this);
};

function funDeclaration() {
  console.log("🚀 ~ funDeclaration ~ this:", this.name); //global

  function normalFunInsideFunDeclaration() {
    console.log("🚀 ~ normalFunInsideFunDeclaration ~ this:", this.name); //global
    const test123 = () => {
      console.log("🚀 ~ test123 ~ this:", this);
    };

    test123();
  }
  const arrowInsideFunDeclaration = () => {
    
    console.log("🚀 ~ arrowInsideFunDeclaration ~ this:", this.name); //same as parent
  };

  normalFunInsideFunDeclaration(); // global
  arrowInsideFunDeclaration();
}

// arrowFnOutside();
// funDeclaration();

const obj = {
  name: "GFG",
  arrowFnOutside,
  funDeclaration,
};

// obj.arrowFnOutside(); // same as 110, {}/Global
obj.funDeclaration(); // 98 GFG 100 Gloabl -> undef 103 GFG
