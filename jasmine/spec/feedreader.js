/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against application.
 */

$(function() {
    /* New test suite */
    describe('RSS Feeds', function() {
        /* A test to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url defined and not empty', function() {
            for (var i =0; i < allFeeds.length; i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            }
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name defined and not empty', function() {
            for (var i =0; i < allFeeds.length; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            }
        });
    });


    /* New test suite */
    describe('The menu', function() {

        /* A test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('menu element is hidden by default', function() {
            expect($('body').hasClass("menu-hidden")).toBeTruthy();
        });

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('menu changes visibility on click', function() {
            $('.menu-icon-link').trigger("click");
            expect($('body').hasClass("menu-hidden")).toBeFalsy();
            $('.menu-icon-link').trigger("click");
            expect($('body').hasClass("menu-hidden")).toBeTruthy();
        });

    });

    /* New test suite */
    describe('Initial Entries', function() {

        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done){
            loadFeed(0, done);
        });

        it('has at least one .entry element within the .feed container.', function(){
            expect($('.feed .entry').length).not.toBe(0);
        });

    });


    /* New test suite */
    describe('New Feed Selection', function() {

        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var content;

        beforeEach(function(done){
            loadFeed(0, function() {
                content = $('.feed').html();
                done();
            });
        });

        it('content changes in feed', function(done){
            loadFeed(1, function() {
                expect($('.feed').html()).not.toEqual(content);
                done();
            });
        });

    });
});
