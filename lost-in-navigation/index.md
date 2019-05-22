---
title: Lost in Navigation
layout: singlepage
---
### Welcome to Lost in Navigation.<img style="height: 1.5rem;" src="/img/viv_icon.png" />
<p style="height: 100vh">
Let's imagine that our mouse has disappeared<br/>
<em>Press the ⬇ arrow key 66 times as fast as you can</em>
</p>

{% comment %}
  Turn on F7 shortcut before
  Disable spatial and caret navigation

  Get someone from the crowd to volunteer (live navigation and )
{% endcomment%}

The first thing we'd do is probably using the keyboard keys.

{% comment %}
  I'd like to talk a bit about how we navigate through websites.
  If I where to navigate through this website I'd use a mouse to point/scroll/click.
  We are all different though, and there are some reasons for us not always being able to or having access to a mouse.
{% endcomment %}

But.

Notice.

How.

This.

Can.

Get.

Out.

Of.



<p style="height: 100vh">
  Hand.
</p>



<p style="height: 50vh">
  We could add something like alt to our arrow functions....
  <br/>
  <i>4 times [Alt] + ⬇ key (3 sec in between)</i>
</p>
<p style="height: 100vh">
  To make us jump a page down each time.
</p>

but

that

is

annoying

when

text

gets

cut

off

and

you

can't

read

it

gradually

so

it

gets

confusing

Did you notice how the words are cut off a bit at the top or bottom?

_One more [Alt] + ⬇ key_

<div style="height: 70vh"></div>
## Caret navigation/browsing
<p>
  So have you heard of caret browsing?
</p>


_Not in Chromium browsers at the moment. Edge are moving to Chromium. In the mean time we can go find <a tabindex="-1" href="https://chrome.google.com/webstore/detail/caret-browsing/fklpgenihifpccgiifchnihilipmbffg?hl=en">Caret browsing extension</a>. Press F7 when done getting it_

_Make sure to disable <a tabindex="-1" href="vivaldi://settings">keyboard shortcuts</a> that may collide with this function_

_Note: You will jump back to the top and have to use caret navigation to get back here and then keep going. Caret browsing will also work better if you position it after the first character before pressing down_

<div style="height: 70vh"></div>

<p style="height: 100vh"> Now I can</p>
<p style="height: 20vh"> skip</p>
<p style="height: 20vh"> the</p>
<p style="height: 20vh"> space between</p>

<p style="height: 20vh"> And you can highlight!</p>

_Try highlighting some text with shift + arrow buttons before carrying on_

<div style="height: 30vh"></div>

{% comment %}
  Because I'm using vertical height
{% endcomment %}


It's not perfect though... 

How am I supposed to type in this input?

{% comment %}
  In Firefox you can use the caret browsing to navigate to an input... but you can't get back out of said input again (stuck jumping only between inputs)
{% endcomment %}

<input style="font-size: 5rem"/>

<div style="height: 20vh"></div>

_Try getting to the X first using ➡️ key 20 times and the the ⬇️ arrow keys as far as you can_

<div class="grid grid-white" style="display: grid; grid-template-columns: auto auto;">
  <p style="font-size: 4rem">
    And if I have two columns. How are you going to jump to the next column?  You know you're going to have to go through this whole column before you can go to the next one. You're going to have to use the ⬇️ arrow key to get to the bottom and then the ➡️ arrow key to get to the next column.</p>
  <p>Get to the X here in the second column. This X! </p>
</div>


It will then pop back to here finally!


<p>
  Then I can make it disappear
</p>

_Move caret all the way to left and press ⬇️ once with caret browsing on to make it disappear_

<br/><br/><br/>


It sometimes acts weird when there are a lot of spaces
<div style="height: 30vh"></div>

## Linear navigation

At least we know how to fix not being able to type in the input issue. We can go to the input element right away. Simply using linear navigation.

_Press TAB once_


_Note that it will jump to the first input field first though because the caret navigation isn't native yet._


<input />

Tabbing between inputs is nice especially for forms...

But most browsers have links sometimes there are links in the way

{% comment %}
  Is this broken
{% endcomment %}
<nav>
<a href="/rachel#">Some fun link</a>
<a href="/rachel#">Some fun link</a>
<a href="/rachel#">Some fun link</a>
<a href="/rachel#">Some fun link</a>
<a href="/rachel#">Some fun link</a>
<a href="/rachel#">Some fun link</a>
<a href="/rachel#">Some fun link</a>
<a href="/rachel#">Some fun link</a>
</nav>




Let's have a look at the Vivaldi settings to see whether we can enable a different sort of cycling.
There is a possibility to go through only the forms...
That would be nice

1. Go to Vivaldi settings and Under the "Webpage" group.
<a href="vivaldi://settings">vivaldi://settings</a>

2. Go to Webpages category or search for Webpage Focus

3. Choose Focus Forms Only (which is on by default in Vivaldi)



## Access key


```python
<input accesskey="a" value="what" />
```

_Press CMD + E on Mac or F2 on Windows and type access keys in Vivaldi_

<input accesskey="a" value="what" />
<input accesskey="b" value="what" />
<input accesskey="c" value="what" />
<input accesskey="d" value="what" />

_Press ESC and then alt + ⬇️ to read a bit about access keys_

_Then use access key to CTRL + ALT + 5 to go to spatial navigation section_

<p style="font-size: 2rem">
  An access key allows you to immediately jump to a specific part of a web page via keyboard. 
  <br/>
  Introduced in 1999 (near-universal browser support).
  <br/>
  Summer of 2002, a Canadian Web Accessibility consultancy, did an informal survey.<br/>
  
  For users where point and click is not an option for them. <br/>
  Found that most key stroke combinations did present a conflict for one or more of these technologies.<br/>
  Recommended to avoid using accesskeys altogether.<br/>
  <br/>
  In XHTML 2, the HTML Working Group of the World Wide Web Consortium deprecated the accesskey attribute in favor of the XHTML Role Access Module. <br/>
  However, XHTML 2 has been retired in favor of HTML5, which (as of August 2009) continues to permit accesskeys.
  
  In 2004, a standard emerged using numbers. These include, for example, 1 to go to the homepage, 4 for search, 9 for contact, and others.<br/>
  Rarely implemented today.<br/>
  <br/>
  Ten years later, 2014, they tried again: This is what we have<br/>
</p>



<table>
  <thead>
    <tr>
    <th scope="col" class="col-1">Access Key</th>
    <th scope="col" class="col-2"><a href="#scope">Scope</a></th>
    <th scope="col" class="col-3"><a href="#locations">Location</a></th>
    <th scope="col" class="col-4"><a href="#window">Window/Tab</a></th>
    </tr>
  </thead>
  <tbody>
    <tr><th scope="row">0 (zero)</th><td><a href="#page-scope">Page</a></td><td><a href="#help">Help</a></td><td><a href="#new-window">New Window</a></td></tr>
    <tr><th scope="row">1 (one)</th><td><a href="#site-scope">Site</a></td><td><a href="#home">Home</a></td><td></td></tr>
    <tr><th scope="row">2 (two)</th><td><a href="#site-scope">Site</a></td><td><a href="#signup">Sign-up / Create Account</a></td><td></td></tr>
    <tr><th scope="row">3 (three)</th><td><a href="#site-scope">Site</a></td><td><a href="#sitemap">Site Map</a></td><td></td></tr>
    <tr><th scope="row">4 (four)</th><td><a href="#page-scope">Page</a></td><td><a href="#search">Search</a></td><td></td></tr>
    <tr><th scope="row">5 (five)</th><td><a href="#page-scope">Page</a></td><td><a href="#license">License</a></td><td></td></tr>
    <tr><th scope="row">6 (six)</th><td><a href="#page-scope">Page</a></td><td><a href="#copyright">Copyright</a></td><td></td></tr>
    <tr><th scope="row">7 (seven)</th><td><a href="#site-scope">Site</a></td><td><a href="#privacy">Privacy Policy</a></td><td></td></tr>
    <tr><th scope="row">8 (eight)</th><td><a href="#site-scope">Site</a></td><td><a href="#terms">Terms &amp; Conditions</a></td><td></td></tr>
  <tr><th scope="row">9 (nine)</th><td><a href="#site-scope">Site</a></td><td><a href="#contact">Contact Form and/or Details</a></td><td></td></tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
    <th scope="col" class="col-1">Access Key</th>
    <th scope="col" class="col-2"><a href="#scope">Scope</a></th>
    <th scope="col" class="col-3"><a href="#locations">Location</a></th>
    <th scope="col" class="col-4"><a href="#window">Window/Tab</a></th>
    </tr>
  </thead>
  <tbody>
    <tr><th scope="row">k (K)</th><td><a href="#site-scope">Site</a></td><td><a href="#accesskeys">Access <u>K</u>eys</a></td><td><a href="#new-window">New Window</a></td></tr>
    <tr><th scope="row">p (P)</th><td><a href="#page-scope">Page</a></td><td><a href="#previous"><u>P</u>revious Article</a></td><td></td></tr>
    <tr><th scope="row">n (N)</th><td><a href="#page-scope">Page</a></td><td><a href="#next"><u>N</u>ext Article</a></td><td></td></tr>
    <tr><th scope="row">t (T)</th><td><a href="#page-scope">Page</a></td><td><a href="#top">Back to <u>T</u>op</a></td><td></td></tr>
    <tr><th scope="row">i (I)</th><td><a href="#site-scope">Site</a></td><td><a href="#login">Log<u>i</u>n</a></td><td></td></tr>
    <tr><th scope="row">o (O)</th><td><a href="#site-scope">Site</a></td><td><a href="#logout">Log<u>o</u>ut</a></td><td></td></tr>
    <tr><th scope="row">b (B)</th><td><a href="#site-scope">Site</a></td><td><a href="#blog"><u>B</u>log / News</a></td><td></td></tr>
    <tr><th scope="row">f (F)</th><td><a href="#site-scope">Site</a></td><td><a href="#feed">Syndication <u>F</u>eed: RSS/Atom</a></td><td><a href="#new-window">New Window</a></td></tr>
    <tr><th scope="row">s (S)</th><td><a href="#site-scope">Site</a></td><td><a href="#social"><u>S</u>ocial Media Sites / Networks</a></td><td></td></tr>
    <tr><th scope="row">v (V)</th><td><a href="#page-scope">Page</a></td><td><a href="#validate"><u>V</u>alidate</a></td><td><a href="#new-window">New Window</a></td></tr>
  </tbody>
</table>


<h2 id="spatial">
  <a href="#spatial" accesskey="5">Spatial navigation</a>
</h2>
Have you heard of spatial navigation?

<p style="height: 100vh">
Seen in old phones with out a touchscreen and TVs when browsing<br/>
<br/>
  The ability to move around the page directionally (up/down/right/left) is called spatial navigation.<br/>
  <em>Press alt + ⬇️ key</em>
</p>

First lets try Blink/Chromium spatial navigation

1. Open settings <a href="vivaldi://settings">vivaldi://settings</a>

2. Search for "Spatial Navigation" or go to the Webpages category

3. We'll need to open the site in a different tab because we need a new renderer.


_Try to navigate through this site again using shift + arrow keys_

Notice how the focus matches the look of the site itself. This


_Once you get here you can try to navigate to the X here below using spatial navigation_


<div class="grid" style="display: grid; grid-template-columns: auto auto auto;">
  <a href="what">what is this</a>
  <a href="what">what is this</a>
  <a href="what">what is this</a>
  <a href="what">what is this</a>
  <a href="what">what is this</a>
  <a href="what">what is this</a>
  <a href="what">what is this</a>
  <a href="what">what is this</a>
  <a href="what">Get to the X</a>
  <a href="what">what is this</a>
  <a href="what">what is this</a>
  <a href="what">what is this</a>
  <a href="what">what is this</a>
  <a href="what">what is this</a>
</div>
<div></div>

_ALT + ⬇️ key when you're done_
<div style="height: 30vh"></div>
## Final words...

All browsers are going to handle a little bit differently.

It would be smart to check out some of the features it has and customize to your needs.

So if we take Vivaldi for example it has 

1. <a href="vivaldi://settings">Customizable keyboard shortcuts</a> (even single key shortcuts)
2. <a href="vivaldi://settings">Mouse Gestures</a> to name a few.

_ALT + ⬇️ key when you're done_
<div style="height: 30vh"></div>
<p style="height: 100vh">
  We will all get lost.<br/>
  <br/>
  But we'll find our way back.<br/>
  <br/>
  <em>ALT + ⬇️ key one more time</em>
</p>

Thank you <img style="height: 3rem;" src="/img/viv_icon.png" />


{% comment %}

## Skip nav (extra content)

Creating "Skip Navigation" Links
The idea is simple enough: provide a link at the top of the page which jumps the user down to an anchor or target at the beginning of the main content. For the most part, it really is this easy, though there is more than one way to accomplish the goal. Some techniques are better than others. The techniques discussed here are:

Providing visible links at the top of the page
Providing visible links elsewhere on the page
Making the link invisible
Making the link invisible until it receives keyboard focus


This is your main content


Some implement

https://webaim.org/techniques/skipnav/


In which they move all the way to the main content

You can make an element that only appears when 
```html
<a href="#maincontent">Skip to main content</a> 
<main id="#maincontent"/>
```

<nav>
<a href="#maincontent">Skip to main content</a> 
<a href="/rachel#">Some fun link</a>
<a href="/rachel#">Some fun link</a>
<a href="/rachel#">Some fun link</a>
<a href="/rachel#">Some fun link</a>
<a href="/rachel#">Some fun link</a>
<a href="/rachel#">Some fun link</a>
<a href="/rachel#">Some fun link</a>
<a href="/rachel#">Some fun link</a>
</nav>
<p style="">
This is your main content
<main id="#maincontent"/>



{% endcomment %}




