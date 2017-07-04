# kio-ng2-index-templates


render digitorial boot sequence markup into ng2 index html files


```bash
$ kio-ng2-templates -t ./dist/index.html -i ./src/assets/i18n/*.json -o ./dist

> compiles handlebars template from ./dist/index.html 
> and renders an index-$lang.html in ./dist
> for each json file found at ./src/assets/i18n/
```


### usage 

```
Usage: kio-ng2-index-templates [options]

Options:
  --templateHtml, --html, -t  Template file to use for rendering	[string] [required] [default: "./dist/index.html"]

  --i18n, -i                  json files to use for translation. 
							  name is used as suffix for output 
  							  file. 								[array] [erforderlich] [default: "./src/assets/i18n/*.json"]

  --output, -o                output directory  					[string] [erforderlich] [Standard: "./dist"]
  -h                          print help                            [boolean]
  --format, -f     												    [string] [Möglichkeiten: "dasherize"] [Standard: "dasherize"]
```