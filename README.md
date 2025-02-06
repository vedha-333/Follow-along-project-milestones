# Project Milestones

## **Milestone 1: User Authentication**
1. Implemented user registration and login functionality.
2. Added product management features: add, update, and retrieve product data.
3. Managed customer orders efficiently.

## **Milestone 2: Setting Up Frontend and Backend Development Environment**
### **Frontend Setup**
1. Created a React app:
   ```sh
   npm create vite@latest frontend
   ```
2. Installed Node dependencies:
   ```sh
   npm install
   ```
3. Added Tailwind CSS for styling:
   ```sh
   npm install -D tailwindcss
   npx tailwindcss init
   ```
4. Configured Tailwind in `index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
5. Created a login page.

### **Backend Setup**
1. Initialized the backend project:
   ```sh
   npm init -y
   ```
2. Installed necessary dependencies:
   ```sh
   npm install express mongoose cors nodemon
   ```
3. Set up project structure inside `src` folder:
   ```sh
   mkdir config controllers middlewares routes
   touch index.js
   ```

## **Milestone 3: Connecting Backend and Database**
1. Created a MongoDB account and set up a database cluster.
2. Configured environment variables in a `.env` file.
3. Connected backend to the database via `database.js`.
4. Implemented response handling in `app.js`.
5. Added basic error handling in `errorHandler.js`.

## **Milestone 4: User Model and Middleware Implementation**
1. Created a `models` folder and added `User.model.js`.
2. Defined the User schema in `User.js`.
3. Installed `multer` for file handling:
   ```sh
   npm install multer
   ```
4. Configured Multer in `middlewares/multer.js`.
5. Created user controllers (`controllers/userController.js`) for CRUD operations.
6. Created user routes (`routes/userRoute.js`) for user-related requests.

## **Milestone 5: User Registration and Form Validation**
1. Created `Signup.js` file with fields for name, email, password, and file upload.
2. Used `useState` to manage form data and handle form submission.
3. Implemented form validation:
   - Created `validation.js` for checking empty fields and email format.
   - Used validation functions to display error messages.
4. Set up routing in `index.js` and added `/signup` and `/login` routes in `App.js`.

## **Milestone 6: JWT Authentication and Email Verification**
1. Installed `jsonwebtoken`:
   ```sh
   npm install jsonwebtoken
   ```
2. Implemented JWT authentication:
   - Generated a JWT token upon successful login.
   - Protected routes using JWT middleware.
3. Implemented email verification:
   - Generated a verification token.
   - Sent a verification email upon signup.
   - Verified the email token before activating user accounts.

## **Milestone 7: Signup and Login Routes**
1. **Signup Process:**
   - Extracted user data from request body.
   - Checked if the user already exists; prompted login if they do.
   - Hashed the password and stored user details securely.
2. **Login Process:**
   - Extracted user data from request body.
   - Verified user credentials and generated a JWT token.
   - Sent token as a cookie if authentication was successful.
   - Prompted signup if the user was not found.

## **Milestone 8: Frontend Updates**
1. Added a reusable `Card` component for displaying product details.
2. Implemented a responsive homepage layout using Flexbox.
3. Mapped dummy product data to `Card` component in `Home.jsx`.

## **Milestone 9: Product Management**
1. Created a product form with fields:
   - Title, Description, Stock, Price, Discounted Price, Category, Rating.
2. Enabled form submission for product data entry.

## **Milestone 10: Product Schema and Endpoints**
1. Defined product schema with fields:
   - Name, description, price, image URLs.
2. Created an API endpoint to add new product data:
   ```js
   app.post("/add-product", (req, res) => {
     const { name, description, price, imageUrl } = req.body;
     // Logic to store the product in the database
   });
   ```
3. Integrated Cloudinary and Multer for image uploads.

## **Milestone 11: Fetching Products from Database**
1. Created an endpoint to retrieve all products:
   ```js
   router.get("/get-products", async (req, res) => {
     try {
       const products = await ProductModel.find({});
       res.status(200).send({ success: true, message: "Products retrieved successfully", data: products });
     } catch (error) {
       res.status(500).send({ success: false, message: "Error retrieving products", error: error.message });
     }
   });
   ```
2. Integrated the `/get-products` route in `product.router.js`.
3. Imported and used product routes in `index.js`:
   ```js
   const productRoutes = require("./routes/product.router");
   app.use("/api/products", productRoutes);
   ```

## **Milestone 12: Implementing Product Routes**
1. Defined product routes for handling product-related requests.
2. Integrated product routes with `/api/products`.
3. Tested product routes to ensure proper functionality.
4. Updated documentation with API endpoint usage examples.
5. Deployed and verified the functionality in the staging environment.

## **Milestone 13: Implementing Update Option for Products**
1. Created an endpoint for updating existing product data.
2. Implemented update logic in product controller.
3. Verified functionality by making requests to update endpoints.
4. Created a frontend form for updating products.
5. Integrated the frontend form with the update endpoint.
6. Tested update functionality thoroughly.

## **Milestone 14: Implementing Delete Option for Products**
1. Created an endpoint for deleting products.
2. Implemented delete logic in product controller.
3. Verified functionality by making requests to delete endpoints.
4. Updated frontend logic to include a delete option.

---

This README provides a structured breakdown of the project milestones, ensuring clarity and easy reference for development progress.

