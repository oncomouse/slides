---
title: "MLA 18"
twitter: true
twitter_name: oncomouse
twitter_name_start: 2
progress_bar: true
---
class: inverse, center, middle, f40px, title

# Security Through Transparency:<br> <small>Minimal Computing <br> in the Jungle of the Real</small>

**Andrew Pilsch**  
**<small>Texas A&M University</small>**  
**<small><span class="twitter_badge">@oncomouse</span></small>**

**<small>MLA 2018 ◊ New York, NY ◊ January 5, 2018</small>**
---
class: inverse, f34px
## Paul Virilio, <small>*The Original Accident*</small>

> The expectation horizons of a past three centuries old that is now over – those of total revolution and total war – have been outpaced by the anguished expectation of the (eco-eschatological) Great Accident of which industrial accidents and terrorist attacks are only ever prefigurations, symptoms of a complete reversals in the orientation of humanity. (52)
---
class: inverse, f44px
## Search: Internet "held together"
---
class: inverse, f44px
## Search: Internet "held together"

* Bailing wire
---
class: inverse, f44px
## Search: Internet "held together"

* Bailing wire
* Scotch tape
---
class: inverse, f44px
## Search: Internet "held together"

* Bailing wire
* Scotch tape
* peanut butter
---
class: inverse, f44px
## Search: Internet "held together"

* Bailing wire
* Scotch tape
* peanut butter
* prayers
---
class: inverse, f44px
## Search: Internet "held together"

* Bailing wire
* Scotch tape
* peanut butter
* prayers
* hope
---
class: inverse, f44px
## Search: Internet "held together"

* Bailing wire
* Scotch tape
* peanut butter
* prayers
* hope
* bubble gum
---
class: inverse, f44px
## Search: Internet "held together"

* Bailing wire
* Scotch tape
* peanut butter
* prayers
* hope
* bubble gum
* band-aids
---
class: inverse, f44px
## Quinn Norton, <small>"Everything is Broken"</small>

> It’s hard to explain to regular people how much technology barely works, how much the infrastructure of our lives is held together by the IT equivalent of baling wire. (n.p.)

---
class: inverse, f36px
## Jentery Sayers, <small>"Minimal Definitions"</small>

1. Minimal Design
2. Minimal Use
3. Minimal Consumption
4. Minimal Maintenance
5. Minimal Barriers
6. Minimal Internet
7. Minimal Externals
8. Minimal Automation
9. Minimal Space
10. Minimal Technical Language

---
class: inverse, f30px
## Jentery Sayers, <small>"Minimal Definitions"</small>

> At stake here are the ways in which practitioners determine how stages of production (such as fabrication, circulation, exchange, consumption, and use) mediate social relations and agency. While this observation may sound rather theoretical, **attendant issues of power and self-organization shape an array of minimal computing practices,** such as where repositories are housed, who maintains and contributes to them, who moderates and reviews them, and how they are accessed now and down the line.(n.p.)
---
class: inverse, f44px
## Exploits Since 2004
---
class: inverse, f44px
## Exploits Since 2004

* Wordpress – **413**
---
class: inverse, f44px
## Exploits Since 2004

* Wordpress – **413**
* MySQL – **3010**
---
class: inverse, f44px
## Exploits Since 2004

* Wordpress – **413**
* MySQL – **3010**
* PHP – **3775**
---
class: inverse, f44px
## Exploits Since 2004

* Wordpress – **413**
* MySQL – **3010**
* PHP – **3775**
* Apache – **3693**
---
class: inverse, f44px
## Exploits Since 2004

* Wordpress – **413**
* MySQL – **3010**
* PHP – **3775**
* Apache – **3693**
* Ubuntu Linux – **18281**
---
class: hljs-zenburn, code-example, inverse
## Iterative vs Functional Programming

.pull-left[
~~~javascript
// Iterative Fibonacci Numbers:

function fib(n) {
	if(n === 0) return 0;
	if(n === 1) return 1;

	// Create state variables:
	var n2 = 0;
	var n1 = 1;
	var result = 0;

	// Iterate a looping structure
	//   and mutate state:
	for(var i = 2; i <= n; i++) {
		result = n1 + n2;
		n2 = n1;
		n1 = result;
	}
	return result
}
~~~
]
.pull-right[
~~~javascript
// Functional Fibonacci numbers:

/* @flow */
function fib(n: number): number {
	if(n === 0) {
		return 0;
	} else if(n === 1) {
		return 1;
	} else {
		// Function is defined
		//   in terms of itself:
		// No variable mutations:
		return fib(n-1) + fib(n-2);
	}
}
~~~
]
---
class: center, middle, inverse

# Move Fast and Break Things

.phantom[
# Move Fast with Stable Infra
]
---
class: center, middle, inverse

# Move Fast and Break Things

# Move Fast with Stable Infra
---
class: inverse, f28px
## Paul N. Edwards, "Infrastructure and Modernity"

> Nevertheless, the fact is that mature technological systems—cars, roads, municipal water supplies, sewers, telephones, railroads, weather forecasting, buildings, even computers in the majority of their uses—**reside in a naturalized background, as ordinary and unremarkable to us as trees, daylight, and dirt**. Our civilizations fundamentally depend on them, yet we notice them mainly when they fail, which they rarely do. They are the connective tissues and the circulatory systems of modernity. In short, these systems have become infrastructures. (185)

---
class: middle, center, inverse

# Thank You
