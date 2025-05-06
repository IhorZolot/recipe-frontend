[Recipe Frontend](https://nextjs.org)

This is the frontend for the Recipe App, built with Next.js (App Router) + TypeScript + Material UI.
It works together with the backend (Recipe Backend) and allows users to browse, search, and filter recipes by category, ingredient, and area.

## Getting Started

#### Install dependencies
```bash
npm install
```
#### Run development server
```bash
npm run dev
```
#### Build for production
```bash
npm run build
npm start
```
## Main Project Structure
```
/app
 ├── layout.tsx                ← main layout
 ├── page.tsx                  ← homepage
 ├── recipes/page.tsx          ← recipes list page
 └── recipe/[id]/page.tsx      ← single recipe detail page

/components
 ├── RecipeCard.tsx            ← recipe card component
 ├── RecipeFilters.tsx         ← filters (ingredient, area, category)
 ├── RecipePage.tsx            ← detailed recipe page
 └── ScrollToTopButton.tsx     ← scroll-to-top button
 └── RecipesList.tsx           ← all recipes page
 └── SidebarRelated.tsx        ← sidebar
```

### Features
```
✅ Search recipes by ingredient, area, or category
✅ View recipe details with description, category, area
✅ Clear All Filters button
✅ Loader while fetching data
✅ Scroll to top button
✅ Styling with Material UI and custom CSS
```
### API Endpoints (Backend)
```
/filters/ingredients  
/filters/areas  
/filters/categories  
/recipes  
/recipes/:id
```
### Tech Stack
```
Next.js (App Router)
TypeScript
Material UI
Axios
React Icons
```
### Possible Improvements
```
Add user authentication
Add favorites feature
Add comments or ratings
Fetch more detailed data from the API
```
[Ihor Zolotoverkh](https://www.linkedin.com/in/ihor-zolotoverkh)