macro (||=) {
  rule infix { $left | $right } => {
    $left = $left || $right
  }
}