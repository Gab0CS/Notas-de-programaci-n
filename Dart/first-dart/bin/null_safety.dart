void main() {
  //To make a value null add ? in front of the type
  String? answer;

  //Assertion operator to make the compiler think that
  //a variable won't be null
  String result = answer!;
}

//Late initialization
//Works to assign a non-nullable value later
class Animal {
  late final String _size;

  void goBig() {
    _size = 'big';
    print(_size);
  }
}
