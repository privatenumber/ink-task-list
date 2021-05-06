# ink-task-list <a href="https://npm.im/ink-task-list"><img src="https://badgen.net/npm/v/ink-task-list"></a> <!-- <a href="https://npm.im/ink-task-list"><img src="https://badgen.net/npm/dm/ink-task-list"></a> --> <a href="https://packagephobia.now.sh/result?p=ink-task-list"><img src="https://packagephobia.now.sh/badge?p=ink-task-list"></a>

Task list components for [Ink](https://github.com/vadimdemedes/ink)

<p align="center">
  <img width="400" src=".github/task-list.gif">
</p>

<sub>Support this project by ⭐️ starring and sharing it. [Follow me](https://github.com/privatenumber) to see what other cool projects I'm working on! ❤️</sub>

## 🚀 Install
```sh
npm i ink-task-list
```

## 🚦 Quick usage
```tsx
import React from 'react';
import { render } from 'ink';
import { TaskList, Task } from 'ink-task-list';

render(
    <TaskList>
        <!-- Pending state -->
        <Task
            label="Pending"
            state="pending"
        />

        <!-- Loading state -->
        <Task
            label="Loading"
            state="loading"
        />

        <!-- Success state -->
        <Task
            label="Success"
            state="success"
        />

        <!-- Warning state -->
        <Task
            label="Warning"
            state="warning"
        />

        <!-- Error state -->
        <Task
            label="Error"
            state="error"
        />

        <!-- Item with children -->
        <Task
            label="Item with children"
            isExpanded
        >
            <Task
                label="Loading"
                state="loading"
            />
        </Task>
    </TaskList>
);
```

## 🎛 API

### TaskList

Optional wrapper to contain a list of `Tasks`.

Basically just a `<Box flexDirection="column">`; only for styling and semantic purposes.

#### children
Type: `ReactNode | ReactNode[]`

Required

Pass in list of Tasks

### Task

Represents each task.

#### children
Type: `ReactNode | ReactNode[]`

Pass in one or more `<Task>` components

#### label
Type: `string`

Required
#### state
Type: `'pending'|'loading'|'success'|'warning'|'error'`

Default: `pending`

#### spinnerType
Type: `string`

Default: `dots`

#### isExpanded
Type: `boolean`

Default: `false`

## 🙏 Credits
The component UI was insipired [listr](https://github.com/SamVerschueren/listr) and [listr2](https://github.com/cenk1cenk2/listr2) ❤️

Big thanks to [Sindre Sorhus](https://github.com/sindresorhus) for making this package so easy to make.