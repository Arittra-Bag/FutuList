# FutuList - Futuristic List Management App(CONCEPT)

FutuList is a futuristic list management web application(concept) built using React, Typescript, and Material-UI. It allows users to manage lists of data, including personal information and department details.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Introduction

FutuList is a React-based web application that enables users to perform various tasks related to list management. The application has two main pages:

1. **First Page**: This page presents a form where users can enter their personal details, such as name, phone number, and email. The user's input is saved to local storage, and they are automatically redirected to the second page after successful submission.

2. **Second Page**: This page contains two components:
   - **Data Table**: This component fetches JSON data from an API (or uses hardcoded data) and displays it in a table format using the [mui/x/react-data-grid](https://mui.com/x/react-data-grid/) package.
   - **Department List**: This component displays a list of departments and their sub-departments. Users can expand and collapse sub-departments, and selecting a department automatically selects all its sub-departments.

## Features

- User-friendly and futuristic UI with Material-UI components.
- Persistent user data storage using local storage.
- Dynamic and interactive data table for displaying JSON data.
- Expandable and collapsible department list with selectable options.
- Proper data model/interface usage in Typescript.
- Deployment-ready codebase.

## Installation

To run FutuList locally on your machine, follow these steps:

1. Clone the repository to your local machine using Git:

```bash
git clone https://github.com/your-username/futulist.git
```

2. Navigate to the project directory:

```bash
cd futulist
```

3. Install the project dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

The application will be accessible at `http://localhost:3000/`.

## Usage

1. **First Page**: Upon accessing the application, you will be directed to the first page, where you can fill out the form with your personal information.

2. **Second Page**: After successful submission of the form, you will be redirected to the second page. Here, you will find two components:
   - The "Data Table" displays JSON data in tabular format.
   - The "Department List" shows a list of departments with expandable sub-departments. You can select departments and sub-departments, and the parent department will automatically be selected if all sub-departments are selected.

## Technologies

- React
- Typescript
- Material-UI
- [mui/x/react-data-grid](https://mui.com/x/react-data-grid/)

## Contributing

Contributions to FutuList are welcome! If you find any bugs or have suggestions for improvements, please feel free to open an issue or submit a pull request. Let's build FutuList together!

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as per the terms of the license.
