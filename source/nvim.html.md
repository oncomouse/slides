---
title: VIM
progress_bar: true
hidden: false
---

class: center, middle

# VI: Visual Editor

---
## History

* Developed First in 1976 by Bill Joy
	* `ex` -- a line editor written w/ Chuck Haley
	* `vi` (visual) was the screen editor for `ex`
	* First released as `vi` in 1979
* First developed on a Lear Siegler ADM-3A Terminal
	* Had arrow keys printed on <kbd>h</kbd>, <kbd>j</kbd>, <kbd>k</kbd>, and <kbd>l</kbd> to control cursor
	* <kbd>Escape</kbd> was where <kbd>Tab</kbd> now is on standard keyboards
* Included in BSD Unix, which Joy wrote
* Dependent on AT&T's Original UNIX license, therefore non-free
	* 1987: STEVIE (ST Editor for VI Enthusiasts)
		* Limited vi
	* 1990: Elvis
		* Full vi
		* Last release: 2003
	* 1994: nvi
		* Full vi, with "bug for bug" compatibility
		* Last release: 1996
	* Running `vi` on FreeBSD or Minix gets you Elvis
	* Running `vi` on BSD Lite gets you nvi
* Clones
	* 1991: Vim (Vi IMproved)
		* Based on STEVIE
		* Still developed today
	* 2014: Neovim
		* Fork, refactor, and modernization of Vim
---
## Use

* Vi is a modal editor
	* Modal editors track different moments of input and do different things accordingly
* Vi modes:
	* **Insert** -- typing gets you text as a normal editor
	* **Normal** -- typing triggers commands that move around and change the document
	* **Replace** -- typing overwrites existing text
	* **Visual** -- typing moves the cursor but highlights sections for copying and pasting
* This contrasts with all other modern, extant text editors, which have one mode and use special modifier keys (<kbd>alt</kbd> or <kbd>ctrl</kbd>) to issue commands
* Execution begins in Normal mode.
	* Other modes are entered by typing the first letter of the desired mode (<kbd>i</kbd> for insert, etc.).
	* Other modes are exited using <kbd>Escape</kbd>.
* Most of the interest in Vi lies in Normal mode
	* Movement is done with <kbd>h</kbd>, <kbd>j</kbd>, <kbd>k</kbd>, and <kbd>l</kbd>
	* But any command in normal mode can be modified as it is typed.
	* So, typing <kbd>12k</kbd> will move up twelve lines.
* Normal mode also features the concept of text-objects.
	* Addressed by more shortcut keys.
	* <kbd>iw</kbd> and <kbd>aw</kbd> are text objects for words
		* <kbd>iw</kbd> selects "inside" the word
		* <kbd>aw</kbd> selects "around" the word, including space
	* There are text objects for sentences and paragraphs, as well as words.
		* Also for things programmers need such as functions.
* Text objects combine with commands in normal mode:
	* <kbd>d</kbd> is the command for delete
	* <kbd>y</kbd> is the command for copy (called yanking)
	* To delete a word, type <kbd>diw</kbd>
		* To delete the next 6 words type <kbd>6diw</kbd>
		* To delete the previous 12 lines type <kbd>12dk</kbd>
* There's a lot more to this, but you can also move by going toward the next or previous occurrence of a character. You can search. You can replace using the same search command.
	* You can also do this in multiple files open at the same time.

---
## Culture

* Steep learning curve
	* Elitist as a result
* Vim and Neovim also include programming languages to add features with plugins
	* The Vim community is often hostile to plugins because it breaks the perceived purity of the language
* Vi has an ancient blood feud with Emacs, another text editor from 1976.
	* Emacs largely invented the modern text editor through their use of chorded keyboard shortcuts and only one mode
	* Vi or Emacs was long a way of differentiating programmers
	* This has died down somewhat as Emacs paradigmatic success in shaping modern text editors has diluted its use.
* The Neovim fork of Vim, which added many modern editor features has shown that Vi is still widely used.
