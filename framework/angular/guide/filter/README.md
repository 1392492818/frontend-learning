# 语法
用法1

```
{{ ng 表达式 | 过滤器名 :参数1 :参数2 }}
function 过滤器名(ng 表达式, 参数1, 参数2) {
  return ...;
}
```

用法2

```
$filter(过利器名).(参数1, 参数2);
```

# 用法
## currency
货币过滤器

## date
日期过滤器

- `yyyy`：年
- `MM`：月
- `dd`：日
- `hh`：时
- `mm`：分
- `ss`：秒

# json
json过滤器

# lowercase
小写字母过滤器

# uppercase
大写字母过滤器

# number
数字过滤器

## limitTo
限制过滤器

> 1、常常用于将一个数组或字符串中的某一部分取出来
> 2、当要过滤数组，且过滤器后面的参数是一个数字，这时候取出数组的前几个元素，
> 当要过滤数组，且过滤器后面的参数是有两个参数，第一个表示要过滤的长度，第二个表示开始的元素
> 3、当要过滤字符串时，且过滤器后面传入一个数字参数时，表示要取出字符串的前几个字符
> 当要过滤字符串时，且过滤器后面传入连个参数时，第一个表示要过滤的长度，第二个表示开始的字符

# orderBy
排序过滤器

# 参考文献
- [angular中过滤器解析](http://blog.csdn.net/itzhongzi/article/details/68620777)
