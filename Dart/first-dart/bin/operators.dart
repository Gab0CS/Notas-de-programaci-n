void main() {
  //basic math
  1 + 2 - 8;

  //logic
  1 == 1;
  1 < 2;
  (1 >= 2) || ('a' == 'b');
  (1 >= 2) && ('a' == 'b');

//Assignment
  String? name;
  name ??= 'Guest';
  //??= assign value if null, otherwise use current value

  // ?? does the same
  var z = name ?? 'Guest';

  // ternary operators, the same as javascript

  String color = 'blue';
  var isThisBlue = color == 'blue' ? 'Yeah, that\'s blue' : 'Nah, aint blue';

  //cascade
  //Lets me call method, but return original object
  dynamic Paint;
  // var paint = Paint();
  // paint.color = 'black';
  // paint.strokeCap = 'round';
  // paint.strokeWidth = 5.0;

  var paint = Paint()
    ..color = 'black'
    ..strokeCap = 'round'
    ..strokeWidth = 5.0;

  //Type cast allows me to take a var and
  //cast it as a different type
  var number = 23 as String;
  number is String; //true
}
