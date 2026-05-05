# Fortnum & Mason E-commerce Test Plan

## Application Overview

This test plan covers the Fortnum & Mason e-commerce website, a luxury online retailer specializing in hampers, food, gifts, and experiences. The site features product browsing, shopping cart functionality, user accounts, and various delivery options. Tests focus on critical user journeys including browsing, purchasing, and account management.

## Test Scenarios

### 1. Homepage Navigation

**Seed:** `tests/seed.spec.ts`

#### 1.1. Verify homepage loads correctly

**File:** `tests/homepage-navigation.spec.ts`

**Steps:**
  1. Navigate to https://www.fortnumandmason.com/
    - expect: Homepage displays with main banner, navigation menu, and featured products
    - expect: Page title is 'Hampers, Extraordinary Food & Joy-Giving Gifts'
    - expect: Header contains logo, search bar, login button, wishlist, and shopping basket
  2. Hover over main navigation items (Hampers, Gifts, Food Hall, etc.)
    - expect: Navigation menu expands to show subcategories when hovered
    - expect: Links in menu navigate to correct category pages
  3. Click on featured product links and promotional banners
    - expect: Featured product links navigate to correct product pages
    - expect: Hero images and promotional banners display properly

#### 1.2. Test responsive design on homepage

**File:** `tests/homepage-navigation.spec.ts`

**Steps:**
  1. Resize browser window to mobile dimensions
    - expect: Layout adjusts appropriately for mobile view
    - expect: Navigation menu collapses into hamburger menu
  2. Test touch interactions on mobile view
    - expect: All interactive elements remain accessible and functional

#### 1.3. Verify accessibility features

**File:** `tests/homepage-navigation.spec.ts`

**Steps:**
  1. Use keyboard navigation to traverse the page
    - expect: Skip links are present and functional
    - expect: All images have alt text
    - expect: Color contrast meets accessibility standards
  2. Test with screen reader tools
    - expect: Screen reader can navigate and read content properly

#### 1.4. Test newsletter signup

**File:** `tests/homepage-navigation.spec.ts`

**Steps:**
  1. Fill out newsletter signup form with valid data
    - expect: Email input field accepts valid email addresses
    - expect: Country selection dropdown works
    - expect: Sign up button becomes enabled after filling required fields
  2. Submit the newsletter signup form
    - expect: Success message displays or user is redirected appropriately

#### 1.5. Test invalid newsletter signup

**File:** `tests/homepage-navigation.spec.ts`

**Steps:**
  1. Enter invalid email address and attempt to submit
    - expect: Error message displays for invalid email format
  2. Leave required fields empty and attempt to submit
    - expect: Form validation prevents submission with missing required fields

### 2. Product Browsing and Selection

**Seed:** `tests/seed.spec.ts`

#### 2.1. Browse product categories

**File:** `tests/product-browsing.spec.ts`

**Steps:**
  1. Navigate to a category page (e.g., Hampers)
    - expect: Category page loads with product grid
    - expect: Filters and sorting options are available
  2. Scroll through product listings
    - expect: Products display with images, names, and prices
    - expect: Pagination works correctly for multiple pages
  3. Apply filters (price range, occasion, etc.)
    - expect: Filter options narrow down product results appropriately

#### 2.2. View product details

**File:** `tests/product-browsing.spec.ts`

**Steps:**
  1. Click on a product from category page
    - expect: Product page displays with high-quality images, description, and price
    - expect: Image gallery allows viewing multiple product photos
  2. Interact with expandable sections and quantity controls
    - expect: Product information sections expand/collapse properly
    - expect: Quantity selector works with increase/decrease buttons
  3. Scroll to 'Compare Similar Products' section
    - expect: Similar products section displays relevant alternatives

#### 2.3. Test product image gallery

**File:** `tests/product-browsing.spec.ts`

**Steps:**
  1. Click on different product image thumbnails
    - expect: Main product image changes when thumbnails are clicked
    - expect: Zoom functionality works on product images
  2. Test image gallery on different screen sizes
    - expect: Image gallery is responsive and works on mobile devices

#### 2.4. Test product availability and restrictions

**File:** `tests/product-browsing.spec.ts`

**Steps:**
  1. View product as user from restricted country (Morocco)
    - expect: Delivery restriction message displays for unsupported countries
    - expect: Alternative product suggestions are provided
  2. Check stock indicators on various products
    - expect: Stock status is clearly indicated for products

#### 2.5. Test product search functionality

**File:** `tests/product-browsing.spec.ts`

**Steps:**
  1. Enter search terms in search bar and submit
    - expect: Search results page displays relevant products
    - expect: Search suggestions appear as user types
  2. Apply filters to search results
    - expect: Search results can be filtered and sorted
  3. Search for non-existent products
    - expect: No results message displays appropriately for invalid searches

### 3. Shopping Cart Functionality

**Seed:** `tests/seed.spec.ts`

#### 3.1. Add product to cart

**File:** `tests/shopping-cart.spec.ts`

**Steps:**
  1. Click 'Add to Bag' on a product page
    - expect: Product is added to cart successfully
    - expect: Cart icon updates with item count
    - expect: Success message or notification appears
  2. View cart contents via cart icon or dedicated cart page
    - expect: Cart summary displays correct product, quantity, and price

#### 3.2. Modify cart contents

**File:** `tests/shopping-cart.spec.ts`

**Steps:**
  1. Change quantity of items in cart
    - expect: Quantity updates correctly in cart
    - expect: Subtotal recalculates appropriately
  2. Remove item from cart
    - expect: Item is removed from cart
    - expect: Cart updates to reflect removal
  3. Refresh page and verify cart contents remain
    - expect: Cart persists changes across page refreshes

#### 3.3. Test cart with multiple items

**File:** `tests/shopping-cart.spec.ts`

**Steps:**
  1. Add multiple different products to cart
    - expect: All items display correctly in cart
    - expect: Total price calculates sum of all items
  2. Attempt to add quantities beyond reasonable limits
    - expect: Cart handles quantity limits appropriately

#### 3.4. Test cart persistence

**File:** `tests/shopping-cart.spec.ts`

**Steps:**
  1. Add items to cart, navigate to other pages, return to cart
    - expect: Cart contents are saved when user navigates away and returns
  2. Add items, close browser, reopen and check cart
    - expect: Cart contents persist across browser sessions

#### 3.5. Test cart with unavailable items

**File:** `tests/shopping-cart.spec.ts`

**Steps:**
  1. Add items to cart that become unavailable
    - expect: Unavailable items are clearly marked in cart
    - expect: User is prompted to remove or replace unavailable items
  2. Attempt to proceed to checkout with unavailable items
    - expect: Checkout is prevented with unavailable items in cart

### 4. Checkout Process

**Seed:** `tests/seed.spec.ts`

#### 4.1. Guest checkout flow

**File:** `tests/checkout-process.spec.ts`

**Steps:**
  1. Proceed to checkout as guest user
    - expect: Checkout page loads with cart summary
    - expect: Guest checkout option is available
  2. Fill out customer information form
    - expect: Billing and shipping forms display correctly
    - expect: Form validation works for required fields
  3. Enter payment information
    - expect: Payment options display (credit card, etc.)
    - expect: Payment form validates card details
  4. Review order and submit
    - expect: Order summary shows all items, taxes, and total
    - expect: Order can be placed successfully

#### 4.2. Registered user checkout

**File:** `tests/checkout-process.spec.ts`

**Steps:**
  1. Start checkout process and login with existing account
    - expect: Login prompt appears during checkout
    - expect: Existing account details are pre-filled
  2. Select saved shipping and billing information
    - expect: Saved addresses and payment methods are available
  3. Complete checkout with saved payment method
    - expect: Order completes successfully with saved details

#### 4.3. Test delivery options

**File:** `tests/checkout-process.spec.ts`

**Steps:**
  1. Select different delivery methods during checkout
    - expect: Various delivery options are available
    - expect: Delivery costs are calculated correctly
  2. Choose delivery date and time if applicable
    - expect: Delivery date selection works
    - expect: Unavailable dates are clearly marked

#### 4.4. Test checkout validation

**File:** `tests/checkout-process.spec.ts`

**Steps:**
  1. Submit checkout form with missing or invalid information
    - expect: Error messages display for invalid form data
    - expect: Form prevents submission with validation errors
  2. Attempt checkout with invalid payment details
    - expect: Payment errors are handled gracefully
    - expect: User is guided to correct payment issues

#### 4.5. Test order confirmation

**File:** `tests/checkout-process.spec.ts`

**Steps:**
  1. Complete a successful order
    - expect: Order confirmation page displays with order details
    - expect: Order number is provided
    - expect: Email confirmation is sent
  2. Verify all order information on confirmation page
    - expect: Order details are accurate and complete

#### 4.6. Test checkout with promotions

**File:** `tests/checkout-process.spec.ts`

**Steps:**
  1. Apply valid discount code during checkout
    - expect: Discount codes are applied correctly
    - expect: Promotional pricing reflects in order total
  2. Attempt to apply invalid or expired discount codes
    - expect: Invalid codes show appropriate error messages

#### 4.7. Test international checkout

**File:** `tests/checkout-process.spec.ts`

**Steps:**
  1. Change delivery country to international destination
    - expect: International shipping options are available
    - expect: Customs and duty information is provided
  2. Complete checkout for international order
    - expect: Currency conversion works correctly
    - expect: International payment methods are supported

### 5. User Account Management

**Seed:** `tests/seed.spec.ts`

#### 5.1. User registration

**File:** `tests/user-account.spec.ts`

**Steps:**
  1. Navigate to account creation page
    - expect: Registration form displays with required fields
    - expect: Password strength indicator works
  2. Fill out and submit registration form
    - expect: Account is created successfully
    - expect: Confirmation email is sent
    - expect: User is logged in automatically
  3. Attempt registration with invalid information
    - expect: Error messages for invalid data (existing email, weak password)

#### 5.2. User login

**File:** `tests/user-account.spec.ts`

**Steps:**
  1. Login with valid username and password
    - expect: Login form accepts valid credentials
    - expect: User is redirected to account dashboard
  2. Attempt login with incorrect details
    - expect: Error message for invalid credentials
    - expect: Password reset option is available
  3. Login with 'remember me' checked
    - expect: 'Remember me' functionality works
    - expect: Login persists across sessions

#### 5.3. Password reset

**File:** `tests/user-account.spec.ts`

**Steps:**
  1. Initiate password reset process
    - expect: Password reset email is sent
    - expect: Reset link works correctly
  2. Complete password reset with valid new password
    - expect: New password is accepted
    - expect: User can login with new password

#### 5.4. Account profile management

**File:** `tests/user-account.spec.ts`

**Steps:**
  1. Update account details (name, email, etc.)
    - expect: User can view and edit profile information
    - expect: Changes are saved successfully
  2. Manage saved addresses
    - expect: Address book allows adding/editing/removing addresses
  3. View order history
    - expect: Order history displays past orders
    - expect: Order details are accessible

#### 5.5. Wishlist functionality

**File:** `tests/user-account.spec.ts`

**Steps:**
  1. Add products to wishlist from product pages
    - expect: Products can be added to wishlist
    - expect: Wishlist icon updates
  2. View and manage wishlist
    - expect: Wishlist page displays all saved items
    - expect: Items can be removed from wishlist
  3. Add items, logout, login, check wishlist
    - expect: Wishlist persists across sessions

#### 5.6. Membership benefits

**File:** `tests/user-account.spec.ts`

**Steps:**
  1. Sign up for membership
    - expect: Membership signup process works
    - expect: Benefits are explained clearly
  2. Access member benefits as logged-in user
    - expect: Member-exclusive content is accessible
    - expect: Discounts are applied automatically

### 6. Search Functionality

**Seed:** `tests/seed.spec.ts`

#### 6.1. Basic search

**File:** `tests/search-functionality.spec.ts`

**Steps:**
  1. Enter product name in search bar and submit
    - expect: Search returns relevant results
    - expect: Results page shows number of matches
  2. Search with different cases and partial terms
    - expect: Search is case-insensitive
    - expect: Partial matches are found

#### 6.2. Advanced search features

**File:** `tests/search-functionality.spec.ts`

**Steps:**
  1. Type in search bar and observe suggestions
    - expect: Autocomplete suggestions appear
    - expect: Suggestions are relevant to typed text
  2. Apply filters to search results
    - expect: Search results can be filtered by category, price, etc.

#### 6.3. Search with no results

**File:** `tests/search-functionality.spec.ts`

**Steps:**
  1. Search for non-existent or misspelled terms
    - expect: 'No results' message displays
    - expect: Suggestions for alternative searches are provided

#### 6.4. Search from different pages

**File:** `tests/search-functionality.spec.ts`

**Steps:**
  1. Perform searches from homepage, category pages, and product pages
    - expect: Search works from all pages
    - expect: Results are consistent regardless of starting page

### 7. Mobile Responsiveness

**Seed:** `tests/seed.spec.ts`

#### 7.1. Mobile navigation

**File:** `tests/mobile-responsiveness.spec.ts`

**Steps:**
  1. View site on mobile device or emulator
    - expect: Hamburger menu appears on mobile
    - expect: Menu expands/collapses properly
  2. Navigate through menu on mobile
    - expect: All navigation options are accessible via mobile menu

#### 7.2. Mobile product browsing

**File:** `tests/mobile-responsiveness.spec.ts`

**Steps:**
  1. Browse products on mobile view
    - expect: Product grid adapts to mobile layout
    - expect: Touch scrolling works smoothly
  2. View product details on mobile
    - expect: Product images and details display properly on small screens

#### 7.3. Mobile checkout

**File:** `tests/mobile-responsiveness.spec.ts`

**Steps:**
  1. Complete checkout process on mobile device
    - expect: Checkout forms are mobile-friendly
    - expect: All form fields are accessible on mobile
  2. Enter payment information on mobile
    - expect: Payment forms work on mobile browsers

#### 7.4. Touch interactions

**File:** `tests/mobile-responsiveness.spec.ts`

**Steps:**
  1. Test touch interactions throughout the site
    - expect: All interactive elements respond to touch
    - expect: Swipe gestures work where applicable
  2. Verify layout fits mobile screen width
    - expect: No horizontal scrolling required on mobile

### 8. Error Handling and Edge Cases

**Seed:** `tests/seed.spec.ts`

#### 8.1. Network connectivity issues

**File:** `tests/error-handling.spec.ts`

**Steps:**
  1. Simulate network interruptions during various operations
    - expect: Graceful error messages for network failures
    - expect: Site recovers when connectivity returns

#### 8.2. Invalid URLs and 404 pages

**File:** `tests/error-handling.spec.ts`

**Steps:**
  1. Navigate to invalid URLs
    - expect: Custom 404 page displays
    - expect: Navigation back to valid pages works
  2. Test links on 404 page
    - expect: 404 page provides helpful navigation options

#### 8.3. Session timeout

**File:** `tests/error-handling.spec.ts`

**Steps:**
  1. Allow session to expire during active use
    - expect: User is prompted to login when session expires
    - expect: Cart contents are preserved where possible
  2. Access account pages after session expiry
    - expect: Secure pages redirect to login appropriately

#### 8.4. Browser compatibility

**File:** `tests/error-handling.spec.ts`

**Steps:**
  1. Test on different browsers (Chrome, Firefox, Safari, Edge)
    - expect: Site functions correctly across supported browsers
    - expect: Fallbacks work for unsupported features

#### 8.5. Large data scenarios

**File:** `tests/error-handling.spec.ts`

**Steps:**
  1. Test with maximum allowed cart items and large search results
    - expect: Site handles large carts without performance issues
    - expect: Large product catalogs load efficiently

#### 8.6. International and localization

**File:** `tests/error-handling.spec.ts`

**Steps:**
  1. Change country and currency settings
    - expect: Currency and language switch correctly
    - expect: Localized content displays appropriately
  2. Verify formatting in different locales
    - expect: Date formats and number formats adapt to locale
