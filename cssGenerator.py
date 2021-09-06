import json

#open css file
cssFile = open("src/css/random.css", "w")

#base container style
cssFile.write(".random-css-container {\n")
cssFile.write("\tbackground-color: white;\n")
cssFile.write("\tdisplay:          flex;\n")
cssFile.write("\tpadding:          .25rem;\n")
cssFile.write("\tposition:         relative;\n")
cssFile.write("}\n")

#center container
cssFile.write(".random-css-container-center {\n")
cssFile.write("\tmargin: auto;\n")
cssFile.write("\twidth:  min-content;\n")
cssFile.write("}\n")

#base character style
cssFile.write(".random-css-container div {\n")
cssFile.write("\tbox-sizing: border-box;\n")
cssFile.write("\toverflow:   min-content;\n")
cssFile.write("\ttext-align: center;\n")
cssFile.write("}\n")

rem = 0
while rem < 10:
    rem += .25
    cssFile.write(".random-css-container-" + str(rem).replace(".", "-") + " {\n")
    cssFile.write("\tfont-size: " + str(rem) + "rem;\n")
    cssFile.write("}\n")
    cssFile.write(".random-css-character-" + str(rem).replace(".", "-") + " {\n")
    cssFile.write("\theight: " + str(rem * 1.1875) + "rem;\n")
    cssFile.write("\twidth:  " + str(rem) + "rem;\n")
    cssFile.write("}\n")


#open file containing css properties
with open('src/js/components/Character/values/cssProperties.json', 'r') as cssPropertiesFile:
    data = cssPropertiesFile.read()

#parse json
cssProperties = json.loads(data)

#open file containing html color names
with open('src/js/components/Character/values/colors.json', 'r') as colorsFile:
    data = colorsFile.read()

#parse json
colors = json.loads(data)

#loop through css properties
for name in cssProperties:

    cssProperty = cssProperties[name]

    print("\n" + name)

    #color
    if (cssProperty['type'] == 'color'):

        for color in colors:

            cssFile.write(
                ".random-css-"
                + name
                + "-" + color
                + " { "
                + name
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