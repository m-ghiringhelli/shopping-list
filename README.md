O) Create files
    A) signin folder
        1) index.html   CHECK
        3) signin.js    CHECK
    B) home (signup) folder CHECK
        1) index.html   CHECK
        2) app.js   CHECK
    C) list folder
        1) index.html   CHECK
        2) list.js  CHECK
        3) list.css CHECK
    C) styles
        1) reset.css    CHECK
        2) home.css CHECK
        3) styles.css   CHECK
    D)  tests   CHECK
    E) link files together correctly
I) Create Database
    A) Add table    CHECK
        1) user_id  CHECK
            a) default: uid()   CHECK
        2) item CHECK
        3) department
        4) bought status (boolean)  CHECK
    B) add RLS  CHECK
        1) users can only access their rows CHECK
        2) uid() = user_id? CHECK
    C) add to html/js
        1) add key  CHECK
        2) add url  CHECK
        3) add in html  CHECK
    D) Okay I need the bare minimum of html to see what's going on and getting this functioning
        1) signup (home)
            a) form CHECK
            b) button   CHECK
            c) eventlisteners
            d) let's verify signup works    CHECK
            e) and redirecting to signin
            f) redirect to list on sign up
        2) signin
            a) form CHECK
            b) button   CHECK
            c) eventlisteners   CHECK
            d) let's verify login works CHECK
            e) and redirecting to list  CHECK
        3) list (main)
            a) add item form    CHECK
            b) get list CHECK
            c) render list  CHECK
            d) append list  CHECK
II) Fetch utils
    A) fetch all items                      R   CHECK
    B) Create item (adds to database)       C
    C) delete all items                     D
    D) bought item                          U
        1) change value to true
III) Render database
    A) Renderitem   CHECK
        1) create sample html   CHECK
        2) grab object from database to copy to test    CHECK
        3) TDD  CHECK
    B) Append to DOM    CHECK
        1) render items CHECK
IV) Add item
    A) Create item - II)B
    B) Rerender to display new database
        1) reset
        2) display again
V) Checkoff item
    A) Add event listener to items
    B) Add class to items
VI) Delete items
    A) Delete items function
    B) Rerender on DOM

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1. **For each HTML element ask: Why do I need this?**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1. **Think about how to validate each of your features according to a Definition of Done**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
