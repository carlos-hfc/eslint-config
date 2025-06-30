# ESLint Config

ESLint configuration for React and Node.js projects.

## Setup

### React 

Install dependencies:

```bash
npm i -D eslint @ch-faustino/eslint-config
```

Create eslint file:

```bash
touch eslint.config.js
```

Add to `eslint.config.js`:

```js
import config from "@ch-faustino/eslint-config/react.js"

export default config
```

### Node.js

Install dependencies:

```bash
npm i -D eslint @ch-faustino/eslint-config
```

Create eslint file:

```bash
touch eslint.config.js
```

Add to `eslint.config.js`:

```js
import config from "@ch-faustino/eslint-config/node.js"

export default config
```