# kio-ng2-index-templates

render digitorial boot sequence markup into ng2 index html files

```bash
$ kio-ng2-templates -t ./dist/index.html -i ./src/assets/i18n/*.json -o ./dist

> compiles handlebars template from ./dist/index.html 
> and renders an index-$lang.html in ./dist
> for each json file found at ./src/assets/i18n/
```


## installation

```bash
npm i --save-dev github:afkm/kio-ng2-index-templates
```

## usage 

```bash
kio-ng2-index-templates --templateHtml ./src/index.html -i|--i18n ./src/assets/i18n/*.json -o ./dist

Optionen:
  --templateHtml, --html, -t  Template file to use for rendering                                                                                         [string] [erforderlich] [Standard: "./dist/index.html"]
  --i18n, -i                  json files to use for translation. name is used as name suffix for output file.       [array] [erforderlich] [Standard: ["./src/assets/i18n/de.json","./src/assets/i18n/en.json"]]
  --output, -o                Output directory                                                                                                                      [string] [erforderlich] [Standard: "./dist"]
  -h                          Hilfe anzeigen                                                                                                                                                           [boolean]
  --format, -f                                                                                                                                     [string] [Möglichkeiten: "dasherize"] [Standard: "dasherize"]
```