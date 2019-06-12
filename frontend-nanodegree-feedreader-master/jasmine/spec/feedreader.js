/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //This is to test if all urls are defined and urls length not to be zero
        it('url are defined', function(){
            for(let feed of allFeeds){
                expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toBe(0);
            }
        });

        //This is to test if all names are defined and names length not to be zero
        it('names are defined', function(){
            for(let feed of allFeeds){
            expect(feed.name).toBeDefined();
            expect(feed.name.length).not.toBe(0);
            }
        });
    });


    describe('The menu', function(){


        //Test to check if menu is hidden by default
        it('menu hidden', function(){
     
       let isHidden = document.body.classList.contains('menu-hidden');
       expect(isHidden).toBe(true);

        });

        //Test to show if the menu showes when clicked and closes when clicked again
         it('menu is clicked', function(){
        let navBar = document.querySelector('a.menu-icon-link');
        navBar.click();
        expect(document.body.classList.contains('menu-hidden')).toBe(false);
        navBar.click();
        expect(document.body.classList.contains('menu-hidden')).toBe(true);
         });
    });
    
    describe('Initial Entries', function(){
    
        //Test to show that there is an etity within the feed container after loadFeed function is called 
        beforeEach(function(done){
            loadFeed(1, done);
        });
        
      it('has entries', function(){
       let feedContainer = document.querySelector('.feed .entry');
       expect(feedContainer.children.length).toBeGreaterThan(0);
      });


    });

  describe('New feed Selection', function(){

        //Test shows that when a new feed is loaded it actually changes
        let firstFeed = document.querySelector('div.feed').innerHTML
        let secondFeed = document.querySelector('div.feed').innerHTML
        
        beforeEach(function(done){
            loadFeed(0, function(){
                firstFeed;
                loadFeed(1, function(){
                    secondFeed;
                });
            });
        });

        it('checks new feed', function(){
            expect(firstFeed).not.toBe(secondFeed);
        });

    });      
}());
