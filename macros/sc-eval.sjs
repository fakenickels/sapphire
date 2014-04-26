// x ||= y => x = x || y

macro (||=) {
  rule infix { $left | $right } => {
    $left = $left || $right
  }
}