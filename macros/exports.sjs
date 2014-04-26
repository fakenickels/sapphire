macro export {
  rule { export $x } => {
    module.exports = $x
  }
}

// export x => module.exports = x
// export x as module => module = x