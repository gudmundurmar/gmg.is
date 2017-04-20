---
layout: howto
title: "Making your personal Gihub site using Jekyll"
category: How-to
subtitle: "A little bit about how to get started with a Jekyll page"
date: 2016-10-04
tags: [Jekyll, Github, SVG, Liquid, gmg.is]

---

# Making your own Jekyll site on Github
*Date published: 2016-10-04*

## Setting up your site

I basically followed Jonathan McGlone’s guide to [Creating and Hosting a Personal Site on GitHub](http://jmcglone.com/guides/github-pages/). Setting up the project starts at “step 7”. It also has some very helpful links on what to do after you finish the guide. 


I then proceeded to set up Jekyll locally so I could test. You can use `jekyll build -watch` and `jekyll serve` and then you can view your site at `localhost:4000`
[Jekyll usage documentation](https://jekyllrb.com/docs/usage/)


## Setting up locally
I wanted to be able to work on my site locally without the internet. You can follow these installation instructions to [set up Jekyll locally](https://jekyllrb.com/docs/installation/).

I ran into a few issues setting up jekyll locally on OSX 10.11.6.  Got an error when I was trying to do `sudo rem install jekyll`. 


```markup
ERROR:  Error installing jekyll:
ERROR: Failed to build gem native extension.
```


What ended up saving me was this github issue:[gem install jekyll failed on Mac OS X 10.11](https://github.com/jekyll/jekyll/issues/3984)
I used an answer from [fulldecent commented on Sep 22, 2015](https://github.com/jekyll/jekyll/issues/3984#issuecomment-142352884)
```markup
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install ruby
sudo gem install jekyll
```
Maybe you don’t have to use `sudo` but I haven’t figured that one out. This checklist might also help a bit (from the same issue)...

There is also a checklist that might be helpful from [ghost commented on Sep 25, 2015](https://github.com/jekyll/jekyll/issues/3984#issuecomment-143149777)
 - Install the Xcode command line utilities xcode-select --install
 - Install Homebrew (instructions at http://brew.sh)
 - Modify $PATH to use Homebrew export PATH=/usr/local/bin:$PATH
 - Modify $PATH for GUI apps launchctl setenv PATH "/usr/local/bin:$PATH"
 - Install the latest Ruby brew install ruby
 - Install the latest Jekyll gem install jekyll


## Markup syntax

In order to use Github markup syntax put this in _config.yml
```markup
markdown: kramdown
kramdown:
  input: GFM
  syntax_highlighter: rouge
```
https://sacha.me/articles/jekyll-rouge/

If you want nice colored syntax higlighting in your markdown I recommend using [Prism](http://prismjs.com/download.html)

Then you can do things like 
```python
def this_stupid_function(a):
    number = 12
    return True
```



## Choosing a theme for your site

There are multiple themes online that you can look at. You can find a collection of them at https://jekyll-themes.com or http://jekyllthemes.org.

Example of the themes: 

- You can make a personal website
[Simple and elegant Jekyll theme based on Spacemacs](http://jekyllthemes.org/themes/space-jekyll-template/)

- Or you can for example make a site for your slides and presentations:
[Slides](https://jekyll-themes.com/slides/)

I based my site originally off of devAid by Xiaoying Riley. 
It was thought as a Bootstrap theme designed to help developers promote their personal projects
http://jekyllthemes.org/themes/devaid/


## HTTPS and making your site faster

If you want to be able to serve your domain through a custom domain
I recommend setting up Https through Cloudflare
https://blog.cloudflare.com/secure-and-fast-github-pages-with-cloudflare/ 

While looking through Jekyll themes I came across this [I am Jekyll God ](http://garthdb.com/writings/i-am-a-jekyll-god/) post by Garth Braithwaite. They had been using Jekyll and GitHub Pages to host DesignOpen.org. The interesting thing was they had managed to make their Jekyll site incredibly fast.  (Reaching a stagering Google PageSpeed Insights score of 96)

So I followed their lead and the score actually turned out to be 97 for mobile and 98 on desktop. I recommend you do the same. It basically shows you how to minify your HTML and SASS on your Github page.


## Images

### SVG
I only use SVG images on this site so they can easily scale them and make them interactive. I just place them in my _include file and include them where needed. 

I use [SVGO](https://github.com/svg/svgo) to delete metadata from SVG files.

It's very easy to use once it's set up.
If you have a file named `tmp.svg` just write the following in your terminal
```svgo tmp.svg``` 
or if you want the minified version to be saved as another filename like `tmp.min.svg` use
```svgo tmp.svg tmp.min.svg```


### Static files
If you use images on your site always remember to minimize them. If you're using a Mac you can use something like [ImageOptim](https://imageoptim.com/mac) to get rid of Metadata for images and minify them.

Jekyll has a place for Static files like images under `_static_files` [Jekyll static files documentation](https://jekyllrb.com/docs/static-files/)

### Favicons
If you want to generate favicons for your site you can use [Faveicon-generator](http://www.favicon-generator.org/). Just remember to minimize them with something like [ImageOptim](https://imageoptim.com/mac) when you're done.


## A few other things to note on Jekyll sites.

I recommend reading the [Jekyll documentation](https://jekyllrb.com/docs/)
Remember to restart always your site after you add something to your _config.yml

Jekyll also uses a templating language called Liquid. It might be good to check out the [Liquid documentation](https://shopify.github.io/liquid/)

- [Looping in Liquid](https://learn.cloudcannon.com/jekyll/looping-in-liquid/)

- Collections: I don't always want to add dates to my posts. In that case you might be looking for Collections. [Add collections to your site](https://jekyllrb.com/docs/collections/)

- Data files: If you don't want to work in multiple files, and have short lists and properties. You can use Data files (default placement is under _data)
[Add data files to your site](https://jekyllrb.com/docs/datafiles/)

- Drafts: If you've written a post, but aren't ready to publish it. You can put it in your drafts so that you can preview it later. [Drafts documentation](https://jekyllrb.com/docs/drafts/)