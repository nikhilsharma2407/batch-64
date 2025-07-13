// This is a JavaScript Quiz from BFE.dev


const obj = {
    a: 1,
    b: function() {
      console.log(this.a)
    },
    c() {
      console.log(this.a)
    },
    d: () => {
      console.log(this.a)
    },
    e: (function() {
      return () => {
        console.log(this.a);
      }
    })(),
    f: function() {
      return () => {
        console.log(this.a);
      }
    }
  }

  console.log(obj.a)  // 1
  obj.b(); // 1
  (obj.b)(); // 1
  const b = obj.b;b(); // u
  obj.b.apply({a: 2}); // 2
  obj.c(); // 1
  obj.d(); // u
  (obj.d)();  // u
  obj.d.apply({a:2});  // u
  obj.e(); // u
  (obj.e)(); // u
  obj.e.call({a:2}); // u
  obj.f()(); // 1
  (obj.f())(); // 1
  obj.f().call({a:2}) //1
  obj.f.call({a:2})() //2
  