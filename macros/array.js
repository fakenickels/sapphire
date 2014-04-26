// array << item => array.push(item)

macro (<<) {
  rule infix { $array | $item } => {
    if(isArray($array)){
      $array.push($item)
    }
    else{
      throw error
    }
  }
}

// array >> item => item = array.pop()

macro (>>) {
  rule infix { $array | $item } => {
    if(isArray($array)){
      $item = $array.pop()
    }
    else{
      throw error
    }
  }
}
