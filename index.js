var recipes = {
  oats:"2 cups",
  butter:"1 cup",
  sugar:"1.5 cups",
  milk:"half cup",
  cocoa:"5 tbsp",
  vanilla:"2 tsp"
}

var props = {
  prop:"1"
}

function updateObjectWithKeyAndValue(props, key, value){
  return Object.assign({}, props, {[prop2]: "2"})
}

function destructivelyUpdateObjectWithKeyAndValue(props, key, value){
  return props.prop2 = "2"
}