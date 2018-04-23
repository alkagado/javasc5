function getTriangleArea (a, h) 
{ 
  if ((a <= 0) || (h <= 0))  {return ('Nieprawidlowe');}
 else if ((a > 0) && (h > 0)) {return a*h/2;}}
 
console.log(getTriangleArea(10, 6));

var TriangleArea = getTriangleArea(10,6);

console.log(getTRiangleArea(2, 2));

var TriangleArea2 = getTriangleArea(2, 2);
 console.log(getTRiangleArea(3, 8));

var TriangeArea3 = getTriangleArea(3, 8);