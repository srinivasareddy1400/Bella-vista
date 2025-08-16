# Bella Vista Restaurant Website

## Overview

This is a modern restaurant website for "Bella Vista" built with a full-stack TypeScript architecture. The application features a React frontend with a sleek design showcasing the restaurant's menu, gallery, contact information, and reservation capabilities. The backend provides API endpoints for menu management and contact form submissions, with data persistence handled through an in-memory storage system that can be easily upgraded to a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Styling**: Tailwind CSS with custom design tokens for restaurant branding (terracotta, cream, rich brown color palette)
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints following conventional patterns
- **Data Layer**: Abstract storage interface with in-memory implementation (easily replaceable with database)
- **Validation**: Zod schemas shared between frontend and backend for consistent data validation

### Development Setup
- **Build System**: Vite for frontend bundling and hot module replacement
- **Development Server**: Custom Express middleware integration with Vite dev server
- **TypeScript**: Strict configuration with path mapping for clean imports
- **Code Organization**: Monorepo structure with shared types and schemas

### Data Management
- **Schema Definition**: Drizzle ORM with PostgreSQL dialect for future database integration
- **Type Safety**: Generated TypeScript types from database schemas using drizzle-zod
- **Current Storage**: In-memory storage with predefined menu items and contact submissions
- **Migration Ready**: Database configuration and migration setup prepared for PostgreSQL deployment

### UI/UX Design Decisions
- **Design System**: Restaurant-themed color palette with warm, inviting aesthetics
- **Typography**: Custom font stack with Playfair Display for headings and Inter for body text
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Accessibility**: Built on Radix UI primitives ensuring WCAG compliance
- **Performance**: Optimized images, lazy loading, and efficient re-renders

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router alternative (Wouter)
- **Build Tools**: Vite, TypeScript, ESBuild for production builds
- **Backend**: Express.js, Node.js HTTP server

### Database & ORM
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL support
- **Neon Database**: Serverless PostgreSQL provider (@neondatabase/serverless)
- **Session Management**: connect-pg-simple for PostgreSQL session storage

### UI Component Libraries
- **Radix UI**: Complete set of headless UI primitives (@radix-ui/react-*)
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Utility Libraries**: clsx, tailwind-merge for conditional styling
- **Icons**: Lucide React for consistent iconography

### Form & Data Handling
- **Form Management**: React Hook Form with Hookform Resolvers
- **Validation**: Zod for runtime type checking and validation
- **API Client**: TanStack Query for server state management
- **Date Handling**: date-fns for date manipulation

### Development & Deployment
- **Replit Integration**: Custom Vite plugins for Replit development environment
- **Error Handling**: Runtime error overlay for development
- **Code Cartographer**: Replit's code exploration tool integration

### Additional Features
- **Image Carousel**: Embla Carousel for gallery functionality
- **Command Palette**: CMDK for search and navigation
- **Animations**: Class Variance Authority for component variants
- **Toast Notifications**: Custom toast system for user feedback