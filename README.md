# Logger

A simple and configurable logger using Winston with daily rotating file support and emoji-enhanced log messages.

## Features

- Daily rotating log files
- Console logging with colorized output
- Emoji-enhanced log messages for better readability
- Configurable log levels

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/logger.git
    cd logger
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Import the logger in your project:
    ```javascript
    const logger = require('./path/to/logger');
    ```

2. Use the logger to log messages:
    ```javascript
    logger.error('This is an error message');
    logger.debug('This is a debug message');
    logger.info('This is an info message');
    logger.load('This is a load message');
    ```

## Log Levels

The logger supports the following log levels, each with a corresponding emoji:

- `error`: ❌
- `debug`: 🛠️
- `info`: ✔️
- `load`: ⏳

## Configuration

The logger is configured to use daily rotating log files and console logging with colorized output. The log files are stored in the `./logs` directory with a date pattern of `YYYY-MM-DD`.

## Example

```javascript
const logger = require('./path/to/logger');

logger.error('This is an error message', { additional: 'data' });
logger.debug('This is a debug message');
logger.info('This is an info message');
logger.load('This is a load message');
```

## License
This project is licensed under the MIT License. See the LICENSE file for details.
