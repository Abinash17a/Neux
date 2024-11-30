/NEUX
├── /app                      # App directory for Next.js (App Router)
│   ├── /layout.tsx           # Layout file for consistent structure (e.g., Header/Footer)
│   ├── /page.tsx             # Home page (root level)
│   ├── /portfolio            # Portfolio page
│   │   └── page.tsx          # Portfolio listing
│   ├── /project
│   │   └── [id]/page.tsx     # Dynamic project details page
│   ├── /pricing              # Pricing tiers
│   │   └── page.tsx
│   ├── /contact              # Contact form
│   │   └── page.tsx
│   ├── /cart                 # Shopping cart (if applicable)
│   │   └── page.tsx
│   ├── /checkout             # Checkout flow
│   │   └── page.tsx
│   ├── /admin                # Admin Panel for managing site content
│   │   ├── page.tsx          # Admin dashboard landing page
│   │   ├── /projects         # Admin project management
│   │   │   ├── page.tsx      # List and manage projects
│   │   │   ├── create.tsx    # Add a new project
│   │   │   └── [id]/page.tsx # Edit an existing project
│   │   └── /users            # User management
│   │       └── page.tsx      # Manage users
│   ├── /api                  # API Routes for backend logic
│   │   ├── projects/route.ts # CRUD operations for projects
│   │   ├── users/route.ts    # User management
│   │   ├── orders/route.ts   # Order processing
│   │   └── contact/route.ts  # Handle form submissions
├── /components               # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   ├── ContactForm.tsx
│   ├── AdminDashboard.tsx    # Admin-specific dashboard component
│   └── Pagination.tsx        # Reusable pagination component
├── /public                   # Public assets
│   ├── /images               # Images for projects and site assets
│   └── favicon.ico           # Favicon for the site
├── /styles                   # Global and component-specific styles
│   ├── globals.css           # Global CSS
│   └── tailwind.css          # Tailwind imports (if using Tailwind CSS)
├── /utils                    # Helper functions
│   ├── auth.ts               # Authentication functions
│   ├── formatPrice.ts        # Price formatting (INR/USD)
│   └── validateForm.ts       # Form validation helper
├── .env                      # Environment variables
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind configuration (if applicable)
└── package.json              # Project metadata and dependencies

