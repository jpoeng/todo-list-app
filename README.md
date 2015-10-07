# todo-list-app
This is a basic todo list application built using a Rails backend framework and a React JS frontend. The goal of this project was to learn and implement a new technology on top of an existing one. I chose to learn React JS and implement it on a Rails application.

# A User should be able to...
- add a task
- edit a task
- delete a task
- view all tasks

# Getting started
### Set up
From the command line, start a new rails project:
```bash
rails new todolistapp
```

cd into todolistapp
```bash
cd todolistapp
```

Run bundle install
```bash
bundle install
```

Open up Sublime
```bash
subl .
```

### Installation
After opening up sublime, add `react-rails` to your gemfile:
```ruby
gem 'react-rails', '~> 1.3.0'
```

Next, run the installation script in the command line:

```bash
rails g react:install
```
For more information on installing react in rails, check out [react-rails](https://github.com/reactjs/react-rails).

### Controller
Generate a controller
```bash
rails g controller todo_app
```

#### Set Root Route (Optional)
In config.rb > routes.rb, uncomment line 8 and change "root 'welcome#index'" to "root 'todo_app#index'"
