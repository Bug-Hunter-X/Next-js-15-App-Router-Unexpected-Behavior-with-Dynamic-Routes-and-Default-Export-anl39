# Next.js 15 App Router Unexpected Behavior with Dynamic Routes and Default Export

This repository demonstrates an unexpected behavior in the Next.js 15 App Router when using dynamic routes and a default export in a page component.

## Bug Description

When using a dynamic route like `pages/[...slug]/page.js` with a default export, Next.js might render the page even if the `slug` parameter is not present in the URL, leading to unexpected rendering behavior.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install` to install the necessary dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to `/` - it will render the default home page correctly.
5. Navigate to `/some-dynamic-route` - it should display "Dynamic route content", instead, it renders the page component even without slug parameters. 

## Expected Behavior

The page component should only render if a valid `slug` parameter is passed to the dynamic route.

## Actual Behavior

The page component renders even without the `slug` parameters which is unexpected.

## Solution

The solution involves changing the default export to a named export and using a layout to handle the dynamic route logic. This ensures the default export is used only when appropriate.
