// def add do |x y|
//  return x + y
// end

macro def {
  case {def $name $params ... do $body ... end } => {
    return #{
      function $name ($params ...) {
        $body ...
      }
    }
  }
}