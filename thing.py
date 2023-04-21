from PIL import Image
import PIL.ImageOps    

image = Image.open('dark-mode.png')

inverted_image = PIL.ImageOps.invert(image)

inverted_image.save('new_name.png')
