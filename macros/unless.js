// session.destroy unless user.logged
// unless user.logged session.destroy

macro unless {
  rule infix { return $value:expr | $guard:expr } => {
    if (!($guard)) {
      return $value;
    }
  }
}