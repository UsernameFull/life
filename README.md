# life
====

The definite Conway's Game of Life implementation in your browser. Features an infinite field &amp; Hashlife.

All modern browsers are supported. I don't test IE, but it might work starting at version 9 or 10.

The whole thing is written in Javascript, using the canvas tag.


## fork说明

原项目实际上已经相当完善了，没什么改动空间。但全盘采用js可能会有性能损失，毕竟生命游戏是个计算密集性任务，拟采用rust-wasm替换原项目中计算部分，也是借此学习rust和wasm

Links
-

- Online version: https://copy.sh/life/
- List of examples: https://copy.sh/life/examples/
- Source of examples (direct link): http://www.conwaylife.com/patterns/all.zip
