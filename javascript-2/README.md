# javascript-2

promiseReduce - ������ � ������������ ���������
����: �������� ������� promiseReduce(asyncFunctions, reduce, initialValue) 
 - *asyncFunctions* - ������ ����������� �������, ������������ ������ 
 - *reduce(memo, value)* - �������, ������� ����� ������� ��� ������� ������� �������������� �������
 - *initialValue* - ��������� �������� ��� ������� reduce 

*promiseReduce* ��������������� �������� ���������� ����������� ������� � ��������� reduce ������� ����� ��� ��������� ���������� �� ������ ��������� ����������� �������. 
������� promiseReduce ������ ���������� ������ � �������� �����������.

������ �������������:
```javascript
var fn1 = () => {
console.log('fn1')
return Promise.resolve(1)
}

var fn2 = () => new Promise(resolve => {
console.log('fn2')
setTimeout(() => resolve(2), 1000)
})

function promiseReduce(asyncFunctions, reduce, initialValue) {
/*
* ����������
*/
}

promiseReduce(
[fn1, fn2],
function (memo, value) {
console.log('reduce')
return memo * value
},
1
).then(console.log)
```

����� � �������:

```
fn1
reduce
fn2
reduce
2
``` 
