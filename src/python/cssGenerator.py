import json

targetFile = "src/styles/random.css"

# open css file
cssFile = open(targetFile, "w")

# base container style
cssFile.write(".random-css-container {\n")
cssFile.write("\tbackground-color: white;\n")
cssFile.write("\tdisplay:          flex;\n")
cssFile.write("\tpadding:          .25rem;\n")
cssFile.write("\tposition:         relative;\n")
cssFile.write("}\n")

# center container
cssFile.write(".random-css-container-center {\n")
cssFile.write("\tmargin: auto;\n")
cssFile.write("\twidth:  min-content;\n")
cssFile.write("}\n")

# base character style
cssFile.write(".random-css-container div {\n")
cssFile.write("\tbox-sizing: border-box;\n")
cssFile.write("\toverflow:   min-content;\n")
cssFile.write("\ttext-align: center;\n")
cssFile.write("}\n")

rem = 0
while rem < 10:
    rem += .25
    remString = str(rem)
    if remString.endswith(".0"):
        remString = remString[:-2]
    else:
        remString = remString.replace(".", "-")
    cssFile.write(".random-css-container-" +
                  remString + " {\n")
    cssFile.write("\tfont-size: " + str(rem) + "rem;\n")
    cssFile.write("}\n")
    cssFile.write(".random-css-character-" +
                  remString + " {\n")
    cssFile.write("\theight: " + str(rem * 1.1875) + "rem;\n")
    cssFile.write("\twidth:  " + str(rem) + "rem;\n")
    cssFile.write("}\n")


# open file containing css properties
with open('src/json/cssProperties.json', 'r') as cssPropertiesFile:
    data = cssPropertiesFile.read()

# parse json
cssProperties = json.loads(data)

# open file containing html color names
with open('src/json/colors.json', 'r') as colorsFile:
    data = colorsFile.read()

# parse json
colors = json.loads(data)


print("Writing to " + targetFile + "...")

# loop through css properties
for name in cssProperties:

    cssProperty = cssProperties[name]

    print("\t" + name)

    # animation
    if (cssProperty['type'] == 'animation'):
        for duration in cssProperty['durations']:
            for easingFunction in cssProperty['easingFunctions']:
                for iterationCount in cssProperty['iterationCounts']:
                    for direction in cssProperty['directions']:
                        for fillMode in cssProperty['fillModes']:
                            for animationName in cssProperty['names']:
                                animationOptions = (
                                    duration,
                                    easingFunction,
                                    '0s',
                                    iterationCount,
                                    direction,
                                    fillMode,
                                    'running',
                                    animationName
                                )
                                cssFile.write(
                                    ".random-css-animation-"
                                    + '-'.join(animationOptions)
                                    + " { "
                                    + name
                                    + ": "
                                    + ' '.join(animationOptions)
                                    + " }\n"
                                )

    # array
    elif (cssProperty['type'] == 'array'):

        for value in cssProperty['values']:

            cssFile.write(
                ".random-css-"
                + cssProperty['camelCase']
                + "-"
                + value.replace(" ", "-").replace('"', '')
                + " { "
                + name
                + ": "
                + value
                + " }\n"
            )

    # color
    elif (cssProperty['type'] == 'color'):

        for color in colors:

            cssFile.write(
                ".random-css-"
                + cssProperty['camelCase']
                + "-" + color
                + " { "
                + name
                + ": "
                + color
                + " }\n"
            )

    # percentage
    elif (cssProperty['type'] == 'percentage'):
        for number in range(1, 101, 1):
            cssFile.write(
                ".random-css-"
                + cssProperty['camelCase']
                + "-" + str(number)
                + " { "
                + name
                + ": "
                + str(number) + "%"
                + " }\n"
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

print("Successfully generated CSS file.")
