# User Management Table Application

This is a React application that displays a user management table with advanced filtering functionality. The application fetches user data from a mock API and allows users to filter by name, username, email, and phone. It uses Redux Toolkit for state management and TypeScript for type safety.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Application Structure](#application-structure)
- [API](#api)
- [Challenges Faced](#challenges-faced)
- [Potential Future Improvements](#potential-future-improvements)
- [Deployment](#deployment)
- [Acknowledgements](#acknowledgements)

## Features

- **User Management Table**: Displays a table of users with columns for name, username, email, and phone.
- **Advanced Filtering**: Real-time filtering based on user input for any of the displayed fields (name, username, email, phone).
- **State Management**: Uses Redux Toolkit for streamlined and efficient state management.
- **Type Safety**: Comprehensive use of TypeScript to ensure type safety and reduce runtime errors.
- **User-Friendly Design**: A clean, intuitive user interface that is easy to use.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Redux Toolkit**: State management solution for managing application state.
- **TypeScript**: Superset of JavaScript for static typing.
- **Axios**: Library for making HTTP requests.
- **Tailwind CSS**: Custom styles for the application.

## Getting Started

To get a local copy of the application up and running, follow these steps.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v14 or above)
- [npm](https://www.npmjs.com/get-npm) (v6 or above)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/sika-007/user-management-ui.git
    cd user-management-ui
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:5173` to view the application.

### Building the Application

To build the application for production:

```bash
npm run build
```
This will create an optimized build in the build directory.

## Usage
- The user table displays user information fetched from a mock API.
- Use the input fields above each column to filter the table dynamically in real-time.
- The application automatically updates the displayed results based on the input values.

## Application Structure
The project follows a standard React-Redux structure:
- `src/components`: Contains the React components (e.g., UserTable.tsx).
- `src/features/users`: Contains Redux slices and async thunks for managing user data.
- `src/features/store.ts`: Configures the Redux store.
- `src/App.tsx`: Main application component.
- `src/index.tsx`: Entry point that sets up the Redux provider.

## API
The application uses the JSONPlaceholder API to fetch user data:
- Endpoint: https://jsonplaceholder.typicode.com/users
- Method: GET

## Challenges Faced
- Handling Special Characters: Implemented a normalization function to handle special characters in names, usernames, and phone numbers to ensure proper filtering.
- Type Safety with TypeScript: Ensured all components and Redux slices are fully typed, which required careful handling of different data types.

## Potential Future Improvements
- Pagination: Implement pagination for handling large datasets.
- Sorting: Add column sorting functionality.

## Deployment
The application is deployed on [Netlify](https://app.netlify.com/). You can view the live version [here](https://user-managment-ui.netlify.app/).

## Acknowledgements
- JSONPlaceholder for providing the mock API.
- Redux Toolkit for state management.
- React for building the user interface.
