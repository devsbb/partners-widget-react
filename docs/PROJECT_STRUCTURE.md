## Project Structure
The project soure code structure is following:
```
    .
    ├── build                   # Compiled files
    ├── docs                    # Documentation files
    ├── src                     # Source files
    └── README.md
```

---

### Source files
Source files folder structure:
```
    .
    ├── components              # React components
    ├── icons                   # React components which renders SVG icons
    ├── styles                  # General styles (right now it only contains index.css which combine component styles)
    ├── translations            # Translation system with dictionaries and translation function
    ├── utils                   # Small helper functions
    ├── widgets                 # Variety types of widgets built from required components (Right now it's only DefaultWidget)
    └── index.js                # Project entry point
```

#### 1. Components
Structure of single component is following:
```
    button/
    ├── button.jsx              # Main component
    ├── styles.css              # Component styles
    ├── buttonIcon.jsx          # React component which is a part of the main component
    └── index.js                # Component entry point. It exports only the main component
```

#### 2. Services
Currently, it only has [Product Service](#product-service)

##### Product Service
This service manipulates products. Has only one method:
```
getProduct(payload)
```

#### 3. Translations
Translation system with dictionaries:
```
    translations/
    ├── dictionaries/
    |   ├── de.js               # Object with DE translation keys
    |   └── en.js               # Object with EN translation keys
    ├── tranlations.js          # Exports getTranslation(locale, translationKey) function
    └── index.js                # Entry point. It exports dictionaries and translation function
```

#### 4. Utils
Folder contains small helper functions
```
    .
    ├── enums.js
    ├── errorHandlers.js
    ├── eventHandlers.js
    ├── mappers.js
    ├── money.js
    ├── propTypes.js
    ├── request.js
    └── index.js
```

##### Enums
This module exports sharable enum values.

##### Error Handlers
This module exports global error handlers in order to track them or print them in console

##### Event Handlers
This module exports sharable event handlers e.g. `preventDefaultEventHandler`

##### Mappers
Data mappers. For example it has mapper that map API product data to widget representation format.

##### Money
Now it has only string formatter

#### PropTypes
Custom PropTypes validation functions

#### Request
It exports `fetchJSON` function in order to make API calls. It uses `fetch` and `Promise` ponyfills.

#### 5. Widgets
This module exports widgets built from components.

---