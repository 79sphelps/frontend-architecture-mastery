# Clean Architecture

## Run
npm install
npm run dev

## What to Observe

Compare:
- /legacy/BadUserProfile.tsx
- /ui/components/UserProfile.tsx

Notice:
- separation of concerns
- testability
- abstraction layers

## What This Demonstrates

-Separation of concerns
-Framework-independent domain
-Testable business logic
-Replaceable infrastructure

## Before vs After
Concern	      Legacy	  Clean
API	inside    component	isolated
Logic	        mixed	    layered
Testability	  poor	    high

## Key Architecture Principle

Dependencies point inward toward the domain.