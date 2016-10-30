---
title: TWC 421 - Day 12
progress_bar: true
---
class: center, middle, big

.title-block[
# TWC 421 - Day 12
## Color, Box Model, Fonts
]

---
class: middle, center

.title-block[

#### <code>&nbsp;&nbsp;&nbsp;<span style="color: #F00">Red</span> <span style="color: #0F0">Green</span> <span style="color: #00F">Blue</code>
#### <code><span style="color: #F00">0</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #0F0">0</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #00F">0</code>
# <code><span style="color: #000000">#000000</span></code>

]

```html
<h1><code><span style="color: #000000">#000000</span></code></h1>
```
---
class: middle, center

.title-block[

#### <code>&nbsp;&nbsp;&nbsp;<span style="color: #F00">Red</span> <span style="color: #0F0">Green</span> <span style="color: #00F">Blue</span></code>
#### <code>&nbsp;&nbsp;<span style="color: #F00">0</span>&nbsp;&nbsp;&nbsp;<span style="color: #0F0">0</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #00F">255</code>
# <code><span style="color: #0000FF">#0000FF</span></code>

]

```html
<h1><code><span style="color: #0000FF">#0000FF</span></code></h1>
```
---
class: middle, center

.title-block[

#### <code>&nbsp;&nbsp;&nbsp;<span style="color: #F00">Red</span> <span style="color: #0F0">Green</span> <span style="color: #00F">Blue</span></code>
#### <code>&nbsp;&nbsp;<span style="color: #F00">128</span>&nbsp;&nbsp;&nbsp;<span style="color: #0F0">0</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #00F">128</code>
# <code><span style="color: #800080">#800080</span></code>

]

```html
<h1><code><span style="color: #800080">#800080</span></code></h1>
```
---
class: center, middle

## Basic HTML Color Names

<table width="90%" cellspacing="0" cellpadding="0" border="0">
<tbody><tr>
<th scope="col">Color</th>
<th scope="col">Color Name</th>
<th scope="col">Hex</th>
</tr>
<tr>
<td style="background: #000000;">&nbsp;</td>
<td><code>black</code></td>
<td><code>#000000</code></td>
</tr>
<tr>
<td style="background: #C0C0C0;">&nbsp;</td>
<td><code>silver</code></td>
<td><code>#C0C0C0</code></td>
</tr>
<tr>
<td style="background: #808080;">&nbsp;</td>
<td><code>gray</code></td>
<td><code>#808080</code></td>
</tr>
<tr>
<td style="background: #FFFFFF&lt;;">&nbsp;</td>
<td><code>white</code></td>
<td><code>#FFFFFF</code></td>
</tr>
<tr>
<td style="background: #800000;">&nbsp;</td>
<td><code>maroon</code></td>
<td><code>#800000</code></td>
</tr>
<tr>
<td style="background: #FF0000;">&nbsp;</td>
<td><code>red</code></td>
<td><code>#FF0000</code></td>
</tr>
<tr>
<td style="background: #800080;">&nbsp;</td>
<td><code>purple</code></td>
<td><code>#800080</code></td>
</tr>
<tr>
<td style="background: #FF00FF;">&nbsp;</td>
<td><code>fuchsia</code></td>
<td><code>#FF00FF</code></td>
</tr>
<tr>
<td style="background: #008000;">&nbsp;</td>
<td><code>green</code></td>
<td><code>#008000</code></td>
</tr>
<tr>
<td style="background: #00FF00;">&nbsp;</td>
<td><code>lime</code></td>
<td><code>#00FF00</code></td>
</tr>
<tr>
<td style="background: #808000;">&nbsp;</td>
<td><code>olive</code></td>
<td><code>#808000</code></td>
</tr>
<tr>
<td style="background: #FFFF00;">&nbsp;</td>
<td><code>yellow</code></td>
<td><code>#FFFF00</code></td>
</tr>
<tr>
<td style="background: #000080;">&nbsp;</td>
<td><code>navy</code></td>
<td><code>#000080</code></td>
</tr>
<tr>
<td style="background: #0000FF;">&nbsp;</td>
<td><code>blue</code></td>
<td><code>#0000FF</code></td>
</tr>
<tr>
<td style="background: #008080;">&nbsp;</td>
<td><code>teal</code></td>
<td><code>#008080</code></td>
</tr>
<tr>
<td style="background: #00FFFF;">&nbsp;</td>
<td><code>aqua</code></td>
<td><code>#00FFFF</code></td>
</tr>
</tbody></table>

---
class: center, middle

.title-block[
## HTML Color List
### [https://dl.dropboxusercontent.com/u/28696035/samples.html](https://dl.dropboxusercontent.com/u/28696035/samples.html)
]
---
class: center, middle

.title-block[

#### <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #F00">Red</span>&nbsp;&nbsp;&nbsp;<span style="color: #0F0">Green</span>&nbsp;&nbsp;&nbsp;<span style="color: #00F">Blue</span></code>

# <code><span style="color:rgb(128,0,128)">rgb(128,0,128)</span></code>

]

```html
<code><span style="color:rgb(128,0,128)">rgb(128,0,128)</span></code>
```
---
class: center, middle

.title-block[

#### <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #F00">Red</span>&nbsp;&nbsp;&nbsp;<span style="color: #0F0">Green</span>&nbsp;&nbsp;&nbsp;<span style="color: #00F">Blue</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgba(0,0,0,0.5)">Alpha</span></code>

# <code><span style="color:rgba(128,0,128,0.5)">rgba(128,0,128,0.5)</span></code>

]

```html
<code><span style="color:rgb(128,0,128)">rgb(128,0,128, 0.5)</span></code>
```

---
class: center, middle

![HTML Box Model](http://www.w3.org/TR/CSS2/images/boxdim.png)