//when we just install parcel instead of adding parcel forlder in our node modules npm added lots of folder?
//its beacuse parcel has its own dependecies and that dependencies can have theire dependencis this is also known as transitive dependency
//so the parcel is transitively dependent on the all that dependencies
//every dependencies have theire own package.json thats why when we install just parcel it install all of its transitive dependencies
//to ignite our app using parcel use the command `npx parcel index.html`
//importance of parcel
//--dev build
//--local server
//--HMR - hot module replacement for this parcel uses file watching alogorithm - its written in c++
//--caching faster builds .parcel-cache
//--Image optimization
//--Minification of file
//--bundling
//--compressing
//--Consistent Hashing
//--Code splitting
//--Differential Bundling -- support older browser
//--Diagnostics
//--Error Handling
//--work with HTTPs
//--Tree shaking -- remove unused code for you
//--we use `npx parcel build index.html`

//------how to make browser compatible to specific version ?
//for this we can use browserlist npm library