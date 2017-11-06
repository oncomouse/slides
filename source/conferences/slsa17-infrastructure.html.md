---
title: "SLSA 17: Infrastructure"
twitter: true
twitter_name: oncomouse
twitter_name_start: 2
progress_bar: true
---
class: hljs-zenburn, inverse, f27px
```javascript
map :: [a] ~> (a -> b) -> [b]

equals :: Setoid a => a ~> a -> Boolean

Array.map = (f) => {
  var output = [];
  this.forEach(x => output.push(f(x)))
  return output;
}
```