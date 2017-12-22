# Pwn・Exploitテクニック一覧

### [任意コード・シェルの実行](arbitary_code.md)

Pwnの最終目標はシェルを取ることです。まずは任意コードをどのように実行し、シェルをどう起動したらいいのかについて書いていきます。

 * システムコールの発動 
 * execve の発動 
 * vtable 、 hook への任意アドレスの登録
 * one gadget によるシェルの起動 
 * system() によるシェルの起動 
 * FILE\_plus 構造体の vtable 書き換え 
 * abort() 関数中の \_\_IO\_flush\_all\_lockp() による攻撃 
 * ret命令を起点とした攻撃 
 * FSOP によるシェルの起動 
 * ROPによるシェルの起動 
 * .got.plt 領域への system() の登録

### [入出力による攻撃](io_attacks.md)

入力によっては、 `Buffer Over Flow` 攻撃や出力において終端文字列の埋め忘れによるメモリの値のリークが出来ることがあります。

`Buffer over Flow` 攻撃はプログラムが、確保したメモリのサイズを超えた入力を受け入れる時に出来る攻撃です。 

単純なものではローカル変数の書き換えができます。これを起点とした攻撃手法は他にも色々ありますが、有名な攻撃手法として `Return Oriented Programming` という攻撃があります。

 * 終端文字列の埋め忘れによるメモリの値のリーク 
 * libc の先頭アドレスのリーク 
 *  ユーザーからの入力によるBoF 
 * 入力の終端埋めにおけるBoF（Off By One) 
 * コピー系の関数を使ったBoF 
 * BoF による ROP 

### [アルゴリズム系(memory allocator)](heap.md)

いわゆるHeap問と呼ばれる問題で使われる攻撃手法です。

動的なメモリ管理ではHeap領域と呼ばれる必要に応じて確保される領域にデータを詰め込んでいく手法を取ります。確保された領域のことをここではチャンクと呼びます。

より効率よくメモリを管理するためのアルゴリズムが組まれていて、こういったアルゴリズムを `memory allocator` と呼びます。

 `memory allocator` をプログラムの作成者がうまく使えなかったために不具合が生じることがあります。

そういった不具合を使った攻撃手法をアルゴリズム系(memory allocator)の攻撃手法として以下に紹介します。

またここで使われる `memory allocator` は `glibc malloc` を用いたものであることを前提とします。

 * main\_arena のアドレスのリーク 
 * heap 領域のアドレスのリーク 
 * ヒープ領域のBoF 
 * malloc() で発動する攻撃 
 * free() で発動する攻撃 
 * fastbinの二重解放 
 * 解放後チャンクの書き換え 
 * fastbinを任意のアドレスにつなげる 
 * 0x70サイズのfastbinのリンクによる\_\_{malloc|realloc|memalign}\_hook への関数の登録 
 * unsortedbin、smallbinの任意アドレスへのリンク 
 * 偽のunsortedbinの統合によるbinと割当領域の重なり 
 * topチャンクの改竄によるsysmalloc()の発動 
 * topチャンクの書き換えによる任意アドレスへの動的メモリの割当 

