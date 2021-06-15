# Github browser
This app lets GitHub users search for GitHub users and their repositories. For each user their avatar and name is displayed, and for each of their repos the number of stars of the repo is displayed as well as whether or not the repo is a fork.

Built with Vue.

## Future tasks
* make each repo clickable and send user to a web view within the app which displays the repo
* make searches persisted between page reloads
* each past search should display how many days or hours or minutes ago the search was done, the searched user and a button which links to the search result
* add trash icon in the search bar to delete past searches
* add ability to heart (like) a repo, each heart is persisted and displayed in the result list and the repo web view
* add tests

Of course, there is more functionality I might want to add e.g. caching recent requests, providing search results before user has pressed enter (only with the most relevant result), adding a spinner when waiting for the search result and more.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
