---
title: "Events in Flux"
twitter: true
twitter_name: oncomouse
twitter_name_start: 2
progress_bar: true
---
class: inverse, center, middle, f40px, title

# Events in Flux:<br>Software Architecture and Rhetorical Subtraction

**Andrew Pilsch**  
**Texas A&M University**  
**<span class="twitter_badge">@oncomouse</span>**  
**he/his**

.f44px[
**Materials: [http://atp1.us/machines](http://atp1.us/machines)**
]

**<small>RSA 2018 ◊ Minneapolis, MN ◊ June 1, 2018</small>**
---
class: inverse, quote, f28px

## Doug Eyman

> While rhetoric provides the primary theory and methods for the field of digital rhetoric, the objects of study must be digital (electronic) compositions rather than speeches or print texts. This is not to say that scholars of digital rhetoric may not make connections between analog and digital objects or focus on the cultural and socio-historical circumstances that lead to, influence, or are imbricated with the construction of digital texts, but that the primary boundary condition for the field is the distinction between analog and digital forms of communication.
> 
> – *Digital Rhetoric*
---
class: center, middle, inverse

![Design Patterns Book Cover](https://images-na.ssl-images-amazon.com/images/I/81gtKoapHFL.jpg)
---
class: inverse
## Pub-Sub

<div class="mermaid center">
graph TB;
    pub(Publisher)-->|Hey|sub1(Subscriber);
    pub-->|Hey|sub2(Subscriber);
    pub-->|Hey|pubsub1(Publisher/Subscriber);
    pubsub1-->|Sup?|sub1;
</div>
---
class: inverse
## Pub-Sub Lightbulbs

<div class="mermaid center">
graph TB;
    pub1(Publisher #1)-->|On|lb(Light Bulb Controller);
</div>
---
class: inverse
## Pub-Sub Lightbulbs

<div class="mermaid center">
graph TB;
    pub1(Publisher #1)-->|On|lb(Light Bulb Controller);
    pub2(Publisher #2)-->|Off|lb;
</div>
---
class: inverse, f55px
## Pub-Sub Lightbulbs

<div class="mermaid center">
graph TB;
    pub1(Publisher #1)-->|On|lb(Light Bulb Controller);
    pub2(Publisher #2)-->|Off|lb;
</div>
.center[

Oh, &*%$!

]
---
class: inverse
## Flux

.center[

![Flux Logo](https://i2.wp.com/www.codice.cc/wp-content/uploads/2016/09/flux-logo.png?fit=512%2C512)

]
---
class: inverse
## Flux
<div class="mermaid center">
graph TD;
    ac(Action)-->|Something Happened|di(Dispatcher);
    di-->|Reduce|st(Store);
    st-->|Push Updates|vi(View);
    vi-->|The User Did Something|ac;
</div>
---
class: inverse
## Flux Lightbulbs

<div class="mermaid center">
graph TD;
    lv(Login Form)-->|User Logged In|ac(Action);
    ac-->|Login Action|di(Dispatcher);
    di-->|Login Action|st(Store);
    st-->|Lightbulb State Has Changed|lb(Light Bulb Controller);
    st-->lv;
</div>
---
class: inverse, center, middle

![](https://www.topoi.org/wp-content/uploads/2014/03/Klepsydra_Karnak-Tempel.jpg)
---
class: inverse, f27px, quote
## Susan Leigh Star
> By experience and by affinity, some of us begin not with Pasteur, but with the monster, the outcast. Our multiplicity has not been the multiple personality of the executive, but that of the abused child, the half- breed. We are the ones who have done the invisible work of creating a unity of action in the face of a multiplicity of selves, as well as, and at the same time, the invisible work of lending unity to the face of the torturer or of the executive. We have usually been the delegated to, the disciplined.
> 
> – "Power, Technology, and the Phenomenology of Conventions: On Being Allergic to Onions"
---
class: inverse, f26px, quote
## Erasmus
> To take compression of language first, who will speak more succinctly than the man who can readily and without hesitation pick out from a huge army of words, from the whole range of figures of speech, the feature that contributes most effectively to brevity? And as for compression of content, who will show the greatest mastery in setting out his subject in the fewest possible words if not the man who has carefully worked out what are the salient points of his case, the pillars so to speak on which it rests, distinguishing them from the subsidiary points and things brought in merely for embellishment?
> 
> – *De Copia*
---
class: inverse, f26px, quote
## Shawna Ross
>  Both Jamesian style and social media are **forms of verbal compression that are dense, allusive, and lossless, self-contained programs that can output large quantities of information by referring to a tiny percentage of the original data**. And both only work if you know how to read them. Accordingly, the Jamesian narrator’s fundamental task—to arrange and interpret data streams (consciousness, expression, dialogue, action, text)—is the position that needs to be taken up by today’s social media user, who increasingly “knows” friends and family through data streams.
> 
> – "Hashtags, Algorithmic Compression, and Henry James’s Late Style"
---
class: inverse
## Flux
<div class="mermaid center">
graph TD;
    ac(Action)-->|Something Happened|di(Dispatcher);
    di-->|Reduce|st(Store);
    st-->|Push Updates|vi(View);
    vi-->|The User Did Something|ac;
</div>
---
class: inverse, f30px, quote
## Susan Leigh Star
> The power of feminist analysis is to move from the experience of being a non-user, an outcast or a castaway, to the analysis of the fact of McDonald's (and by extension, many other technologies)- and implicitly to the fact that 'it might have been otherwise,' - there is nothing necessary or inevitable about the presence of such franchises. We can bring a stranger's eye to such experiences.
> 
> – "Power, Technology, and the Phenomenology of Conventions"
---
class: inverse, quote, f40px
## Susan Leigh Star

> When standards change, it is easier to see the invisible work and the invisible memberships that have anchored them in place.
> 
> – "Power, Technology, and the Phenomenology of Conventions"
---
<div class="mermaid center">
graph TD;
    st(Store)-->|My Data Has Changed|bc(Bar Chart);
		st-->|My Data Has Changed|pc(Pie Chart);
		st-->|My Data Has Changed|ss(Spreadsheet);
</div>
