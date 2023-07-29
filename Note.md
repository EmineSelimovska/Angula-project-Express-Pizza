
1. Install development tools
2.Create Angular App
3.Add Header
- Generate component
- Add HTML
- Add CSS
4. List Foods
- Create Food model
- Create data.ts - add sample foods
- Add images to assets
- Create Food service
- Create Home components - add ts,html,css
5.Search
- Add method to Food service
- Add search route 
- Show search result in Home Components
- Generate search component - add to home components, add ts, add html, add css
6.Tags Bar
- Create tag model
- Add sample tags to data.ts
- Food service - add get all tags method, add get all foods by tag method
- Add tags route
- Show tag result in Home component
- Generate Tags Component - add to home component, add ts, add html, add css
7. Food Page
- Add method to food service
- Generate Food Page Components - add route, add ts, add html, add css
8. Cart Page
- Create CartItem Model
- Create Cart Model
- Generate Cart service
- Add to Cart Button in Food Page
- Generate Cart paage component
 -> add route
 -> add ts 
 -> add html
 -> add css
 9. Not Found!
 - Generate Comonent
 -> add ts
 -> add html
 -> add css
 - Add To Pages
 -> Home Page
 -> Food Page
 -> Cart Page
 10. Connect To Back-end
 - Create back-end folder
 - npm init
 - npm install typescript
 - Create tsconfig.json
 - Create .gitignore
 - Copy data.ts to backend/src
 - npm install express cors
 - Create server.ts - install @types , add Apis
 - npm install nodemon ts-node --save-dev
 - Add urs.ts to front-end
 - Add HttpClient module
 - Update food service 
 11. Login Page 
 - Generate Component
 ->  add to routes
 -> add ts 
 ->  add html - import reactive forms module
 -> add css
 - Add Login Api
  -> use json
  -> add jsonwebtoken
  -> test using postman
  - Generate User Service
  -> generate user model
  -> add user subject 
  -> add login method - add user Urls , generate IUserLogin interface, add ngx-toastr - import module, import BrowserAnimationsModule , add styles in angular.json
  - Add to Header
  -> add Local Storage methods
  -> add Logout Method
  -> add to header
  12. Make Components for Login Page
  - Input Container
  - Input Validation
  - Text Input
  - Default Button
  13. Connect Login MongoDB
  - Moving Apis into routers
  - Create MongoDb Atlas
  - Create .env file
  - Install 
  -> mongoose
  -> dotenv
  -> bcryptjs
  -> express-async-handler
  - Connect to MongoDB Atlas
  - Use MongoDB instead of data.ts in apis
  14. Register user 
  - Add Register api
  - Add Register service method
  - Add Register Link
  - Add Register Components
  15.Loading
  - Add Image
  - Add Components
  - Add Service
  - Add Interceptor
  16. Checkout Page
  - Create Order Model
  - Create Checkout Components - add router
  - Add User to User Service
  - Add Card to Cart Service
  - Create Order Items List Components
  - Adding Map to the checkout page
  - Add Leaflet npm package
  -> add @types/leaflet
  -> add css to angular.json
  - Add AddressLatLng to Order Model
  - Create Map component
   -> add to checkout page
   -> add ts 
   -> change app-map selector to map
   -> add html
   -> add css 
   - Add Auth Guard
   - Save Order 
   -> Add Order Model
   -> Add Order Status Enum
   -> Add Auth Middleware
   -> Add Order Router
   - add create API
   -> Add Order Urls to urls.ts
   -> Add Order Service
   - Add create Method
   -> Add Auth Interceptor
   17. Payment Page 
   - Generate Component
   - Add 'getOrderForCurrentUser' api
   - Add Order Service method 
   - Connect Component to Service
   - Make the map component 
   18. Adding Paypal
   - Generate Component
   -> add to payment page
   - Get Paypal clien Id
   - Add Paypal JS to Index.html
   - Set up Paypal button
   - Add Pay api to order router
   - Get Paypal sandbox account
  


   









