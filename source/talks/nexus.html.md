---
layout: remark
title: Nexus Lab DHJ Talk
progress_bar: true
twitter: true
twitter_name: oncomouse, ShawnaRoss
---
class: center, middle, big, nexus-title

#Building <br> Digital Henry James

.single-space[
## Andrew Pilsch 

.twitter_badge[[@oncomouse](http://twitter.com/oncomouse)]

## ShawnaRoss

.twitter_badge[[@ShawnaRoss](http://twitter.com/ShawnaRoss)]
]
### February 26, 2015


---
class: bigger, middle
# Agenda

<ol>
	<li>Project Goals</li>
	<li class="phantom">Book History</li>
	<li class="phantom">Project Architecture</li>
</ol>
---
class: bigger, middle
# Agenda

<ol>
	<li>Project Goals</li>
	<li>Book History</li>
	<li class="phantom">Project Architecture</li>
</ol>
---
class: bigger, middle
# Agenda

<ol>
	<li>Project Goals</li>
	<li>Book History</li>
	<li>Project Architecture</li>
</ol>
---
class: center, middle, intertitle

# 1. Project Goals

---
class: bigger
.title-block[
# 1. Project Goals:
## Why James?
]

.center[

* Genre Studies
* Media Studies
* Early Modernism
* Anglophone Realism
* High Theory Test Case
* Transnational/Transatlantic
]
---
class: big
.title-block[
# 1. Project Goals:
## Other Projects: The Ladder
]

* 70 short stories
* 7 novels
* 3 plays
* New York Edition prefaces

### Some scholarly apparatuses

* Bibliography
* Indices
* Editorial policies explanation

---
class: big
.title-block[
# 1. Project Goals:
## Other Projects: HJ Scholar's Guide
]

* 12 short stories
* 2 essays
* 7 novels
* 3 novellas

### Updated list of James sites

---
class: big
.title-block[
# 1. Project Goals:
## Other Projects:  Miscellaneous
]

1. **Center for Henry James Studies (Zacharias)**
	* Hosts the Calendar of the Letters of Henry James
1. **The Henry James Resource Center**
	* DH course project
1. **Cambridge _Portrait of a Lady_ (Anesko)**
	* Uploadable .doc files of 6 different print editions (all in size 12 Times New Roman)

---
class: big
.title-block[
# 1. Project Goals:
## Other Projects:  Major Archives
]

.center[
|Resource|Texts|Notes|
|:-------|:---:|-----:|
|HathiTrust|82|Scanned Images|
|Gutenberg|49|Unchecked OCR|
|Making of Am|12|Unsearchable|
|VIRGO (UVA)|3|65 Poe, 39 Crane|
|Nagoya Archive|11|Searchable Concordance|
|Wright Am Fic|1|Short Story Collection|
]
---
class: bigger
.title-block[
# 1. Project Goals
## What's the Problem?
]

.center[
> *Electronic editions without apparatus, without documentation of editorial principals, and without provision for suitable display are equally unacceptable for <br> serious scholarly work.*
>
> *Michael Sperberg-McQueen*

]
---
class: bigger
.title-block[
#1. Project Goals
## What's the Problem?
]
.center[
* **Existing etexts are ...**
* Inconsistent
* Incomplete
* Inaccurate
* Uninteractive
* Unglossed
* Ugly
]
---
class: big
.title-block[
# 1. Project Goals
## Ecology of Multiple Editions
]

.bigger[.center[
* Digital and print editions can and should serve different needs.
]]


.pull-left[
**Cambridge Edition**
* Definitive 
* Idealized 
* Critical
* History of the Text
* Longevity
]

.pull-right[
**Proposed Digital Edition**
* Dynamic 
* Historicized 
* Populist
* Future of the Text
* Longevity
]
---

.title-block[
# 1. Project Goals
## Principles of Online Editions
]

### Accessibility 
* Texts are free and available to anyone (in multiple formats)

### Clarity
* Operation is intuitive and presentation is clean

### Flexibility
* Users can access plain text and code to plug in to other tools

### Historicity and Contemporaneity
* Some degree of textual/bibliographic history 
* Up-to-date research about digital reading habits informs presentation

---
.title-block[
# 1. Project Goals
## Methods
]


### Text Creation
* Prototypes: "Guest's Confession" and _The Ambassadors_
* Focus on New York Edition (1907-9)
* Encoding (TEI/XML) and presentation (XLST, CSS)
* Output: http://www.henryjamesarchive.org

### Funding
* Internal (ASU)
* External (NEH)
* Student encoders through new degree program

### Applications
* Pedagogy: Student-created critical editions

---
class: center, middle, intertitle

# 2. Book History
---
class: big
.title-block[
# 2. Book History
## Historical Sources
]

### *The New York Edition*

* Published 1907-1909
* 24 Volumes (2 More Posthumously)
* Revision + New Prefaces

### *The *New* New York Edition*

* Recreate these editions, online
* Include prefaces + texts
---
class: bigger
.title-block[
# 2. Book History
## The *NYE* as Design Artifact
]

1. James was *so* happy with *NYE*!
1. Centuries of practical printers' knowledge
1. Signifies "datedness" that is aesthetically appropriate
---
class: bigger
.title-block[
# 2. Book History
## The *NNYE* as Design Artifact
]

.center[

# <br><br>How to Replicate <br> *NYE* Online?

]

---
.title-block[
# 2. Book History
## Line Length
]

### Examining the first line of _The Golden Bowl_ (text of 1909 ed.)

* The New York Edition (first line, 47; average, 51.2)

![NYE Line](http://shawnaross.com/images/blog/NYE_first_wings_of_the_dove_line.jpg)

* .Epub Ebook (first line, 47; average, 47.2)

![epub line](http://shawnaross.com/images/blog/epub_first_line_of_wings_of_the_dove.jpg)

* Gutenberg .html file (first line, 138 characters)

![Gutenberg line](http://shawnaross.com/images/blog/gutenberg_first_line_of_wings_of_the_dove.jpg)
---
.title-block[
# 2. Book History
## The NYE Typeface
]

.center[
![Princess Casamassima title page](http://www.shawnaross.com/images/blog/princess_casamassima_font_sample.png)
]
---

.title-block[
# 2. Book History
## Locating Typeface: Steps to a Match
]

* Capital A: concave stroke at the top
* Italic Capital E: viciously extreme serifs
* Italic Lowercase F: slim and spare, no curl to it
* Italic Lowercase H: stem is straight; looks like a _"b"_
* Italic Capital J: has bar bisecting downstroke
* Swashes used for capital T, lowercase w, capital Y
* Which ligatures are connected?
  * “oe” is indeed connected
  * “fl” is indeed connected
  * “fi” is indeed connected
  * “ff” is indeed connected
  * “ffi” is indeed connected
  * “ft” is NOT connected
  * “Th”/"th" is NOT connected

---

.title-block[
# 2. Book History
## Locating Typeface: Free Online Tools
]

* [What the Font](http://www.myfonts.com/WhatTheFont/)
  * Upload a sample
* [IdentiFont](http://www.identifont.com/)
  * Like those "tree key" questionnaires
* [What Font Is](http://www.whatfontis.com/)
  * Painstaking but reliable process
* [Serif Font Identification Guide](http://www.bowfinprintworks.com/SerifGuide/serifsearch.php)
  * Most Useful
  * Identifying quibbling serif characteristics, angles, tail lengths, bowl shapes

---

.title-block[
# 2. Book History
## Rock the Caslon
]

.center[![Three Caslons of Henry James](/images/nexus/caslon.png)]

---
class: center, middle, intertitle

# 3. Project Architecture
---

class: bigger
.title-block[
# 3. Project Architecture:
## TEI is Finicky
]