// 2 equals as sane langs

macro (==){
  rule infix { $left | $right } => {
    $left === $right
  }
}

macro (!=){
  rule infix { $left | $right} => {
    $left !== $right
  }
}