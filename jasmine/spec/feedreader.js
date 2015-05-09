/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('feeds are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('feeds.urls are defined', function () {
            for (i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i]['url']).toBeDefined();
                expect(allFeeds[i]['url'].length).not.toBe(0);
            };
        });


        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('feeds.names are defined', function () {
            for (i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i]['name']).toBeDefined();
                expect(allFeeds[i]['name'].length).not.toBe(0);
            };
        });

    });

/* ------------------------------- */

    /* This is a new test suite named "The menu" */
    describe('The menu', function () {

        it('menu is hidden', function () {
            /* This is a test that ensures the menu element is
             * hidden by default. You'll have to analyze the HTML and
             * the CSS to determine how we're performing the
             * hiding/showing of the menu element.
             */
            expect($('body').attr('class')).toBe('menu-hidden');

        });

        it('menu visibility is changing', function () {
             /* This is a test that ensures the menu changes
              * visibility when the menu icon is clicked. This test
              * should have two expectations: does the menu display when
              * clicked and does it hide when clicked again.
              */
              var menuIcon = $('.menu-icon-link');
              menuIcon.click();
              expect($('body').attr('class')).not.toBe('menu-hidden');
              menuIcon.click();
              expect($('body').attr('class')).toBe('menu-hidden');
        });
    });

/* ------------------------------- */

    /* This is a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        it('loadFeed has data', function (done) {
            /* This is a test that ensures when the loadFeed
             * function is called and completes its work, there is at least
             * a single .entry element within the .feed container.
             * Remember, loadFeed() is asynchronous so this test wil require
             * the use of Jasmine's beforeEach and asynchronous done() function.
             */
            expect($(".entry").parents(".feed").length >= 1).toBe(true);
            done();
        });
    });

/* ------------------------------- */

    /* This is a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function () {
        // global placeholder for first feed content loaded
        var firstLoadHTML = $(".feed").html();

        beforeEach(function (done) {
            loadFeed(1, function () {
                done();
            });
        });

        it('loadFeed first content loaded', function (done) {
            /* This is a test that ensures our first data load was captured.
             * Remember, loadFeed() is asynchronous.
             */
            expect(firstLoadHTML).toBeDefined();
            done();
        });

        it('loadFeed content changed', function (done) {
            /* This is a test that ensures when a new feed is loaded
             * by the loadFeed function that the content actually changes.
             * Remember, loadFeed() is asynchronous.
             */
            expect(firstLoadHTML).not.toBe($(".feed").html());
            done();
        });
    });
});
