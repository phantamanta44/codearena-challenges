const n = Math.floor(Math.random() * 10);
var array = [];
var total = 0;

for(let i=0; i<n; i++){
  const a = Math.floor(Math.random()*100);
  array[i] = a;
}


for(let i = 0; i < array.length; i++) {
  total += array[i];
}

var avg = total / array.length;

Test.assertEquals(avg, (total/array.length));
