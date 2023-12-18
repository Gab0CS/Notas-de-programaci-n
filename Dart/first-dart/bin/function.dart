void main() {
  // functions are fitrst class objects

  //basic function
  takeFive(int number) {
    return '$number minus five equals ${number - 5}';
  }

  var str = takeFive(23);

  // definind named parameters
  //required to make it required
  //? to make it nullable
  // default value with =
  namedParams({required int a, int b = 5}) {
    return a - b;
  }

  namedParams(a: 14, b: 15);
  //Doesn't matter the order
  namedParams(b: 18, a: 16);

  // Arrow Function
  String takeFive2(int number) => '$number minus five equals ${number - 5}';
  takeFive2(23);

  //Anonymous function
  // callIt(
  //   () => 'Hola mundo'
  // );

  //Callbacks
   callIt(Function callback) {
    var result = callback();

    return 'Result: $result';
  }
}
