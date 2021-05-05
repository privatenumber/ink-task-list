# ink-task-runner <a href="https://npm.im/ink-task-runner"><img src="https://badgen.net/npm/v/ink-task-runner"></a> <a href="https://npm.im/ink-task-runner"><img src="https://badgen.net/npm/dm/ink-task-runner"></a> <a href="https://packagephobia.now.sh/result?p=ink-task-runner"><img src="https://packagephobia.now.sh/badge?p=ink-task-runner"></a> <a href="https://bundlephobia.com/result?p=ink-task-runner"><img src="https://badgen.net/bundlephobia/minzip/ink-task-runner"></a>

Task runner components for [Ink](https://github.com/vadimdemedes/ink)

<p align="center">
  <img width="400" src=".github/task-runner.gif">
</p>

<sub>Support this project by ⭐️ starring and sharing it. [Follow me](https://github.com/privatenumber) to see what other cool projects I'm working on! ❤️</sub>

## 🚀 Install
```sh
npm i ink-task-runner
```

## 🚦 Quick usage
```tsx
import React from 'react';
import { render } from 'ink';
import { List, ListItem } from 'ink-task-runner';

render(
    <List>
        <!-- Pending state -->
        <ListItem
            label="Pending"
            state="pending"
        />

        <!-- Loading state -->
        <ListItem
            label="Loading"
            state="loading"
        />

        <!-- Success state -->
        <ListItem
            label="Success"
            state="success"
        />

        <!-- Warning state -->
        <ListItem
            label="Warning"
            state="warning"
        />

        <!-- Error state -->
        <ListItem
            label="Error"
            state="error"
        />

        <!-- Item with children -->
        <ListItem
            label="Item with children"
            isExpanded
        >
            <ListItem
                label="Loading"
                state="loading"
            />
        </ListItem>
    </List>
);
```

## 🙏 Credits
The component UI was insipired [listr](https://github.com/SamVerschueren/listr) and [listr2](https://github.com/cenk1cenk2/listr2) ❤️
