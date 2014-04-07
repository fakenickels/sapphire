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