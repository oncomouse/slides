---
title: "Composition not Inheritance"
twitter: true
twitter_name: oncomouse
twitter_name_start: 2
progress_bar: true
---
class: inverse, center, middle, f40px, title

# Composition<br>not Inheritance:<br> <small>Imagining a<br>Functional Digital Humanities</small>

**Andrew Pilsch**  
**<small>Texas A&M University</small>**  
**<small><span class="twitter_badge">@oncomouse</span></small>**  
**<small>he/his</small>**

**<small>DHSI Colloquium 2018 ◊ June 14, 2018</small>**
---
class: inverse, f30px, quote
## Mark Sample

> William Gibson has famously said that “the future is already here, it’s just not very evenly distributed.” With the digital humanities we have the opportunity to distribute that future more evenly. We have the opportunity to distribute knowledge more fairly, and in greater forms. The “builders” will build and the “thinkers” will think, but all of us, no matter where we fall on this false divide, we all need to share. Because we can.
>
> — "The digital humanities is not about building, it’s about sharing"
---
class: center, middle, inverse

## Composition<br><br>Inheritance
---
class: inverse
## What is Inheritance?

<div class="mermaid center">
graph TB;
    animal("Barnyard Animal<br><br>makeNoise()")-->bird("Barnyard Bird<br><br>flapWings()<br>layEgg()");
    animal-->mammal("Barnyard Mammal");
    bird-->chicken("Chicken<br><br>makeNoise('cluck')");
    bird-->duck("Duck<br><br>makeNoise('quack')");
    mammal-->donkey("Donkey<br><br>makeNoise('bray')");
</div>

---
class: inverse
## What is Composition?

<div class="mermaid center">
graph BT;
    noise("Noise Making")-->|bray|donkey("Donkey");
    noise-->|cluck|chicken("Chicken");
    noise-->|quack|duck("Duck");
    lay("Egg Laying")-->chicken;
    lay-->duck;
    flap("Wing Flapping")-->chicken;
    flap-->duck;
</div>
---
class: inverse, f43px
## *Design Patterns*

* **Inheritance** == "White-Box Reuse"
---
class: inverse, f43px
## *Design Patterns*

* **Inheritance** == "White-Box Reuse"
* **Composition** == "Black-Box Reuse"
---
class: inverse, f25px, quote
## Johanna Drucker

> But, I will argue, such graphical tools are a kind of intellectual Trojan horse, a vehicle through which assumptions about what constitutes information swarm with potent force. These assumptions are cloaked in a rhetoric taken wholesale from the techniques of the empirical sciences that conceals their **epistemological biases** under a guise of familiarity. So naturalized are the Google maps and bar charts generated from spread sheets that they pass as unquestioned representations of “what is”. This is the hallmark of realist models of knowledge and needs to be subjected to a radical critique to return the humanistic tenets of constructed-ness and interpretation to the fore. 
>
> – "Humanities Approaches to Graphical Display"

---
class: inverse, f25px, quote
## Jacques Derrida

> It is at that point that the *différance* as writing could no longer (be) an (ontological) modification of presence. In order for my "written communication" to retain its function as writing, i.e., its readability, it must remain readable despite the abso­lute disappearance of any receiver, determined in general. My communication must be repeatable—iterable—in the absolute absence of the receiver or of any empirically determinable collectivity of receivers. Such iterability … structures the mark of writing itself, no matter what particular type of writing is involved…. A writing that is not structurally readable—iterable—beyond the death of the addressee would not be writing. 
> 
> – "Signature, Event, Context"
---
class: inverse, f26px, quote
## Richard Lanham

> And because all arts face the same technological pressures, they are going to find, create, new relationships through that technology, through their new digital equivalences. Such equivalences pose the most fundamental, and most obvious, challenges to the structure and purpose of the university arts curriculum, and to the place of literary study in it. The shocked responses to chance techniques of creation in experimental music will no doubt be duplicated in responses to programs which create **aleatory poetry**.
> 
> – "The Electronic Word"

---
class: center, middle, inverse

## Thanks