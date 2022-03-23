---
title: Sự khác nhau giữa tham số và đối số (parameter và argument)
author: Teo
date: 2022-03-20 15:51:00 +0700
categories: [Tech]
tags: [post, vietnamese]
pin: false
---
  

Khi nói về các phương thức bằng lời nói, tôi không bao giờ chắc chắn có nên sử dụng từ đối số hoặc tham số hay thứ gì khác. Tôi đọc nhiều tài liệu đôi khi tôi cũng nhầm lẫn về những từ ngữ này. Dù bằng cách nào thì người khác cũng biết ý của tôi, nhưng tôi muốn biết chính xác cách sử dụng của các thuật ngữ.
<br>

> parameter : tham số <br> argument : đối số

Tham số là một biến trong định nghĩa phương thức.
<br>
Khi một phương thức được gọi, các đối số là dữ liệu bạn truyền vào các tham số của phương thức.

<br>
Ví dụ:
<br>

```c#
    public void MyMethod(string myParam) { } // myPatam được gọi là tham số
    ...
    string myArg1 = "this is my argument";
    myClass.MyMethod(myArg1); // myArg1 được gọi là đối số
```
