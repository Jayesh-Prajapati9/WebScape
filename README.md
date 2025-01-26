# WebScape

WebScape is a web application designed to manage users, courses, and purchases. It provides authentication for users and admins, and allows admins to create and manage courses.

#### Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

#### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/webscape.git
    ```
2. Navigate to the project directory:
    ```sh
    cd webscape
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

#### Usage

1. Start the server:
    ```sh
    npm start
    ```
2. For development, use:
    ```sh
    npm run dev
    ```

The server will start on `http://localhost:8080`.

#### API Endpoints

##### User Routes

- `POST /user/signup` - User signup
- `POST /user/signin` - User signin
- `GET /user/purchases` - Get user purchases

##### Admin Routes

- `POST /admin/signup` - Admin signup
- `POST /admin/signin` - Admin signin
- `POST /admin/course` - Create a course
- `PUT /admin/course` - Update a course
- `GET /admin/course/bulk` - Get all courses created by the admin

##### Course Routes

- `GET /course/courses` - Get all courses
- `POST /course/purchase` - Purchase a course

#### License

This project is licensed under the MIT License - see the [LICENSE](http://_vscodecontentref_/0) file for details.
