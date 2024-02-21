# Zeus app

This is the web application for the Zeus project. It is built using Next.js and Tailwind CSS.

## Prerequisites

- Node.js version 18 or higher
- Visual Studio Code (VS Code) or any other preferred code editor
- Git

## Steps to Install Node.js

1. Go to [https://nodejs.org/en](https://nodejs.org/en) in your web browser.

2. Download the recommended version of Node.js and run the installer. The installer will guide you through the installation process and install all the necessary dependencies.

3. After the installation is complete, open the command prompt and run the following command:
   `node -v`

   This command will display the installed version of Node.js.
   If the displayed version is lower than 18, go to step 2.
   If the displayed version is higher than 18, go to step 4.

4. If the displayed version is higher than 18, you can skip this step.
   If the displayed version is lower than 18, go to [https://nodejs.org/en](https://nodejs.org/en) in your web browser. Download the recommended version of Node.js and run the installer. The installer will guide you through the installation process and install all the necessary dependencies.

5. After the installation is complete, open the command prompt again and run the following command:
   `node -v`

   This time, you should see the latest installed version of Node.js.

6. If you have any issues with the installation, please refer to the official documentation for Node.js.

## Steps to Install Visual Studio Code

1. Go to [https://code.visualstudio.com/](https://code.visualstudio.com/) in your web browser.

2. Download the recommended version of Visual Studio Code and run the installer. The installer will guide you through the installation process and install all the necessary dependencies.

3. After the installation is complete, open the Visual Studio Code application and you should see the welcome screen.

4. If you have any issues with the installation, please refer to the official documentation for Visual Studio Code.

## Steps to Install Git

1. Go to [https://git-scm.com/downloads](https://git-scm.com/downloads) in your web browser. Download the recommended version of Git and run the installer. The installer will guide you through the installation process and install all the necessary dependencies.

2. After the installation is complete, open the command prompt and run the following command:
   `git --version`

   This command will display the installed version of Git.

3. If you have any issues with the installation, please refer to the official documentation for Git.

## Steps to Clone the Project

1. Open the command prompt and navigate to the directory where you want to clone the project.

2. Run the following command to clone the project:
   `git clone https://github.com/Fidelis-Sustainability-Distribution/zeus-client-app.git`

3. This will create a new folder named 'zeus-client-app' in the current directory and clone the project into it.

4. Now, navigate to the project folder 'zeus-client-app' and you should see all the project files.

## Steps to Install the Project Dependencies

1. Open the command prompt `Ctrll + ~` and navigate to the project folder 'zeus-client-app'.

2. Run the following command to install the project dependencies:
   `npm install`
   This command will use Node Package Manager (npm) to install all the required dependencies specified in the project.

   Or you can run the following command to install the project dependencies:

   `yarn install`
   This command will use Yarn to install all the required dependencies specified in the project. If yarn is not installed on your system, you can install it by running the following command:
   `npm install -g yarn`

3. After the installation is complete, you should see a new folder named 'node_modules' in the project folder 'zeus-client-app'.

4. Create a file named `.env.local` in the project's root folder and paste the following code into it, This file is used to set environment variables for the project.

   ```text
   NEXT_PUBLIC_API_BASE_URL=api.zeus.fidelissd.com
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_URL_INTERNAL=http://localhost:3000
   NEXTAUTH_SECRET=somesecret
   NEXT_PUBLIC_GOOGLE_CLIENT_ID=333107910861-d47980et5v48302f52g3n5palljbt387.apps.googleusercontent.com
   GOOGLE_CLIENT_SECRET=3hsQ2FwhFnaKla4CkE9dOMiz
   ```

5. Finally, run the following command in the terminal to start the project:
   `npm run dev` or `yarn dev`
   This command will build and run the project. Once it's running, you can access it in your web browser at [http://localhost:3000](http://localhost:3000).

## Commands for making consistent code style

This project is configured to use ESLint and Prettier along with Husky and Lint Staged to make code consistent and allow committing good quality code.

You can run these commands to maintain good quality code:

- `npm run lint` - To run eslint. This will run our code against the defined eslint rules and return us errors in our code if any. It will also suggest the issue with a brief message.

- `npm run prettier` - To run prettier. This will return us the error in formatting the code. Like line spacing, wrong indentation etc.

- `npm run type-check` - Quickly detect and fix all linting and formatting related issues (That are fixable by eslint and prettier). For more advance issues you might need to read the error message and fix yourself.

- `npm run lint-staged` - This is the same command that will be executed when you commit your code to a branch. Use this command to check the issues in advance about files in staging area looks good and commit can be successful or not. If this command fails, you will get a list of errors to fix. The errors returned by this command will be the same when you try to commit.

## Developer Tools (Optional)

### Enable Duet AI

Go here [Duet AI for VS Code](https://cloud.google.com/code/docs/vscode/write-code-duet-ai) and follow the instructions to enable Duet AI for VS Code.

### Enable Cloud Code

Go here [Cloud Code for VS Code](https://cloud.google.com/code/docs/vscode/install) and follow the instructions to enable Cloud Code for VS Code.

### Enable Prettier

Go here [Prettier for VS Code](https://prettier.io/docs/en/editors.html#visual-studio-code) and follow the instructions to enable Prettier for VS Code.
