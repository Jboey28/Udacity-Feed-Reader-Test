# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development." This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## What will I learn?

You will learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.


## How will this help my career?

Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.

Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.


## How It Works 
Load the index.Html file on any browser and the application and test begin to run


* Rss Feeds: This suite tests if allFeeds variable is defined, if all urls are defined and if all names are defined.

* The Menu: This suite checks if the menu is always hidden in the browser until the nav bar is clicked and also ensures it is closed once clicked again.

* Initail Entries: This suite checks to see if there is an entity within the feed container after the loadFeed function as been called and done it's work.

*  New Feed Selection: This test shows that after a new feed is loaded it actually changes from the old one.


# Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
