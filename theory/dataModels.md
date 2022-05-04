# Data models

---
## Programming styles
- declarative
- imperative

---
## Data models
- MVC  
Model View Controller

- FLUX  
Redux (MOBX)  
Smart/dumb components

## Technology recap

- HTML - visual implementation (email templates)
- css - admin panel, adds, ui-kit (bootstrap)
- SASS, LESS, Styled Components - full size project with custom UI
- React JS - intensive user interaction
- rollup (quick packagers) - Proof of Concept (PoC);
- create-react-app - (4-6 months) relatively small projects
- webpack - most flexible, need time to start, no limits
- typescript packager - instead webpack if you use typescript (npm i typescript -g) 
(tcs instead webpack) more then 3 developer quality over speed
- redux
  - either for total FLUX
  - or for data flow management
- redux-persist - convenient wrapper around localStorage 
(could be replaced with HOC and context or cookies) 
- thunk - for total FLUX, move all API requests to redux
- saga - for conditional chaining of async actions.
- StoryBook - project with big amount of components, visual compendium of all components
- Electron - browser without browser looks like standalone EXE app (access to file system)

## Testing

Testing purposes:
- Assure quality level
- Avoid regression (regression testing)

Testing levels:
- unit testing - summ(a, b) summ(1, 2) should be 3, 
<Link> should have style highlighted when hovered; 
(not actually rendered)
- Component/module testing - <cardDeleteModalWindow/> shold have two <button/>  
---------------------------------------------------------------------
- Integration testing - delete card modal click should delete card.
    - top-dow approach - fake components (stubs)
    - bottom-up approach - deleteCardFunction fake components drivers
    - big bang approach - all components real
------
- e2e end to end - real browser, pupeteer 
- manual - by real human

-TDD - test driven development
-User story driven developments

- BDD -
1. Bug Driven Development - 
2. Backend Driven Development - /cards/updateName/${cardID} 

# Data structures

-Stack - FILO firs in last out
- FIFO - AK_47
- heap - memory heap 
- array - 123456789 pus > shift let smth = new Array(20);
- set - array.filter < array -> set
- map - {({2, 3}): ({5})}
- weakMap - 
- object - 
- linked list - 
- doubly linked list - implement doubly linked list
- hash table - (a, b) => {}  (b, a) => {} (a, b ,c) => {} 
- three - 
- graph - 

