# File Structure

To support application growth this repo is split up into a number of directories and concepts to encourage separation of concerns for new features.

Concepts:

- models - map directly to the database schema and offer simple methods for accessing data
- libs - contain business logic
- utils - contains generic helper functions that are not domain/data specific
- request logic - rest controllers/graphql resolvers should be lightweight and rely on libs and utils for all their data and calculation needs
- domain areas - a conceptual grouping of the systems external facing services. Any of these could easily be broken out into their own separate microservice

Directory Structure

```
/
|- bin
|- config
|- docs
|- src
|  |- commonLibs        - shared libs that do not relate to a specific domain area
|  |- commonUtils       - shared generic utility funtions
|  |- dataProviders              - data sources with their models, connections and migrations
|  |- domainServices    - directories for grouping files needed for external facing services
|  |  |- <DOMAIN AREA>
|  |  |  |- graphql
|  |  |  |- rest
|  |  |  |- <DOMAIN AREA>Lib
|  |- externalServices  - configuration and integration with any external services

```

```
/
|- dataProviders
|  |- postgres
|  |  |- models
|  |  |- connection
|  |- redis
```
