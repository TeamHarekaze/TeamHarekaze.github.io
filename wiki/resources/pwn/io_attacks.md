# 入出力による攻撃

入力によっては、 `Buffer Over Flow` 攻撃や出力において終端文字列の埋め忘れによるメモリの値のリークが出来ることがあります。

`Buffer over Flow` 攻撃はプログラムが、確保したメモリのサイズを超えた入力を受け入れる時に出来る攻撃です。 

単純なものではローカル変数の書き換えができます。これを起点とした攻撃手法は他にも色々ありますが、有名な攻撃手法として `Return Oriented Programming` という攻撃があります。

##  終端文字列の埋め忘れによるメモリの値のリーク 

`puts()` 関数や `printf()` 関数は文字列をその文字列の終端文字の一つ前までを出力します。

この性質を使うことで、例えばメモリ配置上ローカル変数hogeの直後にあるローカル変数piyo の値を表示することなどができます。

### 基礎となる攻撃

とくになし

### 応用した攻撃

-  `libc` のアドレスのリーク 

-  `heap` 領域のアドレスのリーク 

##  libc の先頭アドレスのリーク 

メモリの値をリークするときにとくに `libc` が配置されているアドレスをリークすることで、用いている `libc` が判明している状態であれば、 `libc` の先頭アドレスを求めることが出来ます。

リモートのバイナリが `Address Space Layout Randomization(ASLR)` が効いている場合は `libc` の開始位置がランダムに変化してしまうため特定できません。こういったときに `libc` の先頭アドレスをリークすることで、 `libc` 上の関数を呼び出すことが出来ます。

### 基礎となる攻撃

-  終端文字列の埋め忘れによるメモリの値のリーク 
### 応用した攻撃

とくになし

##   ユーザーからの入力によるBoF 

単純に入力を受け入れた先のメモリ領域が小さいことに起因する攻撃です。

### 基礎となる攻撃

とくになし

### 応用した攻撃

-  `BoF` による `ROP` 

-  ヒープ領域のBoF 

##  入力の終端埋めにおけるBoF（Off By One) 

入力を受け入れた先のメモリ領域は正しいが、その直後にNULL文字('\x00')などを埋め込むといったプログラムの動作によって起きうる攻撃です。

これによってアドレスの書き換え先が代わるなどすると攻撃者の意図した動作を組み込める可能性があります。

### 基礎となる攻撃

とくになし

### 応用した攻撃

-  ヒープ領域のBoF 

##  コピー系の関数を使ったBoF 

メモリ上のデータを他のメモリ上の領域にコピーするときにコピー先のメモリ領域のサイズがコピー元より小さい時に出来る攻撃です。

こちらは `BoF by User Input` のときと同様の攻撃ができます。

### 基礎となる攻撃

とくになし

### 応用した攻撃

-  `BoF` による `ROP` 

-  ヒープ領域のBoF 

##  BoF による ROP 

スタック領域のローカル変数のメモリで起こる `BoF` を使うと `ROP` 攻撃が可能になります。

ただし、 バイナリの `Stack Smashed Protector(SSP)` が有効である場合は、スタック上の `canary` を決められた値にしなければいけません。このときに `canary` をリークすることで、決められた値をスタック上に置くという手段が存在します。

### 基礎となる攻撃

-  ret命令を起点とした攻撃 

-   ユーザーからの入力によるBoF 

-  コピー系の関数を使ったBoF 

### 応用した攻撃

-  ROPによるシェルの起動 

