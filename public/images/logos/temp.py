# -*- coding: utf-8 -*-
"""
Created on Thu May 13 18:59:40 2021

@author: Jack
"""

import os
from PIL import Image

def makeSquare(img):
    (x, y) = img.size
    print(x,y)
    if (x==y):
        return img
    if (x > y):
        extra = (x - y)
        left = (int)(extra // 2)
        right = (int)(extra - left)
        print('1', left, right)
        return(img.crop((left, 0, x-right, y)))
    else:
        extra = (y - x)
        top = extra // 2
        bottom = extra - top
        print('2', top, bottom)
        return(img.crop((0, top, x, y-bottom)))
        
def makeSquare2(img):
    (x, y) = img.size
    print(x,y)
    if (x==y):
        return img
    dim = max(x,y)
    fixed = Image.new('RGBA', (dim, dim), (0,0,0,0))
    fixed.paste(img, ((dim-x) // 2, (dim-y) // 2))
    return(fixed)


def squareAll():
    for file in os.listdir('./'):
        if (not (file[-3:] == 'png' or file[-3:] == 'jpg')):
            continue
        print(file)
        img = Image.open(file)
        fixed = makeSquare2(img)
        fixed.save('fixed-' + file[:-3] + '.png')

img = Image.open('aws-logo.png')
fixed = makeSquare2(img)

fixed.save('aws.png')




