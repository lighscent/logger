# Logger

A simple and configurable logger using Winston with daily rotating file support and emoji-enhanced log messages.

## Features

- Daily rotating log files
- Console logging with colorized output
- Emoji-enhanced log messages for better readability
- Configurable log levels

## Installation

1. Télécharger la dernière version depuis le [GitHub](https://github.com/light2k4/logger/releases/latest).

2. Extraire les fichiers `logger.js` et `config.json` à la racine de votre projet:
    ```sh
    cd path/to/your/project
    unzip path/to/downloaded/logger.zip -d .
    ```

### Avec Yarn

3. Installer les dépendances:
    ```sh
    yarn install winston winston-daily-rotate-file
    ```

### Avec NPM

3. Installer les dépendances:
    ```sh
    npm install winston winston-daily-rotate-file
    ```

## Usage

1. Importer le logger dans votre projet:
    ```javascript
    const logger = require('./path/to/logger');
    ```

2. Utiliser le logger pour enregistrer des messages:
    ```javascript
    logger.error('This is an error message');
    logger.debug('This is a debug message');
    logger.info('This is an info message');
    logger.load('This is a load message');
    ```

## Log Levels

Le logger supporte les niveaux de log suivants, chacun avec un emoji correspondant:

- `error`: ❌
- `debug`: 🛠️
- `info`: ✔️
- `load`: ⏳

## Configuration

Le logger utilise un fichier de configuration `config.json` pour définir divers paramètres. Voici un exemple de fichier `config.json` :

```json
{
  "logDir": "logs",
  "maxSize": "20m",
  "maxFiles": "14d",
  "logLevel": "info"
}
```

### Explication des paramètres de configuration

- `logDir`: Le répertoire où les fichiers de log seront stockés.
- `maxSize`: La taille maximale d'un fichier de log avant qu'il ne soit rotatif. Par exemple, "20m" signifie 20 mégaoctets.
- `maxFiles`: Le nombre maximum de fichiers de log à conserver. Par exemple, "14d" signifie conserver les fichiers des 14 derniers jours.
- `logLevel`: Le niveau de log par défaut. Les niveaux disponibles sont error, debug, info, et load.

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