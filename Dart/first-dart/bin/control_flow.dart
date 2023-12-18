void main() {
  String color = 'blue';

  if (color == 'blue') {
  } else if (color == 'green') {
  } else {
    //default
  }

  // one line conditionals
  if (color == 'red') print('hello word');

  //For conditionals if i want to check a property i have to
  //explicitly check it
  String thing1 = '';

  if (thing1.isEmpty) ;

  //Explicitly null
  String? thing2;

  if (thing2 != null) ;

  //loops like other languages

  for (var i = 0; i < 5; i++) {
    print(i);
  }
  int i = 0;
  do {
    print(i);
  } while (i < 5);

  //Assert takes a condition and if that condition is false
  // it raises an error in debug mode

  var txt = 'good';
  assert(txt != 'bad');
}
