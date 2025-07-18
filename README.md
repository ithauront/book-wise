# 📚 BookWise – A Social Reading App

BookWise is a fullstack application that works as a book-focused social network, where users can:

  *  Log in with GitHub or Google accounts

  *  Rate books and write short reviews

  *  Add books to their reading list

  *  Explore reviews from other users

  * Search books by title, author, or filter by category

The app is built entirely with Next.js, using PostgreSQL (Neon) and Prisma on the backend, and styled with Stitches on the frontend. It is fully deployed via Vercel.

## 🔗 Live Demo

👉 [book-wise](https://book-wise-tan.vercel.app)

## ✨ Features

 *   🛂 OAuth authentication with GitHub and Google (via NextAuth)

 *   📚 Book rating and short review system

 *   💾 Seeded database with books and categories

 *   📊 Book detail pages with average ratings and review list

 *   👤 User profile with public reading activity

 *   📦 Hosted with Vercel, database deployed on Neon
   
 *   🍪 Session handling with cookies using Nookies  

## 🛠️ Tech Stack

   * Next.js

   * TypeScript

   * Prisma ORM + Neon PostgreSQL

   * NextAuth for authentication

   * Stitches (CSS-in-JS)

   * Zod for schema validation

   * React Hook Form

   * Axios

   * Day.js

   * Phosphor Icons

   * Nookies


## 🧠 Concepts Applied

   * OAuth 2.0 integration with GitHub and Google

   * Server-side session management with NextAuth

   * Database seeding and relation modeling with Prisma

   * Dynamic routes with parameters for user profiles and book pages

   * Role-based logic (e.g. users can only rate a book once)

   * Monorepo fullstack logic: backend and frontend in a single Next.js repo

   * Form validation with Zod + React Hook Form


 ## 📚 What I Learned

   * How to configure OAuth apps for both Google and GitHub

   * Managing authentication tokens and session persistence with NextAuth

   * Using Prisma to model complex database relations

   * Seeding with Prisma

   * Setting up a production-ready PostgreSQL database using Neon

   * Deploying fullstack apps with Vercel

   * Building reusable UI components with Stitches

   * Handling form logic and validation cleanly with React Hook Form + Zod

   * Secure cookie management for server-side authentication with Nookies

## ▶️ Getting Started

To run BookWise locally:
1. Clone the repo and install dependencies:
```bash
git clone https://github.com/ithauront/book-wise.git
cd book-wise
pnpm install
```
2. Set up your environment variables:

Create a .env file at the root with the following variables:
```bash


# Connect to your own PostgreSQL database:
DATABASE_URL="postgresql://<your-user>:<password>@<host>/<db>?sslmode=require"

GOOGLE_CLIENT_ID=yourGoogleClientId
GOOGLE_CLIENT_SECRET=yourGoogleClientSecret

GITHUB_CLIENT_ID=yourGithubClientId
GITHUB_CLIENT_SECRET=yourGithubClientSecret

NEXTAUTH_SECRET=YourNextAuthSecret
NEXTAUTH_URL=http://localhost:3000
#if you are running in production instead of localhoast use the app address
```

#### 🛠 To use Google and GitHub login locally, you need to register an app on:

   * [Google Cloud Console](https://console.cloud.google.com/)

   * [GitHub Developer Settings](https://github.com/settings/developers)

Generate a secure NEXTAUTH_SECRET with:
```bash
openssl rand -base64 32
```

3. Run the DB migrations and seed:
```bash
npx prisma migrate dev --name init
npx prisma db seed
```

4. Start the dev server:
```bash
pnpm dev
```
## 🌱 Database Seeding

The project includes a custom seed script that populates your DB with:

  *  Books

  * Categories

  *  Sample ratings

When you run:
```bash
npx prisma db seed
```