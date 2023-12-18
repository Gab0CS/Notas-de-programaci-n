void main() {
  //variables are declared by his type
  int num1 = 2;
  double num2 = 3.0;

  String str = 'Jojojorge falcón';
  //string interpolation
  print('The type of $str is a string? ${str is String}');

  print((num1 + num2) is double);

  // To know the type of a variable straight to console
  print((num1 + num2).runtimeType);

  // var keyword to specify that i don't care the
  // type of the variable, dynamic type would be applied to this
  //and I should avoid the dynamic types
  var username;

  //variables are reasignable by default
  //To make it unnassignable put final at the beginning
  final String fullname = 'Gabriel Canseco Santana';

  //Alternative that is better cause its immutable

  const String fullname2 = 'Gabriel Canseco Santana2';


}
