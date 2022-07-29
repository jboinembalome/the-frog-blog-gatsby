---
templateKey: blog-post
title: Install TailwindCSS with PostCSS v3
description: >-
  Hi

  Today we will install TailwindCSS to your existing Project with the PostCSS method.

  Step by step explained in a simple and detailed way
date: 2022-07-21T11:45:57.655Z
preview: ""
draft: ""
tags:
  - css
  - tailwind
  - tutorial
categories: ""
keywords: []
lastmod: 2022-07-21T11:52:11.889Z
---


Hi 👋  
Today we will install TailwindCSS to your existing Project with the PostCSS method.
Step by step explained in a simple and detailed way

> **What is PostCSS ?**  
**PostCSS** is a tool that will allow you to use plugins so it can help you during your developments for exemple it will automatically
> add "autoprefixer" to avoid any compatibility problem

## Step 1

First, go to the **[tailwindCSS](https://tailwindcss.com/)** website.
At the time of writing the article we have the version : **v3.1.6**
Then click on the "**Get started**" button
![](/install-tailwind/tailwindGetStarted.png)
And to finish with step 1, in installation choose "**Using PostCSS**".


## Step 2

The procedure realized by Tailwind is good but during my first installation, I realized that some things were missing. I would add some details 👨🏻‍🏫

First thing to do, go to your project via a terminal, under Visual Studio Code or your favorite code editor
With Visual Studio Code **`cmd+j`** to open the terminal

First order that is not specified: **`npm init -y`** to initialize the project.
**`-y`** is a shortcut to avoid entering a lot of details that you could fill later
**A package.json file has been created**

Once this is done we can copy and paste the commands provided by tailwinds :
_note that I added **-p** to initialize postCSS_
**`npm install -D tailwindcss postcss autoprefixer`**

> **Details of the command :**
>
> - tailwindcss : install tailwindcss
> - -D: dev dependency
> - postcss : install postcss
> - autoprefixer :
> - install autoprefixer

**`npx tailwindcss init -p`**

After that this is what your project looks like :
![](/install-tailwind/tinstall.png)

## Step 3

In **tailwind.config.js** file, you must fill the content field,
It should be understood as "**What do I have to look at**" or "**What files will tailwind apply to**".
if you only have an index.html file then you have to enter :

    module.exports  =  {
    content:  ["./index.html"],
    theme:  { extend:  {},
    },
    plugins:  [],
    }

Otherwise you can take all the files into account like this :

    module.exports  =  {
    content:  ["./src/**/*.{html,js}"],
    theme:  { extend:  {},
    },
    plugins:  [],
    }

## Step 4

Then you have to create a **css** file,
On my side I create a **`src`** folder then I create my **`input.css`** file

Inside your css file you will have to add these three directives provided by the tailwind documentation :

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

## Step 5

Now back to package.json to add a command.

Here in script we have to add a command to launch the machine:
**`"dev": "postcss ./src/input.css -o ./dist/output.css --watch"`**

Here I fill in my **input.css** file with the directives and a path for a new css file that will be generated in **dist** folder with this command.

This is our final css, the one that will be referenced in our index to use Tailwindcss

## Step 6

Now to run the command go to the project terminal and run the command :
**`npm run dev`**

You can now see your final css file in the **`dist`** folder.
You just have to link your css to your **`index.html`** for example.
`<link rel="stylesheet" href="dist/output.css">`

Do the test :
`<h1 className="text-center text-5xl font-extrabold mt-8">Hello World!</h1>`

![](/install-tailwind/tinstallfinal.png)

**Then you're done, TailwindCSS is all yours!**
![](/install-tailwind/helloworld.png)
