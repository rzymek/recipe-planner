Doc = Recipe+

Recipe = title:Title ingredients:Ingredient+ equipment:Equipment* "\n"+ {return {title,ingredients,equipment}}

Title = "#" _ title:([^\n]+) "\n" { return title.join('') }

Ingredient =
    "*" _ text:([^:\n]+) ":" _ amount:Number unit:([^\n]+) _ "\n" { return ({text:text.join(''),amount,unit: unit.join('').trim()}) }
Equipment =
    "+" _ text:([^\n]+) _ "\n" {return text.join('')}

Item = [^,\n]+ { return text()}

Number "number"
  = _ [0-9]+("."[0-9]+)? { return parseFloat(text()); }

_ "whitespace"
  = [ \t]*
