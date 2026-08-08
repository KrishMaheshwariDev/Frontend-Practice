# ⚛️ React + JavaScript + Tailwind CSS Practice

> **A backend developer voluntarily entering the frontend ecosystem.**
>
> Learning React, JavaScript, and Tailwind CSS by building things instead of watching 47-hour tutorials. 🫠

<br>

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge\&logo=react\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2025-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge\&logo=tailwindcss\&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)

</div>

<br>

---

## 📖 Table of Contents

* [About](#-about)
* [Learning Philosophy](#-learning-philosophy)
* [Tech Stack](#-tech-stack)
* [Project Structure](#-project-structure)
* [Assignments](#-assignments)

  * [Assignment 0 - JSX Warm-up](#assignment-0---jsx-warm-up)
  * [Assignment 1 - Developer Profile Card](#assignment-1---developer-profile-card)
  * [Assignment 2 - Reusable Profile Cards](#assignment-2---reusable-profile-cards)
  * [Assignment 3 - Props](#assignment-3---props)
  * [Assignment 4 - Counter and State](#assignment-4---counter-and-state)
* [Core Learning Points](#-core-learning-points)

  * [JSX](#jsx)
  * [Components](#components)
  * [Props](#props)
  * [State](#state)
  * [Re-rendering](#re-rendering)
  * [Tailwind CSS](#tailwind-css)
  * [Frontend Layout Thinking](#frontend-layout-thinking)
* [React Mental Model](#-react-mental-model)
* [Rules](#-rules-for-the-course)
* [Roadmap](#-roadmap)
* [Current Progress](#-current-progress)
* [Final Goal](#-final-goal)

---

# 🧭 About

This repository contains my practical exercises while learning:

* JavaScript
* React
* Tailwind CSS
* Frontend layout
* Component architecture
* UI state and interaction
* Responsive design
* API integration

I am approaching frontend from a **backend/software-engineering background**, so the focus is not simply on making interfaces look good.

The goal is to understand:

> **How frontend applications are structured, how data flows through them, how UI changes over time, and how to turn a design into maintainable code.**

The learning progression is:

```text
HTML / JSX
      ↓
Tailwind CSS
      ↓
Components
      ↓
Props
      ↓
State
      ↓
Events
      ↓
Lists
      ↓
Forms
      ↓
Conditional Rendering
      ↓
API Integration
      ↓
Routing
      ↓
Application Architecture
      ↓
Real Project
```

---

# 🧠 Learning Philosophy

The primary learning method is:

```text
┌──────────────┐
│   See a UI   │
└──────┬───────┘
       ↓
┌──────────────┐
│ Analyze it   │
└──────┬───────┘
       ↓
┌──────────────┐
│ Find boxes   │
│ & components │
└──────┬───────┘
       ↓
┌──────────────┐
│ Identify     │
│ changing data│
└──────┬───────┘
       ↓
┌──────────────┐
│ Implement    │
└──────┬───────┘
       ↓
┌──────────────┐
│ Debug        │
└──────┬───────┘
       ↓
┌──────────────┐
│ Review       │
└──────┬───────┘
       ↓
┌──────────────┐
│ Improve      │
└──────────────┘
```

The objective is to develop **frontend thinking**, rather than memorizing APIs.

For every UI, ask:

1. What is the page made of?
2. What is repeated?
3. What should become a component?
4. What data does the component need?
5. What changes when the user interacts?
6. Which state is required?
7. How should the layout behave on different screen sizes?

---

# 🛠️ Tech Stack

| Technology   | Purpose                       |
| ------------ | ----------------------------- |
| JavaScript   | Programming language          |
| React        | UI library                    |
| Vite         | Development and build tooling |
| Tailwind CSS | Utility-first styling         |
| VS Code      | Development environment       |
| Git          | Version control               |
| GitHub       | Repository hosting            |

### Current Environment

```text
React       19
Vite        8
Tailwind    4
JavaScript
```

---

# 📁 Project Structure

Current structure:

```text
frontend-practice/
│
├── public/
│
├── src/
│   ├── assets/
│   │   └── ...
│   │
│   ├── components/
│   │   └── Card.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

The structure will evolve as the applications become more complex.

---

# 🧪 Assignments

## Assignment 0 - JSX Warm-up

### 🎯 Objective

Understand the relationship between JavaScript functions and JSX.

### Built

```text
Hello Krish

Frontend Developer

• I Love C++
• I Love AI
• I Love React
```

### Learned

* JSX
* Functional components
* `return`
* JSX syntax
* HTML elements inside JSX
* `className`
* Semantic HTML

### Key Concept

A React component is fundamentally a JavaScript function that returns UI.

```jsx
function App() {
    return (
        <h1>Hello World</h1>
    );
}
```

### Status

**✅ Completed**

---

## Assignment 1 - Developer Profile Card

### 🎯 Objective

Build the first complete UI using Tailwind CSS.

### Built

A developer profile card containing:

* Profile image
* Name
* Description
* Statistics
* Follow button
* Hover effects
* Custom color palette

### Learned

#### Tailwind

* `flex`
* `flex-col`
* `items-center`
* `justify-center`
* `min-h-screen`
* `p-*`
* `m-*`
* `gap-*`
* `rounded-*`
* `shadow-*`
* `border`
* `bg-*`
* `text-*`
* `hover:*`
* `transition-*`
* `object-cover`

### Frontend Thinking

A UI can be mentally decomposed into nested containers:

```text
Screen
  ↓
Card
  ↓
Image
  ↓
Content
  ↓
Stats
  ↓
Button
```

Instead of thinking:

> "I need to build a profile card."

Think:

> "What boxes make up this interface?"

### Status

**✅ Completed**

---

## Assignment 2 - Reusable Profile Cards

### 🎯 Objective

Understand why React uses components.

### Built

Multiple developer profile cards using a reusable `Card` component.

```text
┌──────────┐   ┌──────────┐   ┌──────────┐
│  Krish   │   │   Aman   │   │  Sneha   │
│          │   │          │   │          │
│ Backend  │   │ Python   │   │ UI/UX    │
│ Developer│   │ Developer│   │ Designer │
└──────────┘   └──────────┘   └──────────┘
```

### Component Structure

```text
App
 │
 ├── Card
 ├── Card
 └── Card
```

### Learned

* Creating components
* Importing components
* Exporting components
* Component composition
* Reusability
* Separating page layout from component implementation

### Key Concept

`App.jsx` does not need to know how a card is internally constructed.

It only needs to use:

```jsx
<Card />
```

This creates separation between:

```text
Page Structure
      ↓
Component Implementation
```

### Status

**✅ Completed**

---

## Assignment 3 - Props

> Props were introduced naturally while completing Assignment 2, so the implementation effectively covered Assignment 2 + Assignment 3 together.

### 🎯 Objective

Learn how data flows into React components.

Instead of:

```jsx
<Card />
```

the component can receive data:

```jsx
<Card
    name="Krish Maheshwari"
    description="Backend Developer"
    followers={543}
    likes={708}
/>
```

Inside the component:

```jsx
function Card(props) {
    return (
        <h2>{props.name}</h2>
    );
}
```

### Learned

* Props
* Passing data
* Dynamic JSX
* Reusable components
* Component interfaces
* JavaScript objects

### Key Concept

Think of props as:

```text
Component Input
      ↓
   Component
      ↓
       UI
```

### Status

**✅ Completed**

---

## Assignment 4 - Counter + React State

### 🎯 Objective

Understand dynamic UI and React state.

### Built

An interactive counter with:

```text
┌──────────────────────┐
│       Counter        │
│                      │
│       Count: 0       │
│                      │
│   [-] [Reset] [+]    │
└──────────────────────┘
```

### Features

* Increment
* Decrement
* Reset
* Positive count color
* Negative count color
* Zero count color
* Minimum boundary
* Maximum boundary

### Main React Concept

```jsx
const [count, setCount] = useState(0);
```

### Learned

* `useState`
* State updates
* Event handlers
* `onClick`
* Conditional styling
* Dynamic UI
* Component re-rendering

### Key Concept

A state update follows this general flow:

```text
User Interaction
      ↓
Event Handler
      ↓
setState()
      ↓
State Changes
      ↓
Component Renders Again
      ↓
React Calculates UI Changes
      ↓
Browser UI Updates
```

### Status

**✅ Completed**

---

# 💡 Core Learning Points

## JSX

JSX allows JavaScript to describe UI.

```jsx
function App() {
    return (
        <div>
            <h1>Hello Krish</h1>
            <p>Learning React</p>
        </div>
    );
}
```

JSX looks like HTML, but it is transformed into JavaScript.

---

## Components

A React component is a reusable unit of UI.

```jsx
function Card() {
    return (
        <div>
            <h2>Profile</h2>
        </div>
    );
}
```

Components can be composed:

```text
App
 ├── Navbar
 ├── Hero
 ├── Card
 └── Footer
```

---

## Props

Props allow data to flow into components.

```jsx
<Card
    name="Krish"
    role="Backend Developer"
/>
```

Inside:

```jsx
function Card(props) {
    return (
        <h2>{props.name}</h2>
    );
}
```

Think:

```text
Props = Component Input
```

---

## State

State represents data that can change while the application is running.

```jsx
const [count, setCount] = useState(0);
```

Conceptually:

```text
State
  ↓
UI
```

When state changes:

```text
User Interaction
      ↓
setState()
      ↓
State Changes
      ↓
Component Renders Again
      ↓
React Updates UI
```

---

## Re-rendering

One of the most important concepts learned in Assignment 4:

> A state update causes React to render the component again.

For example:

```jsx
setCount(count + 1);
```

causes React to execute the component again using the new state.

Conceptually:

```text
count = 0

    ↓
User clicks +

    ↓
setCount(1)

    ↓
Counter renders again

    ↓
count = 1

    ↓
React updates the required UI
```

The component function may execute again, but React does not blindly recreate the entire browser DOM.

---

## React Strict Mode

During development, React Strict Mode intentionally performs additional checks.

This can make component rendering appear to happen twice.

The purpose is to expose code that is not resilient to React's mounting and rendering behavior.

This behavior is development-oriented and does not represent the production rendering model.

Important distinction:

```text
State Change
    ↓
Re-render
```

is normal React behavior.

Strict Mode's additional development checks are separate.

---

# 🎨 Tailwind CSS

Tailwind allows styling directly through utility classes.

Instead of:

```css
.card {
    display: flex;
    padding: 20px;
    border-radius: 12px;
}
```

we can write:

```jsx
<div className="flex p-5 rounded-xl">
```

### Utilities Learned So Far

| Utility          | Meaning                    |
| ---------------- | -------------------------- |
| `flex`           | Enables Flexbox            |
| `flex-col`       | Vertical Flexbox direction |
| `items-center`   | Cross-axis alignment       |
| `justify-center` | Main-axis alignment        |
| `gap-4`          | Space between children     |
| `p-4`            | Padding                    |
| `m-4`            | Margin                     |
| `w-full`         | Full width                 |
| `min-h-screen`   | Minimum viewport height    |
| `rounded-xl`     | Rounded corners            |
| `shadow-lg`      | Large shadow               |
| `border`         | Border                     |
| `bg-*`           | Background color           |
| `text-*`         | Text styling               |
| `hover:*`        | Hover state                |
| `transition-*`   | CSS transition             |
| `object-cover`   | Image fills its container  |

---

# 🧩 Frontend Layout Thinking

One of the main goals of this project is learning to mentally decompose interfaces.

A page can be viewed as a hierarchy:

```text
Page
│
├── Header
│
├── Main
│   │
│   ├── Section
│   │   ├── Card
│   │   ├── Card
│   │   └── Card
│   │
│   └── Section
│
└── Footer
```

When looking at a UI, ask:

> **What is repeated?**

Repeated UI usually becomes a component.

Then ask:

> **What data changes?**

Changing data usually becomes props or state.

---

# ⚛️ React Mental Model

Current mental model:

```text
                 ┌───────────────┐
                 │     State     │
                 └───────┬───────┘
                         │
                         ↓
                  ┌─────────────┐
                  │  Component  │
                  └──────┬──────┘
                         │
                         ↓
                        JSX
                         │
                         ↓
                  React renders
                         │
                         ↓
                    Browser UI
```

User interaction travels in the opposite direction:

```text
Browser
   ↓
User Interaction
   ↓
Event Handler
   ↓
State Update
   ↓
Component Re-render
   ↓
Updated UI
```

This loop is the foundation of interactive React applications.

---

# 📜 Rules for the Course

## 1. Build Before Asking for the Solution

Try to solve the assignment first.

Preferred workflow:

```text
My Attempt
    ↓
Error / Unexpected Behavior
    ↓
Ask Why
    ↓
Understand
    ↓
Fix
```

---

## 2. GitHub Copilot

Copilot autocomplete is allowed.

However:

> Generating an entire component using AI defeats the purpose of the exercise.

Using autocomplete for individual lines, unfamiliar syntax, or small pieces of code is fine.

The important part is that **I understand the code I submit**.

---

## 3. Don't Memorize Everything

Understanding is more important than memorization.

For example, instead of blindly memorizing:

```text
items-center
justify-center
```

understand:

```text
Flexbox
   ↓
Main Axis
Cross Axis
```

The class names become easier to remember naturally.

---

## 4. Don't Over-engineer

Early assignments should remain small.

We deliberately learn fundamentals before introducing:

* State management libraries
* UI component libraries
* Complex folder structures
* Custom hooks
* TypeScript
* Advanced patterns
* Performance optimization

---

## 5. Analyze Before Coding

Before implementing a UI:

```text
Look at Design
      ↓
Identify Containers
      ↓
Identify Repeated Elements
      ↓
Identify Data
      ↓
Identify Interactions
      ↓
Build Components
      ↓
Style With Tailwind
```

---

# 🗺️ Roadmap

```text
PHASE 1 ─ FOUNDATIONS
────────────────────────────

[✓] Assignment 0
    JSX Warm-up

[✓] Assignment 1
    Developer Profile Card

[✓] Assignment 2
    Reusable Components

[✓] Assignment 3
    Props

[✓] Assignment 4
    useState + Counter


PHASE 2 ─ INTERACTION
────────────────────────────

[ ] Assignment 5
    Todo List
    Arrays + map() + Events

[ ] Assignment 6
    Controlled Forms

[ ] Assignment 7
    Conditional Rendering

[ ] Assignment 8
    Search + Filtering


PHASE 3 ─ REACT APPLICATIONS
────────────────────────────

[ ] Assignment 9
    Multiple Components + Data Flow

[ ] Assignment 10
    React Router

[ ] Assignment 11
    Fetching API Data

[ ] Assignment 12
    Loading + Error States

[ ] Assignment 13
    Modal + Component Communication

[ ] Assignment 14
    Responsive Dashboard

[ ] Assignment 15
    Mini React Application


PHASE 4 ─ REAL PROJECT
────────────────────────────

              GET-MY-DOC

                  ↓

        Real React Application

                  ↓

       API + State + Routing

                  ↓

       Production Architecture
```

---

# 📊 Current Progress

### React

```text
JSX                  ██████████░░
Components           ██████████░░
Props                ██████████░░
State                ██████░░░░░░
Events               ██████░░░░░░
Lists                ░░░░░░░░░░░░
Forms                ░░░░░░░░░░░░
API                  ░░░░░░░░░░░░
Routing              ░░░░░░░░░░░░
Architecture         ░░░░░░░░░░░░
```

### JavaScript

```text
Variables            ██████████░░
Functions            █████████░░░
Objects              ███████░░░░░
Arrays               █████░░░░░░░
map / filter         ░░░░░░░░░░░░
Events               ██████░░░░░░
Async JS             ░░░░░░░░░░░░
Promises             ░░░░░░░░░░░░
```

### Tailwind

```text
Basic Utilities      ██████████░░
Flexbox              █████████░░░
Spacing              █████████░░░
Typography           ████████░░░░
Colors               █████████░░░
Hover States         ███████░░░░░
Responsive Design    ░░░░░░░░░░░░
Advanced Utilities   ░░░░░░░░░░░░
```

> Progress bars are qualitative and represent concepts covered, not formal proficiency measurements.

---

# 🎯 Final Goal

The goal is not:

> **"Learn React."**

The goal is:

> **Become capable of looking at a frontend interface and independently designing, structuring, implementing, debugging, and improving it.**

Eventually the workflow should become:

```text
                DESIGN
                  ↓
                ANALYZE
                  ↓
          COMPONENT HIERARCHY
                  ↓
             STATE MODEL
                  ↓
             DATA FLOW
                  ↓
                REACT
                  ↓
              TAILWIND
                  ↓
           API INTEGRATION
                  ↓
               TESTING
                  ↓
          PRODUCTION UI
```

And eventually:

```text
┌─────────────────────────────────────┐
│                                     │
│            GET-MY-DOC               │
│                                     │
│       The actual frontend           │
│                                     │
└─────────────────────────────────────┘
```

---

<div align="center">

### 🚧 Learning in Progress

**4 / 15 assignments completed**

`React` • `JavaScript` • `Tailwind CSS`

<br>

> Build it. Break it. Understand why it broke. Fix it. Repeat.

</div>
