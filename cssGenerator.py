import json

def hyphenate(camelCase):
    hyphenated = ''
    for character in camelCase:
        if not character.isupper():
            hyphenated += character
        else:
            hyphenated += "-" + character.lower()
    return hyphenated

#open file containing css properties
with open('src/js/properties/cssProperties.json', 'r') as cssPropertiesFile:
    data = cssPropertiesFile.read()

#parse json
cssProperties = json.loads(data)

#open file containing html color names
with open('src/js/properties/colors.json', 'r') as colorsFile:
    data = colorsFile.read()

#parse json
colors = json.loads(data)

#open css file
cssFile = open("src/random.css", "w")

#loop through css properties
for cssProperty in cssProperties:

    print("\n" + cssProperty['name'])

    #color
    if (cssProperty['type'] == 'color'):

        for color in colors:

            cssFile.write(
                ".random-css-"
                + cssProperty['name']
                + "-" + color
                + " { "
                + hyphenate(cssProperty['name'])
                + ": "
                + color
                +" }\n"
            )
    
    
"""
    #loop through the properties in this object
    for property in cssProperty:

        print("\t" + property)
        
        #get the value of this property
        value = cssProperty[property]
        if isinstance(value, str):
            print("\t\t" + value)
            
        else:
            print("\t\t" + str(type(value)))
"""

cssFile.close()